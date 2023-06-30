import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Routes/Routes";



ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="bg-[#090a0e] h-[100%] p-10 w-[100%] text-white">
    <div className="container mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  </div>
);