<script>

</script>

<template>
    
    <section id="hero">
        <div class="hero-container">
            <div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.pinimg.com/originals/b1/30/c6/b130c6a08a452f1726ef246f17c17f05.png"
                            class="d-block w-100" alt="...">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown">Hololive production’s 2nd All-Star Event. Taking Place in 2023! </h2>
                                <p class="animate__animated animate__fadeInUp">COVER Corporation (Chiyoda-ku, Tokyo; CEO: Tanigo Motoaki) has announced that　hololive production will be hosting their 2nd all-star event, “hololive SUPER EXPO 2023 Supported By Bushiroad” & “hololive 4th fes.</p>
                                <router-link to="/about" href="#about"
                                    class="btn-get-started scrollto animate__animated animate__fadeInUp">About Us</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://pbs.twimg.com/media/E5sipE5UYAEokbR?format=jpg&name=medium"
                            class="d-block w-100" alt="...">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown">Get Ready for the hololive Indonesia Generation 1 New Outfit Showcase Relay!</h2>
                                <p class="animate__animated animate__fadeInUp">COVER Corporation (Chiyoda-ku, Tokyo; CEO: Tanigo Motoaki) has announced the new outfit showcase relay for Ayunda Risu, Airani Iofifteen and Moona Hoshinova from hololive Indonesia Generation 1.</p>
                                <router-link to="/about" href="#about"
                                    class="btn-get-started scrollto animate__animated animate__fadeInUp">About Us</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://pbs.twimg.com/media/EqEUgVqVoAELTYX?format=jpg&name=4096x4096"
                            class="d-block w-100" alt="...">
                        <div class="carousel-container">
                            <div class="container">
                                <h2 class="animate__animated animate__fadeInDown">Hololive English -Myth- x CounterSide Collaboration Starts on Dec 8th, 2022!</h2>
                                <p class="animate__animated animate__fadeInUp">COVER Corporation (Chiyoda-ku, Tokyo; CEO: Tanigo Motoaki) has announced that a collaboration between hololive production and the online game “CounterSide” starts on Dec 8th, 2022.</p>
                                <router-link to="/about" href="#about"
                                    class="btn-get-started scrollto animate__animated animate__fadeInUp">About Us</router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
                </a>

                <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
                </a>
            </div>
        </div>
    </section>

</template>