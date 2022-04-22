"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const line_interactor_1 = require("../interactor/line.interactor");
const lineMessageModel_1 = require("../model/lineMessageModel");
const messageModel_1 = require("../model/messageModel");
const line_presenter_1 = require("../presenter/line.presenter");
const ReplyMessage_1 = require("../presenter/ReplyMessage");
class MessageController {
    static async handle(req, rep) {
        const signature = req.headers['x-line-signature'];
        const body = req.body;
        if (typeof signature !== 'string') {
            ReplyMessage_1.ReplyMessage.unauthorized(rep);
            return;
        }
        const messageModel = messageModel_1.MessageModel.check(body);
        const isBot = line_interactor_1.LineInteractor.botCheck(messageModel);
        if (isBot) {
            ReplyMessage_1.ReplyMessage.success(rep, 'OK');
            return;
        }
        const verify = line_interactor_1.LineInteractor.signatureCheck(messageModel, signature);
        if (!verify) {
            ReplyMessage_1.ReplyMessage.unauthorized(rep);
            return;
        }
        ReplyMessage_1.ReplyMessage.success(rep, 'OK');
        if (!line_interactor_1.LineInteractor.messageTypeCheck(messageModel)) {
            return;
        }
        const lineClient = line_presenter_1.LinePresenter.init();
        const textMessage = lineMessageModel_1.LineMessageModel.messageToLineMessage(messageModel);
        await lineClient.sendTextMessage(messageModel, textMessage);
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map