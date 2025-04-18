import { Container, Row, Col } from "react-bootstrap";
import "./ManageProperty.css";
import img from "../../../assets/apartment_building.png"
function ManageProperty() {
  return (
    <section id="ManageProperty">
      <Container>
        <div className="ManageProperty-top text-center">
          <h2>The Perfect Place to Manage Your Property</h2>
          <p className="ManageProperty-des">
            Work with the best suite of property management tools on the market.
          </p>
        </div>
        <div className="ManageProperty-body mt-5">
          {/* card 1 */}
          <div class="card">
            <Row>
              <Col lg={6} md={6}>
                <div className="card-img">
                  <img
                    src="https://www.apartments.com/a/815e90/modules/homepagev2/content/images/widgets/widget_advertise_your_rental_1407.png"
                    className="img-fluid rounded-start"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                style={{ backgroundColor: "#f5f5f5", marginLeft: "-.8rem" }}
              >
                <div className="card-body">
                  <h3 className="card-title">Advertise Your Rental</h3>
                  <p className="card-text">
                    Advertise Your Rental Connect with more than 75 million
                    renters looking for new homes using our comprehensive
                    marketing platform.
                  </p>
                  <p className="card-text">
                    <a href="1"> List Your Property</a>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          {/* card 2 */}
          <div class="card2 mb-3">
            <Row>
              <Col lg={6} md={6}>
                <div className="card-img2">
                  <img
                    src={img}
                    className="img-fluid rounded-start"
                    alt=""
                  />
                </div>
              </Col>
              <Col
                lg={6}
                md={6}
                style={{ backgroundColor: "#f5f5f5", marginLeft: "-.8rem" }}
              >
                <div className="card-body2">
                  <h3 className="card-title">Lease 100% Online</h3>
                  <p className="card-text">
                  Accept applications, process rent payments online, and sign digital leases all powered on a single platform.
                  </p>
                  <p className="card-text">
                    <a href="1"> Manage Your Property</a>
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ManageProperty;
