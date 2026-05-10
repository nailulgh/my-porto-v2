import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import instagramIcon from '../../assets/instagram.svg'
import ScrollAnimation from 'react-animate-on-scroll'

export function Footer() {
  return (
    <Container className="footer">
      <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <a href="https://github.com/nailulgh" className="logo">
          <span>nailul</span>
          <span>ghufron</span>
        </a>
        <div>
          <p>
            This Website was made with <img src={reactIcon} alt="React" />
            {/* <span>❤️</span> */}
          </p>
        </div>
        <div className="social-media">
          <a
            href="https://linkedin.com/in/muhammad-nailul-ghufron-majid-0b0b0b0b0/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a
            href="https://github.com/nailulgh"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B6285648719610&text=Hello+Nailul+I+found+your+contact+through+your+portfolio+site.%0A%0A"
            target="_blank"
            rel="noreferrer"
          >
            <img src={whatsapp} alt="Whatsapp" />
          </a>
          <a
            href="https://www.instagram.com/ghufr.on011"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </ScrollAnimation>
    </Container>
  )
}
