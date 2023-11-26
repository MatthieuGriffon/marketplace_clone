import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Logger from '@ioc:Adonis/Core/Logger'

export default class AuthController {
    public async register({ request, response }: HttpContextContract) {
        const userData = request.only(['name', 'email', 'password'])
        const user = await User.create(userData)
        return response.created(user), { message: 'User created' }
    }
    public async login({ request, auth, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        Logger.info('Attempting login', { email })
        try {
            await auth.attempt(email, password)
            return response.redirect('/')
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }
}
