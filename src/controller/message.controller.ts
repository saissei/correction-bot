import { FastifyReply, FastifyRequest } from "fastify";
import { LineInteractor } from "../interactor/line.interactor";
import { LineMessageModel } from "../model/lineMessageModel";
import { MessageModel } from "../model/messageModel";
import { LinePresenter } from "../presenter/line.presenter";
import { ReplyMessage } from "../presenter/ReplyMessage";

export class MessageController {
  public static async handle (req: FastifyRequest, rep: FastifyReply): Promise<void> {
    const signature = req.headers['x-line-signature'];
    const body = req.body;
    if (typeof signature !== 'string') {
      ReplyMessage.unauthorized(rep);
      return;
    }
    const messageModel = MessageModel.check(body);
    // if (!messageModel) {
    //   ReplyMessage.notFount(rep);
    //   return;
    // }

    const isBot = LineInteractor.botCheck(messageModel);
    if (isBot) {
      ReplyMessage.success(rep, 'OK');
      return;
    }
    const verify = LineInteractor.signatureCheck(messageModel, signature);

    if (!verify) {
      ReplyMessage.unauthorized(rep);
      return;
    }
    ReplyMessage.success(rep, 'OK');

    if (!LineInteractor.messageTypeCheck(messageModel)) {
      return;
    }

    const lineClient = LinePresenter.init();
    const textMessage = LineMessageModel.messageToLineMessage(messageModel);
    await lineClient.sendTextMessage(messageModel, textMessage);
  }
}
