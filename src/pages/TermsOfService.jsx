import React from "react";
import { Helmet } from "react-helmet-async";

export default function TermsOfService() {
    return (
        <>
            <Helmet>
                <title>Terms of Service | YourSiteName</title>
                <meta
                    name="description"
                    content="Terms of Service outlining usage rules, liability limitations, and responsibilities."
                />
            </Helmet>

            <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
                <h1>Terms of Service</h1>

                <p>
                    By using this website, you agree to these Terms of Service.
                </p>

                <h2>Use of Tools</h2>
                <p>
                    All tools are provided on an “as-is” basis. We do not guarantee accuracy
                    or availability.
                </p>

                <h2>Limitation of Liability</h2>
                <p>
                    We are not responsible for any losses or damages resulting from the use
                    of this website.
                </p>

                <h2>User Responsibility</h2>
                <p>
                    You are responsible for how you use the information or tools provided.
                </p>

                <h2>Changes</h2>
                <p>
                    We may update these terms at any time without notice.
                </p>
            </div>
        </>
    );
}
