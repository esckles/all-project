/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

import api from "./e.g.,api";

const App = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    api
      .get("/test")
      .then((Response) => setData(Response.data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      <h1>Data from Backend</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;
