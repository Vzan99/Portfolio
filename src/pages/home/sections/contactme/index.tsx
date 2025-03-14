"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

export default function ContactMe() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = (
    values: { name: string; email: string; message: string },
    { resetForm }: any
  ) => {
    const existingData = JSON.parse(
      localStorage.getItem("contactMessages") || "[]"
    );
    localStorage.setItem(
      "contactMessages",
      JSON.stringify([...existingData, values])
    );

    toast.success("Message saved successfully!", { position: "top-right" });
    resetForm();
  };

  return (
    <div className="contactme-section" id="contact">
      <div className="contactme-title">Contact Me</div>
      <p className="contactme-text">
        Feel free to Contact me by submitting the form below and i will get back
        to you as soon as possible
      </p>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="contactme-container">
            <Field
              className="contactme-input"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              className="contactme-input"
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <Field
              as="textarea"
              className="contactme-message"
              name="message"
              placeholder="Message"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-sm"
            />

            <button
              type="submit"
              className="contactme-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
      <div className="social-links-container">
        <a
          href="https://github.com/Vzan99"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-links"
            src="logo-github.png"
            alt="logo-github"
          ></img>
        </a>
        <a
          href="https://www.linkedin.com/in/prasetyo-aji-nugroho-a3a982355/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-links"
            src="logo-linkedin.png"
            alt="logo-linkedin"
          ></img>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100088803848986"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-links" src="logo-fb.png" alt="logo-fb"></img>
        </a>
        <a
          href="https://x.com/Ajiquarius"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="social-links"
            src="logo-twitter.png"
            alt="logo-twitter"
          ></img>
        </a>
        <a
          href="https://www.instagram.com/aji.prsty94/?next=%2F"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="social-links" src="logo-ig.png" alt="logo-ig"></img>
        </a>
      </div>
    </div>
  );
}
