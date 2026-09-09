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
   TERMS & CONDITIONS
========================= */

function TermsConditions() {
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
       CONTENT
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
       CONTENT BLOCK
    ========================= */

    block: {
      width: "100%",

      margin: isMobile
        ? "0 0 32px"
        : "0 0 38px",

      padding: 0,

      boxSizing: "border-box",
    },

    /* =========================
       SUB HEADING
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

      lineHeight: 1.25,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       BODY
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
       IMPORTANT NOTICE
    ========================= */

    notice: {
      width: "100%",

      maxWidth: "1000px",

      marginTop: "10px",

      padding: isMobile
        ? "22px"
        : "24px 28px",

      borderLeft: "3px solid #292566",

      backgroundColor: "#f3f2ff",

      boxSizing: "border-box",
    },

    noticeText: {
      margin: 0,

      padding: 0,

      fontFamily: '"Jost", sans-serif',

      fontSize: isMobile
        ? "16px"
        : "18px",

      fontWeight: 400,

      lineHeight: isMobile
        ? 1.75
        : 1.8,

      color: "#292566",

      textAlign: "left",
    },

    /* =========================
       CONTACT BOX
    ========================= */

    contactBox: {
      width: "100%",

      maxWidth: "1000px",

      marginTop: "10px",

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
          Terms and Conditions
        </h1>

        <p style={styles.introduction}>
          These Terms & Conditions explain the general terms
          that apply when you access and use the Shilpi Jewels
          website and interact with our brand through our
          online communication channels.
        </p>

        <p style={styles.updated}>
          Last updated: 2026
        </p>


        {/* =========================
            TERMS CONTENT
        ========================= */}

        <div style={styles.content}>

          {/* 01 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              01. Introduction
            </h2>

            <p style={styles.paragraph}>
              This website is operated for informational and
              brand communication purposes by Shilpi Jewels.
              By accessing this website, you agree to use it
              responsibly and in accordance with these terms.
            </p>

          </div>


          {/* 02 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              02. Website Information
            </h2>

            <p style={styles.paragraph}>
              We make reasonable efforts to ensure that the
              information presented on our website is accurate
              and useful. Jewellery descriptions, images,
              collection information and other content are
              provided for general informational purposes.
            </p>

            <p style={styles.paragraph}>
              Information may be updated, changed or removed
              from the website without prior notice.
            </p>

          </div>


          {/* 03 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              03. Jewellery Images and Descriptions
            </h2>

            <p style={styles.paragraph}>
              We take care in presenting our jewellery and
              collections online. However, differences in
              screens, photography, lighting and display
              settings may result in variations between images
              shown on the website and the actual jewellery.
            </p>

          </div>


          {/* 04 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              04. Enquiries and Communication
            </h2>

            <p style={styles.paragraph}>
              Visitors may contact Shilpi Jewels through the
              website, telephone, email or other communication
              channels provided by us.
            </p>

            <p style={styles.paragraph}>
              Information submitted through an enquiry form
              should be accurate and should belong to the person
              submitting the enquiry or be provided with the
              appropriate permission.
            </p>

          </div>


          {/* 05 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              05. WhatsApp Communications
            </h2>

            <p style={styles.paragraph}>
              Where WhatsApp communication is offered, it may
              be used to respond to customer enquiries, provide
              requested information and communicate regarding
              interactions initiated by the customer.
            </p>

            <p style={styles.paragraph}>
              Customers should provide consent where required
              before receiving ongoing WhatsApp communications.
              Communication preferences and opt-out requests
              should be respected.
            </p>

          </div>


          {/* 06 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              06. Intellectual Property
            </h2>

            <p style={styles.paragraph}>
              Unless otherwise stated, the content of this
              website, including photographs, jewellery imagery,
              logos, branding, written content, graphics and
              design elements, belongs to or is used by Shilpi
              Jewels with appropriate rights.
            </p>

            <p style={styles.paragraph}>
              Website content may not be copied, reproduced,
              modified or commercially used without appropriate
              authorization.
            </p>

          </div>


          {/* 07 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              07. Third-Party Links
            </h2>

            <p style={styles.paragraph}>
              Our website may contain links to third-party
              websites or platforms for convenience or
              communication purposes. Shilpi Jewels is not
              responsible for the content, availability or
              privacy practices of external websites.
            </p>

          </div>


          {/* 08 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              08. Responsible Use
            </h2>

            <p style={styles.paragraph}>
              Visitors agree not to use this website for any
              unlawful purpose, to interfere with the operation
              of the website, or to attempt unauthorized access
              to any part of the website or its systems.
            </p>

          </div>


          {/* 09 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              09. Changes to These Terms
            </h2>

            <p style={styles.paragraph}>
              Shilpi Jewels may update these Terms & Conditions
              from time to time. Changes will become effective
              when the revised terms are published on this page.
            </p>

          </div>


          {/* 10 */}

          <div style={styles.block}>

            <h2 style={styles.subHeading}>
              10. Contact Us
            </h2>

            <div style={styles.contactBox}>

              <p style={styles.contactText}>
                For questions regarding these Terms &
                Conditions, please contact Shilpi Jewels.
                <br />
                <br />
                Email: info@shilpijewels.com
                <br />
                Phone: +91 22 4066 0700
              </p>

            </div>

          </div>


          {/* =========================
              IMPORTANT NOTICE
          ========================= */}

          <div style={styles.block}>

            <div style={styles.notice}>

              <p style={styles.noticeText}>
                These Terms & Conditions are intended as
                website information and should be reviewed
                and finalized according to the actual
                operations of Shilpi Jewels and applicable
                legal requirements before publication.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TermsConditions;