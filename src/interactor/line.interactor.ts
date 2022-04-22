import { validateSignature } from "@line/bot-sdk";
import { MessageModel } from "../model/messageModel";

export class LineInteractor {
  public static signatureCheck(messageModel: MessageModel, signature: string): boolean {
    if (!process.env.channelSecret) throw new Error('not found for line config');
    const bodyHash = messageModel.toString();
    const verify = validateSignature(bodyHash, process.env.channelSecret, signature);
    return verify;
  }

  public static botCheck(messageModel: MessageModel): boolean {
    if (messageModel.destination() !== undefined && messageModel.toJson().events.length === 0) {
      return true;
    }
    return false;
  }

  public static messageTypeCheck (messageModel: MessageModel): boolean {
    if (messageModel.messageType() === 'message') {
      return true;
    }
    return false;
  }
}
