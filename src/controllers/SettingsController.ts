import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from '../repositories/SettingsRepository';
import { SettingsService } from '../services/SettingsService';

class SettingsController {
  async create(request: Request, response: Response): Promise<Response> {
    const { chat, username } = request.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.create({ chat, username });

    return response.json(settings);
  }

  async get(request: Request, response: Response): Promise<Response> {
    const settingsRepository = getCustomRepository(SettingsRepository);

    const settings = await settingsRepository.find();

    return response.json(settings);
  }
}

export { SettingsController };
