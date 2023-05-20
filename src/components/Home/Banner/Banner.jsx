import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="mb-20">
            <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000} transitionTime={500} emulateTouch swipeable showArrows>
                <div>
                    <img  src="https://images.unsplash.com/photo-1521714161819-15534968fc5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Slide 1" />
                    <p className="legend">Marvel, Avengers & Star Wars Games are Available in Our Shop</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Slide 2" />
                    <p className="legend">Experience Luxury at its Best</p>
                </div>
                <div>
                    <img  src="https://images.unsplash.com/photo-1614419349260-ad8317a964e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" alt="Slide 3" />
                    <p className="legend">Unleash Your Adventure Spirit</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;