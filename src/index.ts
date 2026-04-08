import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

const app = new Elysia()
  .use(
    cors({
      origin: "http://127.0.0.1:4321",
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    })
  );

app.post("/query", () => Bun.file("./mocks/post-query-rct-100639.json").json());
app.get("/rental/recurring-rates", () => Bun.file("./mocks/get-rental-recurring-rates.json").json());
app.get("/rental/contracts/100549", () => Bun.file("./mocks/get-rental-contracts-100549.json").json());
app.get("/rental/contracts/100639", () => Bun.file("./mocks/get-rental-contracts-100639.json").json());
app.get("/rental/contracts/100549/invoice-periods", () => Bun.file("./mocks/get-rental-contracts-100549-invoice-periods.json").json());
app.get("/rental/contracts/100549/items", () => Bun.file("./mocks/get-rental-contracts-100549-items.json").json());
app.get("/rental/contracts/100549/items/14/rental-units", () => Bun.file("./mocks/get-rental-contracts-100549-items-14-rental-units.json").json());

app.listen(8889);