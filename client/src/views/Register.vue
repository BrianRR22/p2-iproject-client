<script>
import { mapActions } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default{
    data() {
        return {
            inputRegistrasi: {
                username: '',
                email: '',
                password: '',
            }
        }
    },
    methods: {
        ...mapActions(useHololiveStore, ['handleRegis'])
    }
}

</script>

<template>
    <!-- Section: Design Block -->
    <section class="text-center text-lg-start">

        <!-- Jumbotron -->
        <div class="container py-4">
            <div class="row g-0 align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
                        <div class="card-body p-5 shadow-5 text-center">
                            <h2 class="fw-bold mb-5">Sign up now</h2>
                            <form class="text-center" @submit.prevent="handleRegis(inputRegistrasi)">
                                <!-- 2 column grid layout with text inputs for the first and last names -->

                                <div class="px-10 mb-4 mx-auto" style="width: 400px;">
                                    <div class="form-outline">
                                        <label class="form-label" for="form3Example1">Username</label>
                                        <input type="text" id="form3Example1" class="form-control" v-model="inputRegistrasi.username" />
                                    </div>
                                </div>

                                <!-- Email input -->
                                <div class="px-10 mb-4 mx-auto" style="width: 400px;">
                                    <label class="form-label" for="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" class="form-control" v-model="inputRegistrasi.email"/>
                                </div>

                                <!-- Password input -->
                                <div class="px-10 mb-4 mx-auto" style="width: 400px;">
                                    <label class="form-label" for="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" class="form-control" v-model="inputRegistrasi.password"/>
                                </div>

                                <!-- Checkbox -->
                                <!-- <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33"
                                        checked />
                                    <label class="form-check-label" for="form2Example33">
                                        Subscribe to our newsletter
                                    </label>
                                </div> -->

                                <!-- Submit button -->
                                <button type="submit" class="btn btn-primary btn-block mb-4">
                                    Sign up
                                </button>

                                <!-- Register buttons -->
                                <div class="text-center">
                                    <p>already have account?</p>
                                    <router-link to="/login" type="button" class="btn btn-link btn-floating mx-1">
                                        Login
                                    </router-link>

                                    <!-- <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-link btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button> -->
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mb-5 mb-lg-0">
                    <img src="https://w0.peakpx.com/wallpaper/100/806/HD-wallpaper-kakage-hololive-shishiro-botan-cleavage-animal-ears-no-bra-silver-hair-licking-anime-girls-gray-eyes-virtual-youtuber.jpg"
                        class="w-100 rounded-4 shadow-4" alt="" />
                </div>
            </div>
        </div>
        <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->
</template>