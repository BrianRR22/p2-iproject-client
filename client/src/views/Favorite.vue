<script>
import { mapActions, mapState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'
import CardFavorite from '../components/CardFavorite.vue'

export default {
    components: {
        CardFavorite
    },
    data(){
        return{
            branchId: ''
        }
    },
    computed: {
        ...mapState(useHololiveStore, ['favoriteIdols', 'branches'])
    },
    methods: {
        ...mapActions(useHololiveStore, ['fetchFavoriteIdols', 'fetchBranch']),
        click(){
            console.log('click')
        }
    },
    created() {
        this.fetchFavoriteIdols()
        this.fetchBranch()
    }
}
</script>

<template>
    <!-- ======= Team Section ======= -->
    <div id="team" class="our-team-area area-padding">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center" style="margin-top: 20px;">
                        <h2>Favorite</h2>
                    </div>
                </div>
            </div>
            <div class="row wesome-project-1 fix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ul id="portfolio-flters">
                        <li @click.prevent="fetchFavoriteIdols()">All</li>
                        <li v-for="branch in branches" :key="branch.id" :value="branch.id" @click="fetchFavoriteIdols(branch.id)">{{ branch.from }}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <CardFavorite v-for="idol in favoriteIdols" :key="idol.id" :idol="idol" />
            </div>
        </div>
    </div><!-- End Team Section -->
</template>