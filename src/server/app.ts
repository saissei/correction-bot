/* eslint-disable @typescript-eslint/no-var-requires */
import fastify from 'fastify';
import helmet from 'fastify-helmet';
import LineMessage from '../routes/lineMessage';
// import { Health } from '../routes/health';
import Webhook from '../routes/webhook';
const server = fastify();
const port = process.env.PORT || 3000;



class Instance {
  public constructor() {
    this.initialize();
    // server.get('/', Health.check);
    server.register(LineMessage, {prefix: '/'});
    server.register(Webhook, {prefix: '/hook'});
  }

  private initialize() {
    server.register(require('fastify-cors'));
    server.register(helmet);
    server.listen(port, '::', err => {
      if (err) throw err;
      console.log(`server listening on ${port}`);
    });
  }

}

new Instance();
