import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./MostRental.css";
function MostRental() {
  return (
    <section id="MostRental">
      <Container>
        <div className="MostRental-top text-center">
          <h2>The Most Rental Listings</h2>
          <p className="MostRental-des">
            Choose from over 1 million apartments, houses, condos, and townhomes
            for rent.
          </p>
        </div>
        <div className="MostRental-body mt-5">
          <div class="card mb-3">
            <Row>
              <Col lg={6} md={6}>
                <img
                  src="https://www.apartments.com/a/ce6073/modules/homepagev2/content/images/widgets/widget_renting_made_simple_469.png"
                  className="img-fluid rounded-start"
                  alt=""
                />
              </Col>
              <Col lg={6} md={6} style={{backgroundColor:'#f5f5f5' , marginLeft:'-.8rem'}}>
                <div className="card-body">
                  <h3 className="card-title">Renting Made Simple</h3>
                  <p className="card-text">
                    Renting Made Simple Browse the highest quality listings,
                    apply online, sign your lease, and even pay your rent from
                    any device.
                  </p>
                  <p className="card-text">
                    <a href="1">
                      Find Out More
                    </a>
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

export default MostRental;
