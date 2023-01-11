<script>
export default{
    props: ['song'],
    computed: {
        formateDate() {
            const formatter = new Intl.DateTimeFormat('en-CA', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            })
            return formatter.format(new Date(this.song.releases.items[0].date.isoString))
        }
    }
}
</script>

<template>
    <div class="card-section">
        <div class="card-header-section">
            <img :src="song.releases.items[0].coverArt.sources[0].url" alt="rover" />
            <div class="overlay">
                <!-- <button class="btn btn-outline-secondary btn-sm" @click="song.releases.items[0].sharingInfo.shareUrl"><i class='bi bi-spotify'></i> Spotify</button> -->
                <a class="btn btn-outline-secondary btn-sm" :href="song.releases.items[0].sharingInfo.shareUrl"><i class='bi bi-spotify'></i> Spotify</a>
            </div>
        </div>
        <div class="card-body-section">
            <span class="tag tag-teal">{{ song.releases.items[0].type }}</span>
            <h4>
                {{ song.releases.items[0].name }}
            </h4>
            <p>{{ formateDate }}</p>
        </div>
    </div>
</template>