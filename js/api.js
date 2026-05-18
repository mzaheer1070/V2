// ===== API Configuration =====
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

// ===== API Functions =====

/**
 * Fetch data from API endpoint
 * @param {string} endpoint - API endpoint path
 * @param {object} options - fetch options (method, headers, body, etc.)
 * @returns {Promise} - API response data
 */
async function apiCall(endpoint, options = {}) {
    try {
        const url = `${API_BASE_URL}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error('API Call Failed:', error);
        throw error;
    }
}

/**
 * GET request
 */
async function apiGet(endpoint) {
    return apiCall(endpoint, { method: 'GET' });
}

/**
 * POST request
 */
async function apiPost(endpoint, body) {
    return apiCall(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
    });
}

/**
 * PUT request
 */
async function apiPut(endpoint, body) {
    return apiCall(endpoint, {
        method: 'PUT',
        body: JSON.stringify(body),
    });
}

/**
 * DELETE request
 */
async function apiDelete(endpoint) {
    return apiCall(endpoint, { method: 'DELETE' });
}

// ===== Sample API endpoints =====

async function getSamplePost(postId = 1) {
    return apiGet(`/posts/${postId}`);
}

async function getSampleUser(userId = 1) {
    return apiGet(`/users/${userId}`);
}

async function getSampleTodos(userId = 1) {
    return apiGet(`/todos?userId=${userId}`);
}
