import React, { useState, useRef } from "react";
import {
  FormSection,
  ContactSubtitle,
  Form,
  ContactLabel,
  ContactInput,
  ContactTextarea,
  ContactSubmit,
  EmailIcon,
  SVGBackground,
} from "../components/styles/ContactElements";
import { Container, PageTitle } from "../GlobalStyles";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import {
  containerVariants,
  contactVariants,
} from "../components/styles/motionVariants";
import lightSVG from "../assets/low-poly-grid-haikei.svg";
import darkSVG from "../assets/low-poly-grid-haikei2.svg";

export default function Contact({ darkModeOn }) {
  const form = useRef(null);
  const [contactData, setContactData] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  const [messageSend, setMessageSend] = useState(false);
  const handleMessage = () => {
    setMessageSend((prevState) => !prevState);
  };
  function handleChange(e) {
    setContactData((prevData) => {
      return {
        ...prevData,
        [e.target.name]: e.target.value,
      };
    });
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1hioksi",
        "template_87ykntl",
        form.current,
        "jjuNbFcRGw2riBI0c"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    handleMessage();
    setContactData({ subject: "", name: "", email: "", message: "" });
    setTimeout(() => {
      handleMessage();
    }, 5000);
  };

  const background = darkModeOn ? darkSVG : lightSVG;

  return (
    <>
      <Container
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <SVGBackground url={background} />
        <PageTitle>Kontakt</PageTitle>
        <FormSection variants={contactVariants}>
          <ContactSubtitle>
            {messageSend ? "Dzięki za wiadomość" : "Napisz do mnie!"}
          </ContactSubtitle>
          <Form ref={form} onSubmit={sendEmail} dark={darkModeOn}>
            <ContactLabel spanSize={"small"}>
              Temat <br />
              <ContactInput
                type="text"
                name="subject"
                value={contactData.subject}
                onChange={handleChange}
              />
            </ContactLabel>
            <ContactLabel spanSize={"small"}>
              Imię <br />
              <ContactInput
                type="text"
                name="name"
                value={contactData.name}
                required
                onChange={handleChange}
              />
            </ContactLabel>
            <ContactLabel spanSize={"small"}>
              Email <br />
              <ContactInput
                type="text"
                name="email"
                value={contactData.email}
                required
                onChange={handleChange}
              />
            </ContactLabel>
            <ContactLabel spanSize={"big"}>
              Wiadomość <br />
              <ContactTextarea
                name="message"
                value={contactData.message}
                required
                onChange={handleChange}
              />
            </ContactLabel>
            <ContactSubmit>Wyślij</ContactSubmit>
          </Form>
          <EmailIcon>
            <AiOutlineMail />
          </EmailIcon>
        </FormSection>
      </Container>
    </>
  );
}
