import Route from '@ioc:Adonis/Core/Route'
/*
|--------------------------------------------------------------------------
| Routes GET
|--------------------------------------------------------------------------
*/

Route.get('/', async () => {
    return { 'Hello world in JSON': 'Welcome to AdonisJS' }
})

/*
|--------------------------------------------------------------------------
| Routes POST
|--------------------------------------------------------------------------
*/
Route.post('/register', 'AuthController.register')
Route.post('/login', 'AuthController.login')
