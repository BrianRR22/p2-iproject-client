<script>
import { mapActions, mapWritableState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'
import SpotifyCard from '../components/SpotifyCard.vue'

export default {
    components: {
        SpotifyCard
    },
    data() {
        return {
            idolDetail: {},
            idForYoutube: ''
        }
    },
    computed: {
        ...mapWritableState(useHololiveStore, ['songs']),
        formateDate() {
            const formatter = new Intl.DateTimeFormat('en-CA', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            })
            return formatter.format(new Date('2022-12-19T00:00:00Z'))
        }
    },
    methods: {
        ...mapActions(useHololiveStore, ['fetchOneIdol', 'songSpotify']),
    },
    created() {
        // this.songSpotify(this.$route.params.id)
        // this.fetchOneIdol(this.$route.params.id)
        //     .then(({ data }) => {
        //         console.log(data);
        //         this.idolDetail = data
        //         // this.getYoutubVideo(data.youtubeId)
        //     })
        //     .catch(err => {
        //         // if (err.response.status == 404) {
        //         //     this.$router.push({ name: 'NotFound' })
        //         // } else {
        //         //     console.log(err)
        //         // }
        //         console.log(err)
        //     })
    }
}
</script>

<template>
    <div id="about" class=" area-padding">
        <div class="container">
            <div class="row" style="margin-top: 20px;">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h2>Spotify Song List</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container-card-section">
                    <!-- <SpotifyCard v-for="song in songs" :key="song.id" :song="song"/> -->
                    <!-- <div class="card-section">
                        <div class="card-header-section">
                            <img src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                                alt="rover" />
                            <div class="overlay">
                                <button class="btn btn-outline-secondary btn-sm"><i class='bx bx-info-circle'></i>
                                    Detail</button>
                            </div>
                        </div>
                        <div class="card-body-section">
                            <span class="tag tag-teal">Technology</span>
                            <h4>
                                judul
                            </h4>
                            <p>{{ formateDate }}</p>
                        </div>
                    </div> -->
                </div>
                <!-- End column -->
            </div>
        </div>
    </div><!-- End About Section -->
</template>