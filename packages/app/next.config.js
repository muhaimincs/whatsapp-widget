const withTM = require("next-transpile-modules");

module.exports = withTM({
  transpileModules: ["launcher", "chatbox"],
  distDir: "build"
});
