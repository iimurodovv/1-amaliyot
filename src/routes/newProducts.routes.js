import { Router } from "express";
import newProductsController from "../controllers/newProducts.controller.js";
import {
    createNewProductsSchema,
    updateNewProductsSchema,
} from "../validation/newProducts.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerNewProducts = new Router();

routerNewProducts
    .get("/", newProductsController.getAll)
    .get("/:id", newProductsController.getId)
    .post("/", validate(createNewProductsSchema), newProductsController.create)
    .put(
        "/:id",
        validate(updateNewProductsSchema),
        newProductsController.update,
    )
    .delete("/:id", newProductsController.delete);

export { routerNewProducts };
