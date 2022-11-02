import { Link, Outlet } from "@remix-run/react";
import type { ReactElement } from "react";

export default function RootPage(): ReactElement {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="h-full overflow-y-auto bg-blue-500">
        <Outlet />
      </div>
      <div className="w-full bg-red-500 flex justify-between">
        <Link to="/">Home</Link>
        <Link to="/previous">Previous</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  );
}
