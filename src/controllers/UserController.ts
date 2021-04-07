import { Request, Response } from 'express'
class UserController {
  async index (req: Request, res: Response): Promise<Response> {
    const { teste } = req.body

    return res.json({ teste })
  }
}

export default UserController
