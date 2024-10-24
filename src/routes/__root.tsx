import NavBar from "@/components/navbar";
import { useTheme } from "@/components/theme-provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Toaster } from "sonner";

const RootComponent = () => {
  const { lightOrDark } = useTheme();
  return (
    <>
      <NavBar />
      <Outlet />
      <Toaster richColors theme={lightOrDark} />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
};

export const Route = createRootRoute({
  component: RootComponent,
});
