export async function GET() {
  const siteUrl = import.meta.env.SITE || "https://luxestudios.ca"; // Update with your domain

  // List of all static pages (manually added)
  const staticPages = [
    "/",
    "/about-us",
    "/portfolio",
    "/packages",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  // Dynamically generate URLs for portfolio pages
  const portfolioPages = [
    { slug: "anmol-nidhi", path: "/our-work/anmol-nidhi" },
    { slug: "khaled-albina", path: "/our-work/khaled-albina" },
    { slug: "nikki-ryan", path: "/our-work/nikki-ryan" },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${[...staticPages, ...portfolioPages.map((p) => p.path)]
          .map(
            (path) => `
          <url>
            <loc>${siteUrl}${path}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>${path === "/" ? "1.0" : "0.8"}</priority>
          </url>`
          )
          .join("")}
      </urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
