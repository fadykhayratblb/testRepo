import Layout from '../app/layout';
import { Button } from '@blue-beetle-web/components';

export default function ButtonDemo() {
  return (
    <Layout>
      <Button>Default</Button>
      <Button variant="outline">Outlined</Button>
      <Button variant="danger">danger</Button>
    </Layout>
  );
}
