import React from "react";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | YourSiteName</title>
        <meta
          name="description"
          content="Privacy Policy explaining data collection, cookies, analytics, and user rights."
        />
      </Helmet>

      <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
        <h1>Privacy Policy</h1>

        <p>
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect non-personal information such as browser type, device
          information, and usage data.
        </p>

        <h2>Cookies & Analytics</h2>
        <p>
          We use Google Analytics to understand how users interact with the site.
          Google Analytics may use cookies to collect usage data.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Third-party services like analytics or affiliate partners may collect
          information as per their own privacy policies.
        </p>

        <h2>Affiliate Disclosure</h2>
        <p>
          This site may contain affiliate links. We may earn a commission at no
          extra cost to you.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions, contact us at: <b>support@yoursite.com</b>
        </p>
      </div>
    </>
  );
}
