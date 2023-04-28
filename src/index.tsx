import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./App";
import Post from "./Post";
import PostDetail from "./PostDetail";
import Loading from "./Loading";
import User from "./User";

const rootRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}></Route>
      <Route path="post" element={<Post />}></Route>
      <Route path="user" element={<User />} />
      <Route path="post/:id" element={<PostDetail />} />
    </>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={rootRouter} />
    </Suspense>
  </React.StrictMode>
);
