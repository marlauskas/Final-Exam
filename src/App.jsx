import { lazy } from "react";

const ClientDatabase = lazy(() => import("./pages/ClientDatabase"));

function App() {
  return <ClientDatabase />;
}

export default App;
