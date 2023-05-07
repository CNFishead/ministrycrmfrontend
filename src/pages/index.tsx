import PageLayout from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";
import { useMediaQuery } from "react-responsive";
import PrivateRoute from "@/components/privateRoute/PrivateRoute";

export default function Home() {
  // get the size of the screen using react-responsive useMediaQuery hook
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <PageLayout pages={[navigation().home.links.home]} largeSideBar={isMobile}>
      <PrivateRoute permissions={["user"]}>
        <h1>Home</h1>
      </PrivateRoute>
    </PageLayout>
  );
}
