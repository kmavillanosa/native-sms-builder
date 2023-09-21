import { Layout, Page } from "@/shared/components";
import { useState } from "react";

export default function Home() {
  const [body, setBody] = useState("");

  const handleSendSMS = () => {
    const smsLink = `sms:+639452873791&body=${encodeURIComponent(body)}`;

    // Check if the device is running iOS (iPhone or iPad)
    const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Check if the device is running Android
    const isAndroid = /Android/.test(navigator.userAgent);

    if (isiOS) {
      // For iOS devices, open the link using window.open
      window.open(smsLink);
    } else if (isAndroid) {
      // For Android devices, open an intent to send an SMS
      window.location.href = `sms:+639452873791?body=${encodeURIComponent(body)}`;
    } else {
      // For other devices, use the 'sms:' protocol
      window.location.href = smsLink;
    }
  };

  return (
    <Page title="Welcome to NextLaunch">
      <Layout>
        <input value={body} onChange={(e) => setBody(e.target.value)} />
        <button onClick={handleSendSMS}>Send SMS</button>
      </Layout>
    </Page>
  );
}




