"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyMessage = void 0;
class ReplyMessage {
    static unauthorized(reply) {
        reply.header('Content-Type', 'application/json').status(401).send('unauthoried');
    }
    static notFount(reply) {
        reply.header('Content-Type', 'application/json').status(404).send('unauthoried');
    }
    static success(reply, message) {
        const body = {
            data: message
        };
        reply.header('Content-Type', 'application/json').status(200).send(body);
    }
}
exports.ReplyMessage = ReplyMessage;
//# sourceMappingURL=ReplyMessage.js.map