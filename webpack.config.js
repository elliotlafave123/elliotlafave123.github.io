const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devtool: "eval-source-map",
  entry: {
    cv: "./src/TypeScript/PageSpecific/CV/index.ts",
    index: "./src/TypeScript/PageSpecific/Articles/index.ts",
    clientScreeningForm: "./src/TypeScript/Forms/Client Screening Form/index.ts",
    contactForm: "./src/TypeScript/Forms/ContactMeForm/index.ts",
    darkMode: "./src/TypeScript/DarkMode/index.ts",
    breadcrumb: "./src/TypeScript/components/Breadcrumb/index.ts",
    cookieBanner: "./src/TypeScript/components/CookieBanner/index.ts",
    header: "./src/TypeScript/components/Header/index.ts",
    footer: "./src/TypeScript/components/Footer/index.ts",
    comments: "./src/TypeScript/apps/Comments/index.ts",
    portfolioCards: "./src/TypeScript/apps/Portfolio Cards/index.ts",
    auth: "./src/TypeScript/Authentication/auth.ts",
    logIn: "./src/TypeScript/Authentication/Views/Login/Login.ts",
    signUp: "./src/TypeScript/Authentication/Views/Sign Up/signUp.ts",
    profile: "./src/TypeScript/Authentication/Views/Profile/Profile.ts",
    verifyEmail: "./src/TypeScript/Authentication/Views/Verify Email/verifyEmail.ts",
    requestPasswordReset: "./src/TypeScript/Authentication/Views/Reset Password/requestPasswordReset.ts",
    resetPassword: "./src/TypeScript/Authentication/Views/Reset Password/resetPassword.ts",
    accountPage: "./src/TypeScript/Authentication/Views/Account/AccountPage.ts",
    passwordRequirements: "./ComponentAssets/simpleComponents/passwordRequirements/passwordRequirements.ts",
    passwordInput: "./ComponentAssets/simpleComponents/Forms/Form Fields/PasswordInput.ts",
    requestEmailVerification:
      "./src/TypeScript/Authentication/Views/Request Email Verification/requestEmailVerification.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [
          path.resolve(__dirname, "./src/TypeScript"),
          path.resolve(__dirname, "./ComponentAssets/simpleComponents/"),
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name]-TSBundle.js",
    path: path.resolve(__dirname, "./public/scripts"),
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: 6, // Specify ECMAScript target version
          compress: {
            warnings: false, // Suppress warnings
            drop_console: true, // Drop console statements
            drop_debugger: true, // Remove debugger statements
            pure_funcs: ["console.log"], // Remove specific functions (e.g., console.log)
          },
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: {
            comments: false, // Remove comments
          },
        },
        parallel: true, // Use multi-process parallel running to improve the build speed
        extractComments: false, // Do not extract comments to separate file
      }),
    ],
  },
  mode: "production",
};
