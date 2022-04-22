"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_controller_1 = require("../controller/message.controller");
exports.default = (server, opts, next) => {
    server.post('/', opts, (req, rep) => {
        message_controller_1.MessageController.handle(req, rep);
    });
    server.get('/', opts, (req, rep) => {
        rep.header('Content-Type', 'application/json').status(200).send('OK');
    });
    next();
};
//# sourceMappingURL=lineMessage.js.map