import { merge } from "webpack-merge";
import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";

import common from "./webpack.common.js";

const webpackConfig = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
});

export default function () {
  const compiler = webpack(webpackConfig);
  const devServer = new webpackDevServer(
    { ...webpackConfig.devServer },
    compiler
  );

  const runServer = async () => {
    console.log("Starting server....");
    await devServer.start();
  };
  runServer();
}
