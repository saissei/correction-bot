"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinePresenter = void 0;
const bot_sdk_1 = require("@line/bot-sdk");
class LinePresenter {
    constructor(lineClient) {
        this.lineClient = lineClient;
    }
    static init() {
        const channelAccessToken = process.env.channelAccessToken;
        const channelSecret = process.env.channelSecret;
        if (!channelAccessToken || !channelSecret) {
            throw new Error('Configuration information is missing');
        }
        ;
        const lineClient = new bot_sdk_1.Client({ channelAccessToken, channelSecret });
        return new LinePresenter(lineClient);
    }
    async sendTextMessage(messageModel, textMessage) {
        const client = this.lineClient;
        const replyToken = messageModel.replyToken();
        await client.replyMessage(replyToken, textMessage);
    }
}
exports.LinePresenter = LinePresenter;
//# sourceMappingURL=line.presenter.js.map