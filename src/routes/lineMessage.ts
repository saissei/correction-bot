import { FastifyInstance, FastifyReply, FastifyRequest, RouteShorthandOptions } from 'fastify';
import { IncomingMessage, Server, ServerResponse } from 'http';
import { MessageController } from '../controller/message.controller';

export default (server: FastifyInstance<Server, IncomingMessage, ServerResponse>, opts: RouteShorthandOptions, next: (err?: Error) => void): void => {
  server.post('/', opts, (req: FastifyRequest, rep: FastifyReply) => {
    console.log(req.body)
    MessageController.handle(req, rep);
  });

  server.get('/', opts, (req: FastifyRequest, rep: FastifyReply) => {
    rep.header('Content-Type', 'application/json').status(200).send('OK');
  });

  next();
};
