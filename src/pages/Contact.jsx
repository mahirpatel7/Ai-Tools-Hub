import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
    return (
        <>
            <Helmet>
                <title>Contact Us | AiToolsHub</title>
                <meta
                    name="description"
                    content="Contact page for questions, feedback, or support."
                />
            </Helmet>

            <div style={{ padding: "24px", maxWidth: "900px", margin: "auto" }}>
                <h1>Contact Us</h1>

                <p>
                    For any questions, feedback, or support, please contact us at:
                </p>

                <p>
                    <b>Email:</b> mpdeveloper632004@gmail.com
                </p>
            </div>
        </>
    );
}
