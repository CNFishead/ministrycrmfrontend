import PageLayout from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";
import AccountDetails from "@/screens/account_details/AccountDetails.screen";
import { useMediaQuery } from "react-responsive";
import PrivateRoute from "@/components/privateRoute/PrivateRoute";

export default function Home() {
  // get the size of the screen using react-responsive useMediaQuery hook
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <PageLayout pages={[navigation.account_details.links.account_details]} largeSideBar={isMobile}>
      <PrivateRoute permissions={["user"]}>
        <AccountDetails />
      </PrivateRoute>
    </PageLayout>
  );
}
