import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from "../../../assets/images/MaskGroup1.png";
import imgTwo from "../../../assets/images/MaskGroup2.png";
import imgThree from "../../../assets/images/MaskGroup3.png";

const images = [imgOne, imgTwo, imgThree];

const CustomCarousel = () => {
    return (
        <Carousel fade={true} pause={false}>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt={`Slide ${index}`}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default CustomCarousel;
