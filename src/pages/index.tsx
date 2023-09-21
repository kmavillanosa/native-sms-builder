import { Layout, Page } from "@/shared/components";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [body, setBody] = useState("");

  return (
    <Page title="Welcome to NextLaunch">
      <Layout>
        <input value={body} onChange={(e) => setBody(e.target.value)} />
        <a href={`sms:+639452873791?body=${encodeURIComponent(body)}`}>
          Send SMS
        </a>
      </Layout>
    </Page>
  );
}
