#!/usr/bin/env node
var prerender = require('./lib');
var WAIT_AFTER_LAST_REQUEST = 20000;

var server = prerender({
    workers: process.env.PRERENDER_NUM_WORKERS,
    iterations: process.env.PRERENDER_NUM_ITERATIONS,
    waitAfterLastRequest: WAIT_AFTER_LAST_REQUEST,
    jsTimeout: WAIT_AFTER_LAST_REQUEST
});


server.use(prerender.sendPrerenderHeader());
// server.use(prerender.basicAuth());
// server.use(prerender.whitelist());
server.use(prerender.blacklist());
// server.use(prerender.logger());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());
// server.use(prerender.inMemoryHtmlCache());
// server.use(prerender.s3HtmlCache());

server.start();
