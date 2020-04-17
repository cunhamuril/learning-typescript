import { Request, Response } from "express";

import EmailService from "../services/EmailService";

const users = [{ name: "Murilo", email: "murilo@mail.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { name: "Murilo", email: "murilo@mail.com" },
      message: { subject: "Bem-vindo ao TypeScript", body: "Yeeessshhhhh" },
    });

    res.send();
  },
};
