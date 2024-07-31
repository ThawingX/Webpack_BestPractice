import openDevServer from "./webpack.dev";
import build from "./webpack.prod";

const { NODE_ENV = "development" } = process.env;

console.log("current env :".NODE_ENV);

NODE_ENV === "development" ? openDevServer() : build();
