import fastify from 'fastify';
import mongoose from 'mongoose';
import routes from './routes';
import { Options } from './config/swagger';
import { config } from './config';
import swagger from 'fastify-swagger';
import nextAdapter from 'fastify-nextjs'
const env = process.env.NODE_ENV;

// Configure App
const app = fastify({ logger: true });

app.register(nextAdapter)
  .after(() => {

	  //? Don't ask why this works. I don't know.
	  //? If it doesn't work, try commenting out the entirety of _app.js and then building.
	  //? Once built, uncomment the file and let the hot reload build it.
	  //? If you can fix this, please let me know.

	  if(app.next) {
		app.next('/')
		app.next('/worlds')
		app.next('/login')
	  }
	  else {
		  console.log("Something went wrong.");
		  
	  }
  })
 

//? API Documentation is available at /api/docs

app.register(swagger, Options);

routes.forEach(route => {
	app.route(route);
});

const start = async (): Promise<void> => {
	try {
		await app.listen(config.app.port);
		app.swagger();
	} catch (err) {
		app.log.error(err);
		process.exit(1);
	}
};
start();

export default app;

//TODO: Something with a test environment

if (env !== 'test') {
	mongoose
		.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(() => app.log.info('MongoDB connected...'))
		.catch(err => app.log.error(err));
}
