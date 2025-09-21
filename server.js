const path = require('path');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const router = jsonServer.router(path.join(__dirname, 'db', 'db.json'));
const blogRouter = jsonServer.router(path.join(__dirname, 'db', 'blogPosts.json'));

server.use(middlewares);
server.use(jsonServer.bodyParser);

// debug: verifique se o arquivo certo foi carregado e quais chaves existem
/* console.log('db.json ->', Object.keys(router.db.getState()));
console.log('blogPosts.json ->', Object.keys(blogRouter.db.getState())); */

// prefixos
server.use('/blog', blogRouter);
server.use('/', router);

server.listen(3000, () => console.log('JSON Server on http://127.0.0.1:3000'));
