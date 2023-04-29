import PageLayout from '@/layout/page/Page.layout';
import { navigation } from '@/data/navigation';

export default function Home() {
  return (
    <PageLayout pages={[navigation.home.links.home]}>
  </PageLayout>
  )
}
