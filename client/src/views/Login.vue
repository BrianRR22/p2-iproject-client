<script>
import { mapActions } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default {
    data() {
        return {
            inputLogin: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useHololiveStore, ['handleLogin', 'googleOneTap']),
        callback(response) {
            // This callback will be triggered when the user selects or login to
            // his Google account from the popup
            this.googleOneTap( response.credential)
        }
    }
}

</script>

<template>
    <!-- Section: Design Block -->
    <section class="text-center">
        <!-- Background image -->
        <div class="p-5 bg-image" style="
        background-image: url('https://wallpapercave.com/wp/wp11073397.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        height: 400px;
        "></div>
        <!-- Background image -->

        <div class="d-flex justify-content-center">
            <div class="card mx-4 mx-md-5 shadow-5-strong " style="
                margin-top: -200px;
                background: hsla(0, 0%, 100%, 0.8);
                backdrop-filter: blur(30px);
                width: 550px;
                ">
            <div class="card-body py-5 px-md-5">

                <div class="row d-flex justify-content-center">
                    <div class="col-lg-6">
                        <h2 class="fw-bold mb-5">Login</h2>
                        <form @submit.prevent="handleLogin(inputLogin)">

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example3">Email address</label>
                                <input type="email" id="form3Example3" class="form-control" v-model="inputLogin.email"/>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <label class="form-label" for="form3Example4">Password</label>
                                <input type="password" id="form3Example4" class="form-control" v-model="inputLogin.password"/>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4">
                                Login
                            </button>
                            <div>
                                <p style="margin-top: 15px;">Or Login With</p>
                                <GoogleLogin :callback="callback" />
                             </div>

                            <!-- Register buttons -->
                            <div class="text-center">
                                <!-- <p>or sign up with:</p>
                                <button type="button" class="btn btn-link btn-floating mx-1">
                                    <i class="fab fa-facebook-f"></i>
                                </button> -->
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>

      
    </section>
    <!-- Section: Design Block -->
</template>