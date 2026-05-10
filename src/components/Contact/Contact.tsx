import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";

export function Contact(){

  return(
    <Container id="contact">
      <ScrollAnimation animateIn="fadeIn">
        <header>
          <h2>Contact</h2>
          <p>Ready to get started on your project? </p>
          <p>Contact me now for a Free consultation.</p>
        </header>
      </ScrollAnimation>
      <div className="contacts">
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <a href="mailto:muhammadnailulghufronmajid@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:muhammadnailulghufronmajid@gmail.com">muhammadnailulghufronmajid@gmail.com</a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <a href="https://wa.me/6285648719610"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="https://wa.me/6285648719610">(+62) 856-4871-9610</a>
        </ScrollAnimation>
      </div>
      <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
        <Form></Form>
      </ScrollAnimation>
    </Container>
  )
}