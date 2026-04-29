// AI/ML Configuration
// API endpoints, security settings, and performance tuning configuration
const config = {
    apiEndpoints: {
        getUserData: "/api/v1/user/data",
        updateUserData: "/api/v1/user/update",
    },
    security: {
        jwtSecret: process.env.JWT_SECRET,
        encryptionKey: process.env.ENCRYPTION_KEY,
    },
    performance: {
        timeout: 5000,
        maxRetries: 3,
    }
};

module.exports = config;