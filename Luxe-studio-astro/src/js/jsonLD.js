import siteData from "../data/siteData.json";
import { slugify } from "./utils.js"; // Ensure correct import with `.js` extension

export default function jsonLDGenerator({ type, post, url }) {
  if (type === "post") {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.title}",
        "description": "${post.description}",
        "image": "${post.image?.src || siteData.image.src}",
        "author": {
          "@type": "Person",
          "name": "${post.author}",
          "url": "/author/${slugify(post.author)}"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Luxe Studios",
          "logo": {
            "@type": "ImageObject",
            "url": "/assets/final-logo.svg"
          }
        },
        "datePublished": "${post.date}",
        "dateModified": "${post.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}",
      "publisher": {
        "@type": "Organization",
        "name": "Luxe Studios",
        "logo": {
          "@type": "ImageObject",
          "url": "/assets.final-logo.svg"
        }
      }
      }
    </script>`;
}
