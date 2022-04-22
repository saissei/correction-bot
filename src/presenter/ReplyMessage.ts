import { FastifyReply } from 'fastify';

export class ReplyMessage {
  public static unauthorized(reply: FastifyReply): void {
    reply.header('Content-Type', 'application/json').status(401).send('unauthoried');
  }
  public static notFount(reply: FastifyReply): void {
    reply.header('Content-Type', 'application/json').status(404).send('unauthoried');
  }
  public static success(reply: FastifyReply, message: string): void {
    const body = {
      data: message
    };
    reply.header('Content-Type', 'application/json').status(200).send(body);
  }
}
