<script>
import { mapActions, mapWritableState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default {
    data() {
        return {
            idolDetail: {},
            idForYoutube: ''
        }
    },
    computed: {
        ...mapWritableState(useHololiveStore, ['youtubeVideo'])
    },
    methods: {
        ...mapActions(useHololiveStore, ['fetchOneIdol', 'getYoutubVideo']),
    },
    created() {
        this.fetchOneIdol(this.$route.params.id)
            .then(({ data }) => {
                console.log(data);
                this.idolDetail = data
                // this.getYoutubVideo(data.youtubeId)
            })
            .catch(err => {
                // if (err.response.status == 404) {
                //     this.$router.push({ name: 'NotFound' })
                // } else {
                //     console.log(err)
                // }
                console.log(err)
            })
    }
}
</script>

<template>
    <div id="about" class=" area-padding">
        <div class="container">
            <div class="row" style="margin-top: 20px;">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h2>Detail</h2>
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
                                    <img width="560" height="315" :src="idolDetail.imgUrl">
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
                                <h4 class="sec-head">{{ idolDetail.name }}</h4>
                            </a>
                            <br>
                            <!-- <a href="" @click.prevent="$router.push('/' + idolDetail.id)">
                                <i class="bi bi-spotify"></i>
                            </a> -->
                            <p>{{ idolDetail.content }}</p>
                            <ul>
                                <li>
                                    <i class="bi bi-check"></i> {{ idolDetail.Branch?.from }}
                                </li>
                            </ul>
                            <br>
                            <!-- <iframe width="560" height="315" :src="youtubeVideo" title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen></iframe> -->
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/x29PMBw1JwI"
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowfullscreen></iframe>
                            <br>
                            <button type="button" class="btn btn-outline-primary btn-rounded btn-sm bi bi-spotify"
                                data-mdb-ripple-color="dark" @click="$router.push('/songs/' + idolDetail.spotifyId)" style=""> Spotify</button>
                        </div>
                    </div>
                </div>
                <!-- End col-->
            </div>
        </div>
    </div><!-- End About Section -->
</template>