import { Request, Response } from "express";

import { MessagesServices } from "../services/MessagesService";

class MessagesController {
  async create(request: Request, response: Response): Promise<Response> {
    const { admin_id, text, user_id } = request.body;

    const messagesServices = new MessagesServices();

    const message = await messagesServices.create({
      admin_id,
      text,
      user_id,
    });

    return response.status(201).json(message);
  }

  async showByUser(request: Request, response: Response) {
    const { id } = request.params;
    const messagesServices = new MessagesServices();

    const list = await messagesServices.listByUser(id);

    return response.status(200).json(list);
  }
}

export { MessagesController };
