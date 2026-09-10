import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  canonical,
  image = "/images/shilpi-logo.png",
  keywords = "",
}) {
  const siteName = "Shilpi Jewels";

  const fullTitle = title
    ? `${title} | ${siteName}`
    : siteName;

  return (
    <Helmet>

      {/* =========================
          BASIC SEO
      ========================= */}

      <title>{fullTitle}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        name="robots"
        content="index, follow"
      />

      {/* =========================
          CANONICAL
      ========================= */}

      {canonical && (
        <link
          rel="canonical"
          href={canonical}
        />
      )}

      {/* =========================
          OPEN GRAPH
      ========================= */}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:title"
        content={fullTitle}
      />

      <meta
        property="og:description"
        content={description}
      />

      {canonical && (
        <meta
          property="og:url"
          content={canonical}
        />
      )}

      <meta
        property="og:site_name"
        content={siteName}
      />

      <meta
        property="og:image"
        content={image}
      />

      {/* =========================
          TWITTER
      ========================= */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={fullTitle}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

    </Helmet>
  );
}

export default SEO;