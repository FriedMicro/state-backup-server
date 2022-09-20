import Koa from "koa";
import bodyParser from "koa-bodyparser";
import config from "./config.js";

const app = new Koa();

let state = {};

app.use(bodyParser());

app.use(async ctx => {
    const method = ctx.request.method;
    if(method === "POST"){
        state = ctx.request.body.state;
    } else {
        ctx.body = JSON.stringify(state);
    }
});

app.listen(config.port);