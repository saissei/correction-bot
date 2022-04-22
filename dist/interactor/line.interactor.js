"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineInteractor = void 0;
const bot_sdk_1 = require("@line/bot-sdk");
class LineInteractor {
    static signatureCheck(messageModel, signature) {
        if (!process.env.channelSecret)
            throw new Error('not found for line config');
        const bodyHash = messageModel.toString();
        const verify = bot_sdk_1.validateSignature(bodyHash, process.env.channelSecret, signature);
        return verify;
    }
    static botCheck(messageModel) {
        const token = messageModel.replyToken();
        if (token === '00000000000000000000000000000000') {
            return true;
        }
        return false;
    }
    static messageTypeCheck(messageModel) {
        if (messageModel.messageType() === 'message') {
            return true;
        }
        return false;
    }
}
exports.LineInteractor = LineInteractor;
//# sourceMappingURL=line.interactor.js.map