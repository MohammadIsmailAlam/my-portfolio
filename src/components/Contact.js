import { useRef, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import "../Style/contact.css";
const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_oe9dncn",
        "template_nra8fgx",
        formRef.current,
        "0jUxZHpI2HDpq7GM2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Thanks! I'll reply ASAP 😊");
          setStatus("");
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          setMessage("Something went wrong. Please try again later.");
          setStatus("");
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <p style={{ textAlign: "center" }}>
        I do receive your messages and will respond ASAP if a valid email is
        provided 🙂
      </p>

      <h2>Contact Me</h2>
      <div className="container contact__container rainbow">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ismailalam901@gmail.com</h5>
            <a
              href="mailto:ismailalam901@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            {status || "Send Message"}
          </button>
          {message && <span className="message-status">{message}</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
