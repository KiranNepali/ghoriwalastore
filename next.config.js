const path = require("path");

module.exports = {
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push(
      {
        test: /\.(mp3)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      },
      {
        test: /\.(mp4)$/,
        use: {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      }
    );

    config.resolve.alias["@/public"] = path.resolve(__dirname, "public");

    return config;
  },
};