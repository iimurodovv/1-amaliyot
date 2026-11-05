import { Router } from "express";
import returnedProductsController from "../controllers/returnedProducts.controller.js";
import {
    createReturnedProductsSchema,
    updateReturnedProductsSchema,
} from "../validation/returnedProducts.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerReturnedProducts = new Router();

routerReturnedProducts
    .get("/", returnedProductsController.getAll)
    .get("/:id", returnedProductsController.getId)
    .post(
        "/",
        validate(createReturnedProductsSchema),
        returnedProductsController.create,
    )
    .put(
        "/:id",
        validate(updateReturnedProductsSchema),
        returnedProductsController.update,
    )
    .delete("/:id", returnedProductsController.delete);

export { routerReturnedProducts };
