import { Hono } from "hono";
import { renderer } from "./renderer";
import Page from "./Page";

const app = new Hono();

app.use(renderer);

app.get("/", (c) => {
  return c.render(<Page />);
});

export default app;
