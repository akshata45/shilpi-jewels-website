import { useEffect, useState } from "react";

/* =========================
   RESPONSIVE HOOK
========================= */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false
  );

  useEffect(() => {
    const media = window.matchMedia(query);

    const update = () => setMatches(media.matches);

    update();

    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, [query]);

  return matches;
}

/* =========================
   PRIVACY POLICY COMPONENT
========================= */

function PrivacyPolicy() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1100px)"
  );

  const styles = {
    /* =========================
       SECTION
    ========================= */

    section: {
      width: "100%",

      marginTop: "30px",

      padding: 0,

      boxSizing: "border-box",

      overflow: "hidden",
    },

    /* =========================
       MAIN CONTAINER
    ========================= */

    container: {
      width: isMobile
        ? "100%"
        : isTablet
          ? "94%"
          : "84.5%",

      maxWidth: "1500px",

      margin: "0 auto",

      padding: isMobile
        ? "45px 24px 60px"
        : isTablet
          ? "50px 35px 65px"
          : "58px 55px 75px",

      background:
        "linear-gradient(180deg, #f7f6ff 0%, #fbfaff 55%, #ffffff 100%)",

      boxSizing: "border-box",
    },

    /* =========================
       PAGE LABEL
    ========================= */

    label: {
      margin: 0,

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "12px"
        : "16px",

      fontWeight: 500,

      letterSpacing: "2.5px",

      textTransform: "uppercase",

      color: "#77749c",

      textAlign: "left",
    },

    /* =========================
       MAIN HEADING
    ========================= */

    heading: {
      margin: isMobile
        ? "13px 0 0"
        : "15px 0 0",

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "40px"
        : isTablet
          ? "45px"
          : "56px",

      fontWeight: 400,

      lineHeight: 1.12,

      letterSpacing: "-1px",

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       INTRODUCTION
    ========================= */

    introduction: {
      width: "100%",

      maxWidth: "850px",

      margin: isMobile
        ? "20px 0 0"
        : "22px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "20px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.75
        : 1.8,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       UPDATED DATE
    ========================= */

    updated: {
      margin: isMobile
        ? "17px 0 0"
        : "18px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "12px"
        : "16px",

      fontWeight: 400,

      lineHeight: 1.5,

      color: "#77749c",

      textAlign: "left",
    },

    /* =========================
       CONTENT AREA
    ========================= */

    content: {
      width: "100%",

      maxWidth: "1050px",

      margin: isMobile
        ? "40px 0 0"
        : "48px 0 0",

      padding: 0,

      boxSizing: "border-box",
    },

    /* =========================
       POLICY BLOCK
    ========================= */

    policyBlock: {
      width: "100%",

      margin: isMobile
        ? "0 0 32px"
        : "0 0 38px",

      padding: 0,

      boxSizing: "border-box",
    },

    /* =========================
       SECTION HEADING
    ========================= */

    subHeading: {
      margin: 0,

      padding: 0,

      fontFamily: '"Playfair Display", serif',

      fontSize: isMobile
        ? "24px"
        : isTablet
          ? "27px"
          : "35px",

      fontWeight: 400,

      lineHeight: 1.0,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       BODY TEXT
    ========================= */

    paragraph: {
      width: "100%",

      maxWidth: "1000px",

      margin: isMobile
        ? "13px 0 0"
        : "15px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "20px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.75
        : 1.78,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       LIST
    ========================= */

    list: {
      width: "100%",

      maxWidth: "1000px",

      margin: isMobile
        ? "13px 0 0"
        : "15px 0 0",

      paddingLeft: isMobile
        ? "20px"
        : "22px",

      boxSizing: "border-box",
    },

    listItem: {
      margin: isMobile
        ? "8px 0"
        : "7px 0",

      paddingLeft: "5px",

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "14px"
        : "18px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.65
        : 1.7,

      color: "#292566",
    },

    /* =========================
       CONTACT BOX
    ========================= */

    contactBox: {
      width: "100%",

      maxWidth: "1000px",

      marginTop: isMobile
        ? "10px"
        : "12px",

      padding: isMobile
        ? "22px"
        : "24px 28px",

      border: "1px solid #d7d5e8",

      backgroundColor: "rgba(255,255,255,0.55)",

      boxSizing: "border-box",
    },

    contactText: {
      margin: 0,

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "18px",

      fontWeight: 400,

      lineHeight: 1.8,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       FOOTNOTE
    ========================= */

    note: {
      width: "100%",

      maxWidth: "1000px",

      margin: isMobile
        ? "5px 0 0"
        : "8px 0 0",

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "12px"
        : "16px",

      fontWeight: 400,

      lineHeight: 1.7,

      color: "#77749c",

      textAlign: "left",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>

        {/* =========================
            PAGE HEADER
        ========================= */}

        <p style={styles.label}>
          Shilpi Jewels
        </p>

        <h1 style={styles.heading}>
          Privacy Policy
        </h1>

        <p style={styles.introduction}>
          Your privacy matters to us. This Privacy Policy
          explains how Shilpi Jewels may collect, use and
          protect information shared with us through our
          website and customer communication channels.
        </p>

        <p style={styles.updated}>
          Last updated: 2026
        </p>

        {/* =========================
            POLICY CONTENT
        ========================= */}

        <div style={styles.content}>

          {/* 01 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              01. Information We Collect
            </h2>

            <p style={styles.paragraph}>
              When you interact with Shilpi Jewels through
              our website, enquiry forms or communication
              channels, we may receive information that you
              choose to provide to us.
            </p>

            <ul style={styles.list}>

              <li style={styles.listItem}>
                Name and contact information
              </li>

              <li style={styles.listItem}>
                Email address and telephone number
              </li>

              <li style={styles.listItem}>
                Information provided through enquiry forms
              </li>

              <li style={styles.listItem}>
                Details shared when you contact our team
              </li>

              <li style={styles.listItem}>
                Information you voluntarily provide through
                WhatsApp or other communication channels
              </li>

            </ul>

          </div>

          {/* 02 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              02. How We Use Your Information
            </h2>

            <p style={styles.paragraph}>
              Information shared with us may be used to
              respond to your enquiries, provide information
              about our jewellery and collections, assist
              with customer communication and improve our
              website and services.
            </p>

            <p style={styles.paragraph}>
              We use information only for legitimate business
              purposes and in accordance with applicable
              requirements.
            </p>

          </div>

          {/* 03 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              03. Website Enquiries
            </h2>

            <p style={styles.paragraph}>
              If you submit your details through an enquiry
              form on our website, the information may be used
              by our team to respond to your request or provide
              further information regarding Shilpi Jewels,
              our collections or services.
            </p>

          </div>

          {/* 04 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              04. WhatsApp Communications
            </h2>

            <p style={styles.paragraph}>
              Where you choose to communicate with us through
              WhatsApp, information shared during the
              conversation may be used to respond to your
              enquiry and provide customer support.
            </p>

            <p style={styles.paragraph}>
              We may send WhatsApp communications where we
              have the appropriate permission or other lawful
              basis to do so. You may request that we stop
              sending communications to you.
            </p>

          </div>

          {/* 05 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              05. Sharing of Information
            </h2>

            <p style={styles.paragraph}>
              We do not intend to sell your personal
              information. Information may be shared with
              service providers or technology partners when
              reasonably necessary to operate our website,
              communication systems or other business
              services, subject to appropriate safeguards.
            </p>

          </div>

          {/* 06 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              06. Data Security
            </h2>

            <p style={styles.paragraph}>
              We take reasonable measures to protect
              information provided to us against unauthorized
              access, misuse or disclosure. However, no method
              of electronic transmission or storage can be
              guaranteed to be completely secure.
            </p>

          </div>

          {/* 07 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              07. Third-Party Services
            </h2>

            <p style={styles.paragraph}>
              Our website or communication services may use
              third-party technologies or platforms. Such
              services may process information according to
              their own privacy policies and applicable
              requirements.
            </p>

          </div>

          {/* 08 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              08. Your Choices
            </h2>

            <p style={styles.paragraph}>
              You may contact us if you wish to ask about the
              personal information we hold about you, request
              correction of inaccurate information, or ask us
              to stop certain communications where applicable.
            </p>

          </div>

          {/* 09 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              09. Changes to This Policy
            </h2>

            <p style={styles.paragraph}>
              We may update this Privacy Policy from time to
              time to reflect changes in our business, website
              or applicable requirements. The updated version
              will be published on this page with the revised
              date.
            </p>

          </div>

          {/* 10 */}

          <div style={styles.policyBlock}>

            <h2 style={styles.subHeading}>
              10. Contact Us
            </h2>

            <div style={styles.contactBox}>

              <p style={styles.contactText}>
                If you have any questions regarding this
                Privacy Policy or the way we handle your
                information, please contact Shilpi Jewels.
                <br />
                <br />
                Email: info@shilpijewels.com
                <br />
                Phone: +91 22 4066 0700
              </p>

            </div>

            <p style={styles.note}>
              This page is intended to communicate the
              website's privacy practices. The final policy
              should be reviewed and approved according to
              your business operations and applicable law.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;