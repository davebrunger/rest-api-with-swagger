import express from "express";
import morgan from "morgan";
import router from "./routes";
import { serve, setup } from "swagger-ui-express";

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use("/docs", serve, setup(undefined, {
    swaggerOptions: {
        url: "/swagger.json"
    }
}));

app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});