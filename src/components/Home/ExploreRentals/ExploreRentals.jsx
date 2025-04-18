import { useState , useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./ExploreRentals.css";
const ExploreRentals = () => {
//   const [property, setProperty] = useState([])
//   useEffect(() => {
//     const fetchProperty = async () => {
//     try {
//         const response = await axios.get("https://f8ef-197-36-227-203.ngrok-free.app/RentMate/Property/test");
//         console.log("property fetched:", response.data);
//         setProperty(response.data);
//     } catch (error) {
//         console.error("Error fetching property:", error);
//     }
//     };
//     fetchProperty();
// }, []);

  return (
    <section id="ExploreRentals">
      <Container>
        <h2 className="text-center">Explore Rentals In Cairo</h2>
        <Row>
          <Col lg={3} md={6} sm={12}>
            <Card className="card mt-4">
              <Card.Img
                variant="top"
                src="https://images1.apartments.com/i2/U7OX6PHX4X1iaoy0O9MxpJj5q82pHWRQdX8YAmT_uYE/117/presidential-towers-chicago-il-building-photo.jpg?p=1"
                alt="card-photo"
              />
              <Card.Body className="text-center">
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="ExploreRentals-bottom text-center">
          <button className="btn view-more-btn">View More</button>
        </div>
        <hr style={{ color: "gray" }} />
      </Container>
    </section>
  );
};
export default ExploreRentals;
