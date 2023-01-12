<script>
import { mapActions, mapState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default {
    data() {
        return {
            sub: ''
        }
    },
    computed: {
        ...mapState(useHololiveStore, ['isSubscribed'])
    },
    methods: {
        ...mapActions(useHololiveStore, ['fetchUser', 'subscribe'])
    },
    created() {
        this.fetchUser()
        this.isSubscribed
    }
}

</script>

<template>
    <div v-if="isSubscribed == true">
        <!-- ======= About Section ======= -->
        <div id="about" class="area-padding">
            <div class="container">
                <div class="row" style="margin-top: 20px;">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="section-headline text-center">
                            <h2>Member</h2>
                        </div>
                    </div>
                </div>
                <div class="row" style="margin-bottom: 10px;">
                    <!-- single-well start-->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="well-left">
                            <div class="single-well">
                                <a href="#">
                                    <div class="iframe-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3RxlzJWWzdY"
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
                                    <h4 class="sec-head">『ホロライブ・オルタナティブ』 ティザーPV（Fullver）</h4>
                                </a>
                                <p>
                                    ようこそ、もうひとつのセカイへーー
                                    ホロライブがおくるまた別の可能性――『ホロライブ・オルタナティブ』
                                    ホロライブプロダクション史上最大級のオフラインイベント＆ライブ同時開催!!
                                    2022年3月19〜20日、「hololive SUPER EXPO 2022 Supported By
                                    ヴァイスシュヴァルツ」が幕張メッセ国際展示場1・2・3ホールで、
                                    「hololive 3rd fes. Link Your Wish Supported By ヴァイスシュヴァルツ」が幕張メッセイベントホールで開催決定！
                                </p>
                                <br>
                            </div>
                        </div>
                    </div>
                    <!-- End col-->
                </div>
                <div class="row" style="margin-bottom: 10px;">
                    <!-- single-well start-->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="well-left">
                            <div class="single-well">
                                <a href="#">
                                    <div class="iframe-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/fRsjv-JKyf8"
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
                                    <h4 class="sec-head">『ホロライブ・オルタナティブ』 2ndティザーPV</h4>
                                </a>
                                <p>
                                    セカイをLIVEしようーー！
                                    ホロライブがおくるまた別の可能性――『ホロライブ・オルタナティブ』
                                    セカイをLIVEしようーー！
                                    ホロライブがおくるまた別の可能性――『ホロライブ・オルタナティブ』
                                    第２弾PVも、よろしくお願いします！！
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End col-->
                </div>
                <div class="row" style="margin-bottom: 10px;">
                    <!-- single-well start-->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="well-left">
                            <div class="single-well">
                                <a href="#">
                                    <div class="iframe-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/tilmEDOLCl4"
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
                                    <h4 class="sec-head">【Digest Movie】hololive Indonesia Generasi 1 Mini 3D Live &
                                        Showcase</h4>
                                </a>
                                <p>
                                    Digest Movie ini berisi kumpulan momen seru yang terjadi saat Mini 3D Live &
                                    Showcase Risu, Moona, dan Iofi!
                                    <br><br>
                                    Channel Youtube talent hololive Indonesia:
                                    <a href="https://t.co/3AI0d4Vkbo?amp=1">
                                        【Ayunda Risu】
                                    </a>
                                    <a href="https://t.co/W68ItCZBTg?amp=1">
                                        【Moona Hoshinova】
                                    </a>
                                    <a href="https://t.co/ATHpGQeH2b?amp=1">
                                        【Airani Iofifteen】
                                    </a>
                                    <a href="https://t.co/VJ3jCqeGR3?amp=1">
                                        【Kureiji Ollie】
                                    </a>
                                    <a href="https://t.co/Up4HqrcnSG?amp=1">
                                        【Anya Melfissa】
                                    </a>
                                    <a href="https://t.co/aKgza8DGQf?amp=1">
                                        【Pavolia Reine】
                                    </a>
                                    <a href="https://t.co/U0Uxrg8GpG">
                                        【Vestia Zeta】
                                    </a>
                                    <a href="https://t.co/RM66xmCvEG">
                                        【Kaela Kovalskia】
                                    </a>
                                    <a href="https://t.co/x3kvE5ZibP">
                                        【Kobo Kanaeru】
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End col-->
                </div>
                <div class="row" style="margin-bottom: 10px;">
                    <!-- single-well start-->
                    <div class="col-md-6 col-sm-6 col-xs-12">
                        <div class="well-left">
                            <div class="single-well">
                                <a href="#">
                                    <div class="iframe-container">
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xvvjwhLG4Dw"
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
                                    <h4 class="sec-head">Holy Night - hololive English Cover [Ouro Kronii, Hakos Baelz]
                                    </h4>
                                </a>
                                <p>
                                    Happy holidays from hololive English! This concludes our cover series for the
                                    holiday season this year. See you next year!
                                    <br> <br>
                                    Illustration, Video: Yunarun
                                    <br>
                                    Instrumental: Farhan
                                    <br>
                                    Mix: raja:sa
                                    <br>
                                    Original: ホーリーナイト / 逢坂大河（釘宮理恵）・川嶋亜美（喜多村英梨）
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- End col-->
                </div>
            </div>
        </div><!-- End About Section -->
    </div>

    <div v-if="isSubscribed == false">
        <!-- ======= About Section ======= -->
    <div id="about" class="area-padding">
        <div class="container">
            <div class="row" style="margin-top: 20px;">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="section-headline text-center">
                        <h2>Join Membership!</h2>
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
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/aG4OaVW-f1Y"
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
                                <h4 class="sec-head">Hololive Production</h4>
                            </a>
                            <p>
                                Join our membership with only Rp. 200.000. You can get many benefit such as:
                            </p>
                            <ul>
                                <li>
                                    <i class="bi bi-check"></i> Members-only live streams
                                </li>
                                <li>
                                    <i class="bi bi-check"></i> Custom emoji for live chat
                                </li>
                                <li>
                                    <i class="bi bi-check"></i> Free merchandise
                                </li><li>
                                    <i class="bi bi-check"></i> And many more
                                </li>
                            </ul>
                            <br>
                            <button  type="button" class="btn btn-outline-primary btn-rounded" data-mdb-ripple-color="dark" @click="subscribe">Join Now!</button>
                        </div>
                    </div>
                </div>
                <!-- End col-->
            </div>
        </div>
    </div><!-- End About Section -->
    </div>
</template>