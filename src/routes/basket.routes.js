import { Router } from "express";
import basketController from "../controllers/basket.controller.js";
import {
    createbasketschema,
    updatebasketschema,
} from "../validation/basket.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerBasket = new Router();

routerBasket
    .get("/", basketController.getAll)
    .get("/:id", basketController.getId)
    .post("/", validate(createbasketschema), basketController.create)
    .put("/:id", validate(updatebasketschema), basketController.update)
    .delete("/:id", basketController.delete);

export { routerBasket };
