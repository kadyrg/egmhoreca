module.exports = {
  apps: [
    {
      name: "egmhoreca-web",
      cwd: "/var/www/egmhoreca-web",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      env: {
        NODE_ENV: "production",
        API_BASE_URL: "https://api.egmhoreca.ro/website",
      },
    },
  ],
};
