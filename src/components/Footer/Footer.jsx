import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";

const socialMediaLinks = [
  { href: "#!", iconClass: "fab fa-facebook-f" },
  { href: "#!", iconClass: "fab fa-twitter" },
  { href: "#!", iconClass: "fab fa-google" },
  { href: "#!", iconClass: "fab fa-instagram" },
  { href: "#!", iconClass: "fab fa-linkedin-in" },
  { href: "#!", iconClass: "fab fa-github" },
];
const footerData = [
  {
    title: "ADVERTISERS",
    links: [
      "Advertise",
      "Add a Property",
      "Digital Feeds Program",
      "Customer Portal",
      "Community Voice",
    ],
  },
  {
    title: "TOP RENTAL MARKETS",
    links: [
      "New York City",
      "Boston MA",
      "Philadelphia PA",
      "Brooklyn NY",
      "Miami FL",
      "Atlanta GA",
      "Los Angeles",
      "Seattle WA",
      "Austin TX",
      "Houston TX",
    ],
  },
  {
    title: "RENTAL MANAGER",
    links: [
      "Apartments.com Rental Manager",
      "List Your Property For Rent",
      "Screen Applicants",
      "Create Rental Leases",
      "Collect Rent Online",
      "Rent Comps",
      "Rental Manager Resources",
      "Rental Property Calculator",
    ],
  },
  {
    title: "ABOUT US",
    links: [
      "About Us",
      "Careers",
      "Contact Us",
      "Legal Notices",
      "Privacy Notice",
      "CA: Do Not Sell My Personal Info",
      "Equal Housing",
      "Avoid Scams",
      "Accessibility",
      "Rent Calculator",
      "Cost of Living",
      "Rentervese",
      "Sitemap",
    ],
  },
];

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg={4} md={4} sm={12}>
            <div className="left d-flex">
              <img src="images/logo.png" alt="logo" height={90} width={90} />
              <h2
                className="align-content-center"
                style={{ letterSpacing: ".4rem" }}
              >
                TheHomless.org
              </h2>
            </div>
            <p className="text-end">© 2025 CoStar Group, Inc.</p>

            {/* Social media */}
            <div className="social-icons text-end">
              {socialMediaLinks.map((item, index) => (
                <a
                  key={index}
                  data-mdb-ripple-init
                  className="btn text-white bg-dark btn-floating"
                  href={item.href}
                  role="button"
                >
                  <i className={item.iconClass}></i>
                </a>
              ))}
            </div>
          </Col>
          {footerData.map((section, index) => (
            <Col key={index} lg={2} md={4} sm={6} xs={12} className="mb-4 text-center">
              <h6 className="mb-3">{section.title}</h6>
              <ul className="list-unstyled">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href="#!"
                      className="text-decoration-none d-block mb-2"
                      style={{color:'gray', fontSize:'.8rem'}}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
