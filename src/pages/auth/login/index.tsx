import PageLayout from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";
import { useMediaQuery } from "react-responsive";
import Auth from "@/screens/auth/Auth.view";

export default function AuthScreen() {
  // get the size of the screen using react-responsive useMediaQuery hook
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <PageLayout pages={[navigation().auth.links.login]} largeSideBar={isMobile} meta={{ title: `CMS | Login` }}>
      <Auth />
    </PageLayout>
  );
}
