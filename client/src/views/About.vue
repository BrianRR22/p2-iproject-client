<script>

</script>

<template>
    <!-- ======= About Section ======= -->
    <div id="about" class="about-area area-padding">
        <div class="container">
            <div class="row" style="margin-top: 60px;">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h2>About Hololive</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <!-- single-well start-->
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="well-left">
                        <div class="single-well">
                            <a href="#">
                                <div class="iframe-container">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/x29PMBw1JwI"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- single-well end-->
                <div class="col-md-6 col-sm-6 col-xs-12">
                    <div class="well-middle">
                        <div class="single-well">
                            <a href="#">
                                <h4 class="sec-head">Vtuber Agency</h4>
                            </a>
                            <p>
                                With over 50,000,000 fans across all their channels,
                                VTuber group hololive is the all-female talent group that
                                belongs to the VTuber agency hololive production.
                            </p>
                            <ul>
                                <li>
                                    <i class="bi bi-check"></i> Hololive Japan
                                </li>
                                <li>
                                    <i class="bi bi-check"></i> Hololive Indonesia
                                </li>
                                <li>
                                    <i class="bi bi-check"></i> Hololive English
                                </li>
                            </ul>
                            <br>
                            <button type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" @click="$router.push('/talents')">Talents</button>
                        </div>
                    </div>
                </div>
                <!-- End col-->
            </div>
        </div>
    </div><!-- End About Section -->
</template>