import { FC } from "react";
import { APP_CONTAINER_ID } from "../../constants";
import { appContainer } from "./app.css";
import { main } from "../index.css";
import Map from "../map";

export const App: FC = () => (
  <div className={appContainer} id={APP_CONTAINER_ID}>
    <main className={main}>
      <Map />
    </main>
  </div>
);

export default App;
