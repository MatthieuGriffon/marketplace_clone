import Route from '@ioc:Adonis/Core/Route'
/*
|--------------------------------------------------------------------------
| Routes GET
|--------------------------------------------------------------------------
*/

Route.get('/', async () => {
  return { hello: 'world' }
})

/*
|--------------------------------------------------------------------------
| Routes POST
|--------------------------------------------------------------------------
*/
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
