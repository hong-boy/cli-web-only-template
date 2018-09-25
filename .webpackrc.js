const path = require("path");
const config = require("./config/index");

const rootdir = path.join(__dirname);

export default {
    alias: {
        // 自定义别名建议用“@”开头
        "@components": path.resolve(rootdir, "src/components/"),
        "@utils": path.resolve(rootdir, "src/utils/"),
        "@assets": path.resolve(rootdir, "src/assets"),
    },
    extraBabelPlugins: [
        [
            "import",
            { libraryName: "antd", libraryDirectory: "es", style: true },
        ],
    ],
    hash: true,
    publicPath: "/",
    ignoreMomentLocale: true,
    disableDynamicImport: false,
    lessLoaderOptions: {
        javascriptEnabled: true,
    },
    env: {
        development: {
            // 等价于process.env.NODE_ENV=development
            extraBabelPlugins: ["dva-hmr"],
            define: {
                "process.env": {
                    NODE_ENV_API_ORIGIN: config.apiOrigin,
                    NODE_ENV_DEVELOPMENT: config.development,
                    NODE_ENV_LOG_API_ORIGIN: config.logApiOrigin,
                    NODE_ENV_SYS_NAME: config.sysName,
                },
            },
            html: {
                template: "./src/index.ejs",
            },
        },
        production: {
            define: {
                "process.env": {
                    NODE_ENV_API_ORIGIN: config.apiOrigin,
                    NODE_ENV_DEVELOPMENT: config.development,
                    NODE_ENV_LOG_API_ORIGIN: config.logApiOrigin,
                    NODE_ENV_SYS_NAME: config.sysName,
                    NODE_ENV_SSO_URL: config.ssoUrl,
                },
            },
            html: {
                template: "./src/index.ejs",
                filename: path.resolve(__dirname, "dist/index.html"),
            },
        },
    },
};
