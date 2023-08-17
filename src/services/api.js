import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // Replace with your actual API base URL
  timeout: 10000, // Set timeout for requests
  headers: {
    "Content-Type": "application/json"
  }
});

const apiEndpoints = {
  login: "/auth/login" // Replace with your login endpoint
  // Other API endpoints for CRUD operations can be added here
};

// Auth API functions
const authAPI = {
  login: async (credentials) => {
    try {
      const response = await instance.post(apiEndpoints.login, credentials);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  // Other authentication-related API functions can be added here
};

export default authAPI;
