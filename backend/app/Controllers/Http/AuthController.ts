import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User' // Assurez-vous que le chemin d'accès est correct

export default class AuthController {
  public async register({ request, response }: HttpContextContract) {
    const userData = request.only(['name', 'email', 'password'])
    const user = await User.create(userData)
    return response.created(user), { message: 'User created' }
  }
}
