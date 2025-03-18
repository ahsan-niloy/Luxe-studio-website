export function GET() {
  const siteUrl = import.meta.env.SITE || "https://luxestudios.ca"; // Update with your domain

  const robotsTxt = `User-agent: *
  Disallow:
  Sitemap: ${siteUrl}/sitemap.xml
  `;

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
