import React from "react";
import { Carousel } from "react-bootstrap";
import "./Carousel.css";
const HeroSlider = () => {
  return (
    <>
      <Carousel.Caption>
        <p>#DevWeek</p>
      </Carousel.Caption>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-90"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQH07GR_RAVe9w/feedshare-shrink_1280/0/1668269978994?e=1671667200&v=beta&t=j8BQenVp3LF7nSE01LYLEHLiEktuT4EMsqBfRsq-Z30"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-90"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQH07GR_RAVe9w/feedshare-shrink_1280/0/1668269978994?e=1671667200&v=beta&t=j8BQenVp3LF7nSE01LYLEHLiEktuT4EMsqBfRsq-Z30"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-90"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQH07GR_RAVe9w/feedshare-shrink_1280/0/1668269978994?e=1671667200&v=beta&t=j8BQenVp3LF7nSE01LYLEHLiEktuT4EMsqBfRsq-Z30"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-90"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQH07GR_RAVe9w/feedshare-shrink_1280/0/1668269978994?e=1671667200&v=beta&t=j8BQenVp3LF7nSE01LYLEHLiEktuT4EMsqBfRsq-Z30"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default HeroSlider;
