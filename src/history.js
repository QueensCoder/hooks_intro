import { createMemoryHistory } from "history";
import { createBrowserHistory as createHistory } from "history";

const history =
  process.env.NODE_ENV === "test" ? createMemoryHistory() : createHistory();

export default history;
