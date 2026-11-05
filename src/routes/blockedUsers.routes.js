import { Router } from "express";
import blockedUsersController from "../controllers/blockedUsers.controller.js";
import {
    createBlockUserSchema,
    updateBlockUserSchema,
} from "../validation/blockedUsers.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerBlockedUsers = new Router();

routerBlockedUsers
    .get("/", blockedUsersController.getAll)
    .get("/:id", blockedUsersController.getId)
    .post("/", validate(createBlockUserSchema), blockedUsersController.create)
    .put("/:id", validate(updateBlockUserSchema), blockedUsersController.update)
    .delete("/:id", blockedUsersController.delete);

export { routerBlockedUsers };
