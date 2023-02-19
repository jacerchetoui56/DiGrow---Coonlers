import { Suspense, lazy, useEffect, useState } from "react";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import Loading from "./components/Loading";
import MainLayout from "./components/MainLayout";
import { useAuth } from "./context/authContext";

function App() {
  const { pathname } = useLocation();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const url = pathname.split("?")[0];
    const publicPaths = ["/login", "/signin"];
    if (!user && !isAuthenticated && !publicPaths.includes(url)) {
      navigate("/login");
    } else if (!user && !isAuthenticated && publicPaths.includes(url)) {
      navigate(url);
    } else if ((isAuthenticated && publicPaths.includes(url)) || url === "/") {
      navigate("/dashboard");
    }
    //eslint-disable-next-line
  }, [pathname, user, isAuthenticated]);

  // !--------- using useRoutes hook -------------
  // * defining the lazy load components
  const Dashboard = lazy(() => import("./pages/Dashboard"));
  const Login = lazy(() => import("./pages/Login"));
  const SingIn = lazy(() => import("./pages/Signin"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  const routes = useRoutes([
    {
      path: "/dashboard",
      element: (
        <MainLayout>
          <Dashboard />
        </MainLayout>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/signin",
      element: <SingIn />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <Suspense fallback={<Loading />}>{routes}</Suspense>;
}

export default App;
