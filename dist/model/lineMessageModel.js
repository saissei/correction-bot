"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineMessageModel = void 0;
class LineMessageModel {
    static messageToLineMessage(messageModel) {
        const msg = {
            type: 'text',
            text: messageModel.parse()
        };
        return msg;
    }
}
exports.LineMessageModel = LineMessageModel;
//# sourceMappingURL=lineMessageModel.js.map