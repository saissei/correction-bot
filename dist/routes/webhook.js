"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (server, opts, next) => {
    server.get('/', opts, (req, rep) => {
        rep.header('Content-Type', 'application/json').status(200).send({ status: 'ok' });
    });
    server.post('/', opts, (req, rep) => {
        console.log(req.body);
        rep.header('Content-Type', 'application/json').status(200).send({ status: 'ok' });
    });
    next();
};
//# sourceMappingURL=webhook.js.map