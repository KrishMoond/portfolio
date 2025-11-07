import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SEO = ({ title, description, image }) => {
  const location = useLocation();
  const baseUrl = "https://krishmoond.com";
  const fullUrl = `${baseUrl}${location.pathname}`;

  const defaultTitle = "Krish Moond - Frontend Developer";
  const defaultDescription = "Frontend Developer specializing in React, Node.js, and modern web technologies. Building exceptional digital experiences.";
  const defaultImage = `${baseUrl}/bimoji.png`;

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;

  useEffect(() => {
    // Update document title
    document.title = seoTitle;

    // Update meta tags
    const metaTags = [
      { name: "description", content: seoDescription },
      { property: "og:title", content: seoTitle },
      { property: "og:description", content: seoDescription },
      { property: "og:image", content: seoImage },
      { property: "og:url", content: fullUrl },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: seoTitle },
      { name: "twitter:description", content: seoDescription },
      { name: "twitter:image", content: seoImage },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let element = document.querySelector(selector);

      if (!element) {
        element = document.createElement("meta");
        if (name) element.setAttribute("name", name);
        if (property) element.setAttribute("property", property);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    });
  }, [seoTitle, seoDescription, seoImage, fullUrl]);

  return null;
};

export default SEO;
