import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

/* =========================================================
   RESPONSIVE HOOK
========================================================= */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(query).matches
      : false,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    const update = () => setMatches(media.matches);

    update();

    media.addEventListener("change", update);

    return () => {
      media.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
}

/* =========================================================
   CONTACT PAGE
========================================================= */

function ContactPage() {
  const isMobile = useMediaQuery("(max-width: 600px)");

  const isTablet = useMediaQuery(
    "(min-width: 601px) and (max-width: 1100px)",
  );

  /* =======================================================
     EMAILJS CONFIGURATION
     
     Replace ONLY these values with your EmailJS details.
  ======================================================= */

  const EMAILJS_SERVICE_ID = "service_ud31gdq";
  const EMAILJS_TEMPLATE_ID = "template_ygwf328";
  const EMAILJS_PUBLIC_KEY = "4JDtLsC5Jy4q5ITUc";

  /* =======================================================
     GOOGLE MAP EMBED
  ======================================================= */

  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5377063688125!2d72.8317703!3d18.951845999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce230f6f8b79%3A0x695fd32cd2c3be34!2sSHILPI%20JEWELS!5e0!3m2!1sen!2sin!4v1790590569002!5m2!1sen!2sin";

  /* =======================================================
     FORM STATE
  ======================================================= */

  const [isSending, setIsSending] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  /* =======================================================
     STYLES
  ======================================================= */

  const styles = {
    /* =====================================================
       PAGE
    ===================================================== */

    page: {
      width: "100%",
      minHeight: "100vh",
      background: "#ffffff",
      color: "#272361",
      overflow: "hidden",
      boxSizing: "border-box",
    },

    /* =====================================================
       MAP HERO
    ===================================================== */

    hero: {
      position: "relative",
      width: "100%",
      marginTop: "22px",

      height: isMobile
        ? "760px"
        : isTablet
          ? "720px"
          : "650px",

      background: "#eeeeee",

      boxSizing: "border-box",
    },

    map: {
      position: "absolute",
      inset: 0,

      width: "100%",
      height: "100%",

      border: 0,

      display: "block",

      filter: "grayscale(12%) contrast(94%)",

      pointerEvents: "auto",
    },

    /* =====================================================
       MAP OVERLAY
    ===================================================== */

    mapOverlay: {
      position: "absolute",
      inset: 0,

      background:
        "linear-gradient(180deg, rgba(39,35,97,0.03) 0%, rgba(39,35,97,0) 55%, rgba(39,35,97,0.08) 100%)",

      pointerEvents: "none",

      zIndex: 2,
    },

    /* =====================================================
       INQUIRY BOX
    ===================================================== */

    inquiryBox: {
      position: "absolute",

      zIndex: 5,

      left: "50%",

      bottom: isMobile
        ? "-335px"
        : isTablet
          ? "-150px"
          : "-305px",

      transform: "translateX(-50%)",

      width: isMobile
        ? "calc(100% - 28px)"
        : isTablet
          ? "calc(100% - 70px)"
          : "min(1080px, calc(100% - 140px))",

      background: "#ffffff",

      border: "1px solid rgba(39,35,97,0.08)",

      boxShadow:
        "0 22px 60px rgba(39,35,97,0.14)",

      boxSizing: "border-box",
    },

    inquiryInner: {
      padding: isMobile
        ? "30px 24px 32px"
        : isTablet
          ? "38px 42px 42px"
          : "42px 48px 45px",

      boxSizing: "border-box",
    },

    /* =====================================================
       FORM HEADER
    ===================================================== */

    formHeader: {
      display: "flex",

      alignItems: "flex-end",

      justifyContent: "space-between",

      gap: "30px",

      paddingBottom: isMobile
        ? "22px"
        : "25px",

      borderBottom:
        "1px solid #ece9e3",

      boxSizing: "border-box",
    },

    formTitle: {
      margin: 0,

      fontFamily:
        '"Playfair Display", Georgia, serif',

      fontSize: isMobile
        ? "30px"
        : isTablet
          ? "38px"
          : "44px",

      lineHeight: 1.15,

      fontWeight: 400,

      letterSpacing: "-0.5px",

      color: "#272361",
    },

    formTitleItalic: {
      fontStyle: "italic",

      color: "#a18143",
    },

    formIntro: {
      margin: 0,

      maxWidth: "270px",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: isMobile
        ? "14px"
        : "16px",

      lineHeight: 1.7,

      fontWeight: 400,

      color: "#777777",

      textAlign: isMobile
        ? "left"
        : "right",
    },

    /* =====================================================
       FORM
    ===================================================== */

    form: {
      width: "100%",

      paddingTop: isMobile
        ? "24px"
        : "28px",

      boxSizing: "border-box",
    },

    formRow: {
      display: "grid",

      gridTemplateColumns: isMobile
        ? "1fr"
        : "1fr 1fr",

      gap: isMobile
        ? "19px"
        : "25px",

      marginBottom: isMobile
        ? "19px"
        : "22px",
    },

    field: {
      width: "100%",

      boxSizing: "border-box",
    },

    label: {
      display: "block",

      marginBottom: "8px",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: isMobile
        ? "13px"
        : "14px",

      fontWeight: 500,

      letterSpacing: "1.3px",

      textTransform: "uppercase",

      color: "#6f6f6f",
    },

    input: {
      width: "100%",

      height: isMobile
        ? "48px"
        : "52px",

      padding: "0 14px",

      border: "1px solid #dedbd5",

      background: "#ffffff",

      outline: "none",

      borderRadius: 0,

      boxSizing: "border-box",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: isMobile
        ? "14px"
        : "15px",

      fontWeight: 400,

      color: "#272361",

      transition:
        "border-color 0.25s ease",
    },

    textarea: {
      width: "100%",

      minHeight: isMobile
        ? "105px"
        : "115px",

      padding: "13px 14px",

      border: "1px solid #dedbd5",

      background: "#ffffff",

      outline: "none",

      borderRadius: 0,

      resize: "vertical",

      boxSizing: "border-box",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: isMobile
        ? "14px"
        : "15px",

      fontWeight: 400,

      lineHeight: 1.6,

      color: "#272361",

      transition:
        "border-color 0.25s ease",
    },

    /* =====================================================
       SUBMIT
    ===================================================== */

    submitRow: {
      display: "flex",

      alignItems: "center",

      justifyContent: isMobile
        ? "stretch"
        : "flex-end",

      marginTop: isMobile
        ? "22px"
        : "25px",
    },

    submit: {
      width: isMobile
        ? "100%"
        : "185px",

      height: "49px",

      border:
        "1px solid #272361",

      background: "#272361",

      color: "#ffffff",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: "15px",

      fontWeight: 500,

      letterSpacing: "1.5px",

      textTransform: "uppercase",

      cursor: isSending
        ? "not-allowed"
        : "pointer",

      borderRadius: 0,

      boxSizing: "border-box",

      opacity: isSending ? 0.75 : 1,

      transition:
        "background 0.3s ease, border-color 0.3s ease",
    },

    /* =====================================================
       FORM STATUS
    ===================================================== */

    status: {
      marginTop: "18px",

      fontFamily:
        '"Jost", Arial, sans-serif',

      fontSize: isMobile
        ? "13px"
        : "14px",

      lineHeight: 1.6,

      textAlign: "right",

      color:
        formStatus.type === "success"
          ? "#6d7d3d"
          : "#a18143",
    },

    /* =====================================================
       WHITE SPACE BELOW MAP
    ===================================================== */

    belowMap: {
      width: "100%",

      minHeight: isMobile
        ? "380px"
        : "350px",

      background: "#ffffff",

      paddingTop: isMobile
        ? "270px"
        : isTablet
          ? "205px"
          : "185px",

      boxSizing: "border-box",
    },
  };

  /* =======================================================
     EMAILJS SUBMIT
  ======================================================= */

const handleSubmit = async (event) => {
  event.preventDefault();

  setIsSending(true);

  setFormStatus({
    type: "",
    message: "",
  });

  try {
    const form = event.currentTarget;

    await emailjs.sendForm(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      form,
      {
        publicKey: EMAILJS_PUBLIC_KEY,
      }
    );

    setFormStatus({
      type: "success",
      message:
        "Thank you. Your enquiry has been received. Our team will get back to you shortly.",
    });

    form.reset();
  } catch (error) {
    console.error("EmailJS Error:", error);

    setFormStatus({
      type: "error",
      message:
        "We were unable to send your enquiry. Please try again.",
    });
  } finally {
    setIsSending(false);
  }
};

  /* =======================================================
     INPUT FOCUS HELPERS
  ======================================================= */

  const handleFocus = (event) => {
    event.currentTarget.style.borderColor =
      "#a18143";
  };

  const handleBlur = (event) => {
    event.currentTarget.style.borderColor =
      "#dedbd5";
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <main style={styles.page}>

      {/* =================================================
          MAP + FLOATING INQUIRY
      ================================================= */}

      <section
        style={styles.hero}
        aria-label="Shilpi Jewels Location"
      >

        {/* GOOGLE MAP */}

        <iframe
          title="Shilpi Jewels Location"
          src={mapEmbedUrl}
          style={styles.map}
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* MAP OVERLAY */}

        <div style={styles.mapOverlay} />


        {/* =================================================
            INQUIRY BOX
        ================================================= */}

        <div style={styles.inquiryBox}>

          <div style={styles.inquiryInner}>

            {/* =================================================
                FORM HEADER
            ================================================= */}

            <div style={styles.formHeader}>

              <h1 style={styles.formTitle}>
                Make an{" "}
                <span
                  style={styles.formTitleItalic}
                >
                  Enquiry
                </span>
              </h1>

              {!isMobile && (
                <p style={styles.formIntro}>
                  Tell us a little about what
                  you are looking for and our
                  team will be happy to assist
                  you.
                </p>
              )}

            </div>


            {/* =================================================
                FORM
            ================================================= */}

            <form
              style={styles.form}
              onSubmit={handleSubmit}
            >

              {/* =================================================
                  NAME + PHONE
              ================================================= */}

              <div style={styles.formRow}>

                <div style={styles.field}>

                  <label
                    htmlFor="name"
                    style={styles.label}
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    style={styles.input}
                    autoComplete="name"
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />

                </div>


                <div style={styles.field}>

                  <label
                    htmlFor="phone"
                    style={styles.label}
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    style={styles.input}
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />

                </div>

              </div>


              {/* =================================================
                  EMAIL + INTEREST
              ================================================= */}

              <div style={styles.formRow}>

                <div style={styles.field}>

                  <label
                    htmlFor="email"
                    style={styles.label}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    style={styles.input}
                    autoComplete="email"
                    required
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />

                </div>


                <div style={styles.field}>

                  <label
                    htmlFor="interest"
                    style={styles.label}
                  >
                    Interest
                  </label>

                  <input
                    id="interest"
                    type="text"
                    name="interest"
                    placeholder="Jewellery or enquiry type"
                    style={styles.input}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />

                </div>

              </div>


              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div style={styles.field}>

                <label
                  htmlFor="message"
                  style={styles.label}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Please tell us how we can assist you"
                  style={styles.textarea}
                  required
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />

              </div>


              {/* =================================================
                  SUBMIT
              ================================================= */}

              <div style={styles.submitRow}>

                <button
                  type="submit"
                  style={styles.submit}
                  disabled={isSending}

                  onMouseEnter={(event) => {
                    if (!isSending) {
                      event.currentTarget.style.background =
                        "#a18143";

                      event.currentTarget.style.borderColor =
                        "#a18143";
                    }
                  }}

                  onMouseLeave={(event) => {
                    if (!isSending) {
                      event.currentTarget.style.background =
                        "#272361";

                      event.currentTarget.style.borderColor =
                        "#272361";
                    }
                  }}
                >
                  {isSending
                    ? "Sending..."
                    : "Send Enquiry"}
                </button>

              </div>


              {/* =================================================
                  STATUS MESSAGE
              ================================================= */}

              {formStatus.message && (
                <p style={styles.status}>
                  {formStatus.message}
                </p>
              )}

            </form>

          </div>

        </div>

      </section>


      {/* =================================================
          CLEAN WHITE AREA BELOW MAP
      ================================================= */}

      <section
        style={styles.belowMap}
        aria-hidden="true"
      />

    </main>
  );
}

export default ContactPage;