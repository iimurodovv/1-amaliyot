import { Router } from "express";
import trendProductsController from "../controllers/trendProducts.controller.js";
import {
    createTrendProductsSchema,
    updateTrendProductsSchema,
} from "../validation/trendProducts.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerTrendProducts = new Router();

routerTrendProducts
    .get("/", trendProductsController.getAll)
    .get("/:id", trendProductsController.getId)
    .post(
        "/",
        validate(createTrendProductsSchema),
        trendProductsController.create,
    )
    .put(
        "/:id",
        validate(updateTrendProductsSchema),
        trendProductsController.update,
    )
    .delete("/:id", trendProductsController.delete);

export { routerTrendProducts };
