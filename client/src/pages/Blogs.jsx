import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Blog1 from "../utils/Images/Blog1.jpg";
import Blog2 from "../utils/Images/Blog2.jpg";
import Blog3 from "../utils/Images/Blog3.jpg";

const Blogs = () => {
  return (
    <section className="Blogs">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img
              src={Blog1}
              style={{ height: "100vh" }}
              text="First slide"
              alt="blogimage"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Blog2}
              style={{ height: "100vh" }}
              text="Second slide"
              alt="blogimage"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={Blog3}
              style={{ height: "100vh" }}
              text="Third slide"
              alt="blogimage"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Blogs;
