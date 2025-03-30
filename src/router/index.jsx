import { useState, useEffect } from "react";
import PublicRoutes from "./public-routes";
import ProtectedRoutes from "./protected-routes";

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setCurrentPath(window.location.pathname);
    });
    return () => {
      window.removeEventListener("popstate", () => {
        setCurrentPath(window.location.pathname);
      });
    };
  }, []);

  return getComponent(currentPath);
}

function getComponent(path) {
  let route = ProtectedRoutes.find((route) => route.path === path);
  const isUserLoggedIn = false;

  if (route) {
    return isUserLoggedIn ? route.component : <>Unauthorized</>;
  }

  route = PublicRoutes.find((route) => route.path === path);
  return route ? route.component : <>Not Found</>;
}
