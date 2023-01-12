<script>
import { mapActions, mapState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'
import Card from '../components/Card.vue'

export default {
    components: {
        Card
    },
    data(){
        return{
            branchId: ''
        }
    },
    computed: {
        ...mapState(useHololiveStore, ['idols', 'branches'])
    },
    methods: {
        ...mapActions(useHololiveStore, ['fetchIdols', 'fetchBranch']),
    },
    created() {
        this.fetchIdols()
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
                        <h2>Our Talent</h2>
                    </div>
                </div>
            </div>
            <div class="row wesome-project-1 fix">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ul id="portfolio-flters">
                        <li @click.prevent="fetchIdols()">All</li>
                        <li v-for="branch in branches" :key="branch.id" :value="branch.id" @click="fetchIdols(branch.id)">{{ branch.from }}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <Card v-for="idol in idols" :key="idol.id" :idol="idol" />
            </div>
        </div>
    </div><!-- End Team Section -->
</template>