import React, { useState, useEffect } from "react";

import { Container, Image, NextImage } from './styles';

interface CarouselProps {
    images: any[];
    width?: number;
    height?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
}

const Carousel = ({
    images,
    width = 500,
    height = 300,
}: CarouselProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const slideHeight = window.innerHeight;
            const slideIndex = Math.floor(window.scrollY / slideHeight);
            setCurrentSlide(slideIndex);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Container style={{ width: width * 3, overflow: 'hidden' }}>
            <Image src={images[currentSlide]} style={{ width, height }} />
            {currentSlide < images.length - 1 && (
                <NextImage
                    src={images[currentSlide + 1]}
                    alt={`Slide ${currentSlide + 1}`}
                    style={{ width, height }}
                />
            )}
        </Container>
    );
};
  
export default Carousel;