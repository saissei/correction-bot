"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageModel = void 0;
class MessageModel {
    constructor(message) {
        this.message = message;
    }
    static validate(e) {
        if (!e || e === null || typeof e !== 'object')
            return;
        if (e.events === undefined)
            return;
    }
    static check(message) {
        this.validate(message);
        return new MessageModel(message);
    }
    toString() {
        return JSON.stringify(this.message);
    }
    toJson() {
        return this.message;
    }
    replyToken() {
        return this.message.events[0].replyToken;
    }
    userId() {
        return this.message.events[0].source.userId;
    }
    parse() {
        return this.message.events[0].message.text.replace(/\n/, '');
    }
    messageType() {
        return this.message.events[0].type;
    }
}
exports.MessageModel = MessageModel;
//# sourceMappingURL=messageModel.js.map