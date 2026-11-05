import { Router } from "express";
import categoryController from "../controllers/category.controller.js";
import {
    createCategoryaSchema,
    updateCategoryaSchema,
} from "../validation/category.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerCategory = new Router();

routerCategory
    .get("/", categoryController.getAll)
    .get("/:id", categoryController.getId)
    .post("/", validate(createCategoryaSchema), categoryController.create)
    .put("/:id", validate(updateCategoryaSchema), categoryController.update)
    .delete("/:id", categoryController.delete);

export { routerCategory };
