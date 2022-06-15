import { Link } from "react-router-dom";
import { Row, Col, Container } from "reactstrap";
import {
  instaImage1,
  instaImage2,
  instaImage3,
  payment,
} from "@bootin/assets/image";
import FooterTitle from "../FooterTitle";
import { BiMap } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaMobileAlt } from "react-icons/fa";
import {
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <section className="footerTop">
        <Container fluid="md">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div>
                <FooterTitle title="Contact us" />
                <div className="contactUsSection">
                  <div className="contactSection">
                    <BiMap className="contactIcon mapIcon" />
                    <p className="contactText">
                      1998 Wall Street 707, Washington DC, USA
                    </p>
                  </div>
                  <div className="contactSection">
                    <FiMail className="contactIcon" />
                    <div>
                      <p className="contactText">bookmart@domain.com</p>
                      <p className="contactText">support@gmail.com</p>
                    </div>
                  </div>
                  <div className="contactSection">
                    <FaMobileAlt className="contactIcon mobileIcon" />
                    <div>
                      <p className="contactText">( 84) 0123 456 789</p>
                      <p className="contactText"> ( 84) 00123 456 789</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="informationResponsive">
                <FooterTitle title="Information" />
                <ul className="informationSection">
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Contact Us
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Site map
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      About us
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Costumer Service
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="accountResponsive">
                <FooterTitle title="My account" />
                <ul className="informationSection">
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Sign In
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      View Cart
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      My Wishlist
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Track My Order
                    </Link>
                  </li>
                  <li className="footerLinkItem">
                    <Link className="footerLink" to="/">
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className="instagramResponsive">
                <FooterTitle title="Instagram" />
                <div className="instagramSection">
                  <div className="instagramImageSection">
                    <Col xs={4} md={4} className="instagramImageItem">
                      <div className="imageContainer">
                        <img
                          className="instagramImage"
                          src={instaImage1}
                          alt="instaImage1"
                        />
                      </div>

                      <div className="instagramIconSection">
                        <AiOutlineInstagram className="instagramIcon" />
                      </div>
                    </Col>
                    <Col xs={4} md={4} className="instagramImageItem">
                      <div className="imageContainer">
                        <img
                          className="instagramImage"
                          src={instaImage2}
                          alt="instaImage2"
                        />
                      </div>
                      <div className="instagramIconSection">
                        <AiOutlineInstagram className="instagramIcon" />
                      </div>
                    </Col>
                    <Col xs={4} md={4} className="instagramImageItem">
                      <div className="imageContainer">
                        <img
                          className="instagramImage"
                          src={instaImage3}
                          alt="instaImage3"
                        />
                      </div>
                      <div className="instagramIconSection">
                        <AiOutlineInstagram className="instagramIcon" />
                      </div>
                    </Col>
                  </div>
                  <p className="openingTimeSection">
                    7 Days A Week From 8.00 Am To 5 Pm
                  </p>
                  <ul className="socialNetworkSection">
                    <li className="socialNetworkItem">
                      <Link className="socialNetworkLink" to="/">
                        <TiSocialFacebook className="socialNetworkIcon" />
                      </Link>
                    </li>
                    <li className="socialNetworkItem">
                      <Link className="socialNetworkLink" to="/">
                        <TiSocialTwitter className="socialNetworkIcon" />
                      </Link>
                    </li>
                    <li className="socialNetworkItem">
                      <Link className="socialNetworkLink" to="/">
                        <TiSocialGooglePlus className="socialNetworkIcon" />
                      </Link>
                    </li>
                    <li className="socialNetworkItem">
                      <Link className="socialNetworkLink" to="/">
                        <TiSocialInstagram className="socialNetworkIcon" />
                      </Link>
                    </li>
                    <li className="socialNetworkItem">
                      <Link className="socialNetworkLink" to="/">
                        <TiSocialLinkedin className="socialNetworkIcon" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="footerBottom">
        <Container>
          <Row>
            <Col lg={6} md={12}>
              <div className="copyRight">
                Copyright @ 2019{" "}
                <Link to="/" className="bootinText">
                  Bootin
                </Link>{" "}
                - Made by Arthit
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div className="paymentFooter">
                <img src={payment} alt="payment" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
