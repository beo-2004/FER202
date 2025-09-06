import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../assets/images/banner.png';
import slide2 from '../assets/images/banner2.jpg';
import slide3 from '../assets/images/banner3.jpg';

export default function SlideShow() {
  return (
    <Carousel interval={1500} controls={true} indicators={true}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="Slide 1" />
        <Carousel.Caption>
          <h3>Welcome to the Quiz App</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Slide 2" />
        <Carousel.Caption>
          <h3>Read News</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Slide 3" />
        <Carousel.Caption>
          <h3>Take Quizzes</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
