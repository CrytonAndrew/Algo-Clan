import React from 'react'
import { Carousel } from "react-bootstrap"

const MiddleSection = () => {
    return (
        <div className="middle-section">
            <div>
                <h2 id="meet-team-heading"> Meet The Team </h2>
            </div>
            <Carousel>
            <Carousel.Item>
                <i class="fas fa-user profile-pic-carousel"></i>
                <h3 className="team-info"><strong>Mbali Cleo Mnisi</strong></h3>
                <p className="team-info">Don't watch the clock; do what it does. Keep going.</p>
            </Carousel.Item>
            <Carousel.Item>
                <i class="fas fa-user profile-pic-carousel"></i>

                <h3 className="team-info"><strong>Senzo Dlamini</strong></h3>
                <p className="team-info">Talent can only take you so far, hardwork will take you places.</p>
            </Carousel.Item>
            <Carousel.Item>
                <i class="fas fa-user profile-pic-carousel"></i>
                <h3 className="team-info"><strong>Chuake Caiphus</strong></h3>
                <p className="team-info">Hark work and deligence.</p>
            </Carousel.Item>
            <Carousel.Item>
                <i class="fas fa-user profile-pic-carousel"></i>
                <h3 className="team-info"><strong>Cryton Andrew Sibanda</strong></h3>
                <p className="team-info">Risk it to get the buscuit.</p>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MiddleSection
