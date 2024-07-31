import openDevServer from "./webpack.dev.js";
import build from "./webpack.prod.js";

const { NODE_ENV = "development" } = process.env;

console.log("current env :".NODE_ENV);

NODE_ENV === "development" ? openDevServer() : build();
