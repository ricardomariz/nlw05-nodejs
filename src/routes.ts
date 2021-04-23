import { Router } from "express";

import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();

const settingsController = new SettingsController();
const usersControlller = new UsersController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersControlller.create);

export { routes };
