module.exports = {
  target: "serverless",
  throwIfNamespace: false,
  async redirects() {
    return [
      {
        source: "/staff",
        destination: "/staff/dashboard",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/staff/main/dashboard",
        destination: "/staff/dashboard",
        permanent: true,
      },
      {
        source: "/profile",
        destination: "/profiles",
        permanent: false,
      },
    ];
  },
};
