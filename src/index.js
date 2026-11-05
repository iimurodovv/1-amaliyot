import express from "express";
import { config } from "dotenv";
import { router } from "./routes/users.routes.js";
import { routerProducts } from "./routes/product.routes.js";
import { routerCategory } from "./routes/category.routes.js";
import { routerBasket } from "./routes/basket.routes.js";
import { routerBlockedUsers } from "./routes/blockedUsers.routes.js";
import { routerReturnedProducts } from "./routes/returnedProducts.routes.js";
import { routerDiscount } from "./routes/discounts.routes.js";
import { routerNewProducts } from "./routes/newProducts.routes.js";
import { routerTrendProducts } from "./routes/trendProducts.routes.js";

config();

const app = express();

const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/users", router);
app.use("/products", routerProducts);
app.use("/category", routerCategory);
app.use("/basket", routerBasket);
app.use("/blockedUsers", routerBlockedUsers);
app.use("/returnedProducts", routerReturnedProducts);
app.use("/discounts", routerDiscount);
app.use("/newProducts", routerNewProducts);
app.use("/trendProducts", routerTrendProducts);

app.listen(port, () => {
    console.log(`Server is running on ${port}-port`);
});
