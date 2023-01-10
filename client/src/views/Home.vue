<script>
import { useHololiveStore } from '../stores/hololive'
import { mapState, mapActions } from 'pinia'

export default {
    computed: {

    },
    methods: {
        ...mapActions(useHololiveStore, ['songSpotify'])
    },
    created(){
        // this.songSpotify()
    }
}
</script>

<template>
    <h1>home</h1>
</template>