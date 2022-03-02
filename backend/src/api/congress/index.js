const Router = require("koa-router");

const congress = new Router();
const congressCtrl = require("./congress.controller");

congress.get("/", congressCtrl.list);
congress.post("/", congressCtrl.create);
congress.delete("/", congressCtrl.delete);
congress.put("/", congressCtrl.replace);
congress.patch("/", congressCtrl.update);

module.exports = congress;
