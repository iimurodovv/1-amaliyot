import { Router } from "express";
import discountController from "../controllers/discounts.controller.js";
import {
    createDiscountSchema,
    updateDiscountSchema,
} from "../validation/discounts.validate.js";
import { validate } from "../middleware/validate.middleware.js";

const routerDiscount = new Router();

routerDiscount
    .get("/", discountController.getAll)
    .get("/:id", discountController.getId)
    .post("/", validate(createDiscountSchema), discountController.create)
    .put("/:id", validate(updateDiscountSchema), discountController.update)
    .delete("/:id", discountController.delete);

export { routerDiscount };
