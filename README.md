# RESTful API with JSON Server for Vercel

- RUN
- `npm run dev`
  - `$ json-server --watch ./db/db.json`


- middlewares ? 
  - run `node server.json` make surce this file is import the `db.json`

# Routers

```js

- http://localhost:3000/
- GET https://api-restful-json.vercel.app
- GET /artists
- GET /posts
- GET /entregasuporte

- like
  - GET /posts?title_like=ea
- slug
  - GET /entregasuporte?slug=central-de-servico-gerenciamento-nivel-servico
  - GET /entregasuporte?slug_like=central-de-servico-gerenciamento-nivel-servico

// custom router
- GET /entregasuportex

// req.params
- GET /entregasuportex/:id => 

// req.query
- GET /getqueryinfo?id=34334 => posts?id=2


```

### just fetch 





More operators in [https://www.npmjs.com/package/json-server/v/0.17.4#operators](https://www.npmjs.com/package/json-server/v/0.17.4#operators)


This is a ready template, that you can clone, change and play, more information how to build from [scratch here](https://ivo-culic.medium.com/create-restful-api-with-json-server-and-deploy-it-to-vercel-d56061c1157a)
