import webpack from "webpack";
import { merge } from "webpack-merge";
import common from "./webpack.common.js";

const webpackConfig = merge(common, {
  mode: "production",
  devtool: "source-map",
});

export default function () {
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error("编译出错");
    } else {
      console.log("webpack 编译成功");
    }
  });
}
