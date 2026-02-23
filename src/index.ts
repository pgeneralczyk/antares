import { Elysia } from "elysia";

const app = new Elysia();

app.get("/rental/recurring-rates", () => Bun.file("./mocks/get-rental-recurring-rates.json").json());
app.get("/rental/contract/100549", () => Bun.file("./mocks/get-rental-contracts-100549.json").json());
app.get("/rental/contract/100549/invoice-periods", () => Bun.file("./mocks/get-rental-contracts-100549-invoice-periods.json").json());
app.get("/rental/contract/100549/items", () => Bun.file("./mocks/get-rental-contracts-100549-items.json").json());
app.get("/rental/contract/100549/items/14/rental-units", () => Bun.file("./mocks/get-rental-contracts-100549-items-14-rental-units.json").json());

app.listen(3000);