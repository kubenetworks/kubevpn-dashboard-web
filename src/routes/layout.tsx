import { Helmet } from "@modern-js/runtime/head";
import { Outlet } from "@modern-js/runtime/router";

import "@arco-design/web-react/dist/css/arco.css";
import "./tailwind.css";

export default function Layout() {
  return (
    <>
      <Helmet>
        <link rel="icon" type="image/x-icon" href="" />
      </Helmet>

      <Outlet />
    </>
  );
}
