"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const fastify_helmet_1 = __importDefault(require("fastify-helmet"));
const lineMessage_1 = __importDefault(require("../routes/lineMessage"));
const webhook_1 = __importDefault(require("../routes/webhook"));
const server = fastify_1.default();
const port = process.env.PORT || 3000;
class Instance {
    constructor() {
        this.initialize();
        server.register(lineMessage_1.default, { prefix: '/' });
        server.register(webhook_1.default, { prefix: '/hook' });
    }
    initialize() {
        server.register(require('fastify-cors'));
        server.register(fastify_helmet_1.default);
        server.listen(port, '::', err => {
            if (err)
                throw err;
            console.log(`server listening on ${port}`);
        });
    }
}
new Instance();
//# sourceMappingURL=app.js.map