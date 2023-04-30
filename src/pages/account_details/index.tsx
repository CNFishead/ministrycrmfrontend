import PageLayout from "@/layout/page/Page.layout";
import { navigation } from "@/data/navigation";

export default function Home() {
  return (
    <PageLayout pages={[navigation.account_details.links.account_details]} largeSideBar={true}>
      <h1>Home</h1>
    </PageLayout>
  );
}
