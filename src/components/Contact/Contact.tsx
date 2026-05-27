import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import ScrollAnimation from "react-animate-on-scroll";
import { toast } from "react-toastify";

export function Contact(){
  const handleCopyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText("muhammadnailulghufronmajid@gmail.com");
    toast.success("Email copied to clipboard!", {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: "copied",
    });
  };

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
          <a href="mailto:muhammadnailulghufronmajid@gmail.com" onClick={handleCopyEmail} title="Click to copy email">
            <img src={emailIcon} alt="Email" />
          </a> 
          <a href="mailto:muhammadnailulghufronmajid@gmail.com" onClick={handleCopyEmail} title="Click to copy email">
            muhammadnailulghufronmajid@gmail.com
          </a>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <a href="https://wa.me/6285648719610" target="_blank" rel="noreferrer">
            <img src={phoneIcon} alt="Phone No" />
          </a>
          <a href="https://wa.me/6285648719610" target="_blank" rel="noreferrer">
            (+62) 856-4871-9610
          </a>
        </ScrollAnimation>

      </div>
      <ScrollAnimation animateIn="fadeInUp" delay={0.3 * 1000}>
        <Form></Form>
      </ScrollAnimation>
    </Container>
  )
}