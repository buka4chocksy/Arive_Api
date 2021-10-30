import { components } from './components';
import { userDocs } from './users';
import { hobbyDocs } from './hobby';

const swaggerDocs = {
	openapi: '3.0.0',
	info: {
		version: '1.0.3',
		title: 'ARIVE REST API',
		description: 'Official documentation for ARIVE REST API.'
	},
	schemes: [],
	servers: [
		{
			url: '/api/v1',
			description: 'Development Server'
		}
	],

	paths: {
		'/user': userDocs,
		'/hobby': hobbyDocs
	},

	components: components
};

export { swaggerDocs };