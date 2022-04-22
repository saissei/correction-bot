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
    const destination = messageModel.destination();
    if (destination === 'U137ad8b8c2a7da79d6098270753e79e1') {
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
