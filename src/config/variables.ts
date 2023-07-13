const environmentVariables = {
    env: import.meta.env.VITE_NODE_ENV as string,
    development: {
        api_url: import.meta.env.VITE_DEV_API_URL as string,
    },
    production: {
        api_url: import.meta.env.VITE_PROD_API_URL as string,
    },
};

const config = environmentVariables.env === "development"
    ? environmentVariables.development
    : environmentVariables.production;

export default config;