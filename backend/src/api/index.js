const Router = require('koa-router');

const api = new Router();
const congress = require('./congress');

api.use('/congress', congress.routes());

module.exports = api;