import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const [result, setResult] = useState("Send");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "3e5a2c80-5eab-4c8a-81a4-883ee9a12fa9");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      setResult(data.message);
      event.target.reset();
    } else {
      setResult(data.message);
    }
    setTimeout(() => {
      setResult("Send");
    }, 3000);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={onSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="First name" placeholder="First Name" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" name="Last name" placeholder="Last Name" required/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" name="Email" placeholder="Email Address" required />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" name="Phone" placeholder="Phone No." required/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" name="Message" placeholder="Message" required></textarea>
                      <button type="submit" ><span>{result}</span></button>
                    </Col>
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
