<script>
import { mapActions, mapState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default {
    props: ['idol'],
    methods: {
        ...mapActions(useHololiveStore, ['addFavoriteIdol'])
    }
}
</script>

<template>
    <div class="col-md-3 col-sm-3 col-xs-12" style="margin-bottom: 15px;">
        <div class="single-team-member">
            <div class="team-img">
                <a href="#">
                    <img :src="idol.imgUrl" alt="" class="img-size">
                </a>
                <div class="team-social-icon text-center">
                    <ul>
                        <li>
                            <a  @click.prevent="$router.push('/detail/' + idol.id)" href="">
                                <i class="bi bi-info"></i>
                            </a>
                        </li>
                        <li>
                            <router-link to="" href="#">
                                <i class="bi bi-spotify"></i>
                            </router-link>
                        </li>
                        <li>
                            <a href="" @click.prevent="addFavoriteIdol(idol.id)">
                                <i class="bi bi-star"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="team-content text-center">
                <h4>{{ idol.name }}</h4>
                <p>{{ idol.Branch.from }}</p>
            </div>
        </div>
    </div>
</template>