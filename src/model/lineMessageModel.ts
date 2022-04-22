import { TextMessage } from "@line/bot-sdk";
import { MessageModel } from "./messageModel";

export class LineMessageModel {
  public static messageToLineMessage (messageModel: MessageModel): TextMessage {
    const msg: TextMessage = {
      type: 'text',
      text: messageModel.parse()
    };
    return msg;
  }
}
