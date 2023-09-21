import { Layout, Page } from "@/shared/components";
import Link from "next/link";


export default function Home() {
  return (
    <Page title="Welcome to NextLaunch">
      <Layout>
        <a href="sms:+639452873791?body=sample">Send SMS</a>
      </Layout>
    </Page>
  );
}
