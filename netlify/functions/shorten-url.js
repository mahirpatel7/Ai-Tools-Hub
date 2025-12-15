// netlify/functions/shorten-url.js
const axios = require("axios");

exports.handler = async (event) => {
  // Only allow POST from your React app
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }

  try {
    const { longUrl } = JSON.parse(event.body || "{}");

    if (!longUrl) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "longUrl is required" }),
      };
    }

    // Call Ulvis free URL shortener API
    // Docs: https://ulvis.net/developer.html
    const response = await axios.get("https://ulvis.net/API/write/get", {
      params: {
        url: longUrl,
        type: "json", // explicit JSON response
        private: 1,   // optional - keep URL unlisted
      },
    });

    const data = response.data;

    // Check success flag
    if (!data || String(data.success) !== "1") {
      console.error("Ulvis error response:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Ulvis API reported an error",
          details: data?.error || data,
        }),
      };
    }

    // Short URL we want to return to frontend
    const shortUrl = data.data?.url;

    if (!shortUrl) {
      console.error("Ulvis response missing short URL:", data);
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Ulvis API response did not contain a short URL",
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ shortUrl }),
    };
  } catch (error) {
    console.error("Error in shorten-url function:", error.message, error.response?.data);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to shorten URL",
        details: error.response?.data || error.message,
      }),
    };
  }
};
