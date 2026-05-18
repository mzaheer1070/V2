// ===== API Configuration =====
const API_BASE_URL = 'https://api.example.com'; // Replace with your API URL

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

        const data = await response.json();
        return data;
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

// ===== Example API Calls =====

// Example: Get user data
// async function getUser(userId) {
//     try {
//         const user = await apiGet(`/users/${userId}`);
//         console.log('User data:', user);
//         return user;
//     } catch (error) {
//         console.error('Failed to fetch user:', error);
//     }
// }

// Example: Create new data
// async function createProject(projectData) {
//     try {
//         const newProject = await apiPost('/projects', projectData);
//         console.log('Project created:', newProject);
//         return newProject;
//     } catch (error) {
//         console.error('Failed to create project:', error);
//     }
// }
