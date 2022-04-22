import { FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { MessageController } from '../controller/message.controller';

export default (server: FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: RouteShorthandOptions, next: (err?: Error) => void): void => {
  server.post('/', opts, (req: FastifyRequest, rep: FastifyReply) => {
    MessageController.handle(req, rep);
  });

  next();
};
