<script>
import { mapActions, mapWritableState } from 'pinia'
import { useHololiveStore } from '../stores/hololive'

export default{
    data(){
        return{
            
        }
    },
    computed:{
        ...mapWritableState(useHololiveStore, ['access_token'])
    },
    methods: {
        handleLogout(){
            localStorage.clear()
            this.access_token= ''
            this.$router.push('/login')
        }
    },
    created(){
        this.access_token=localStorage.getItem('access_token')
    }
}
</script>

<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex justify-content-between">

            <div class="logo">
                <a href="index.html"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Hololive_Production.png" alt="" class="img-fluid"></a>
            </div>

            <nav id="navbar" class="navbar">
                <ul>
                    <li><router-link to="/" class="nav-link scrollto" href="">Home</router-link></li>
                    <li><router-link to="/about" class="nav-link scrollto" href="">About</router-link></li>
                    <li><router-link to="/talents" class="nav-link scrollto" href="">Talents</router-link></li>
                    <li><router-link to="/favorite" class="nav-link scrollto" href="" v-if="access_token">Favorite</router-link></li>
                    <li><router-link to="/contact" class="nav-link scrollto" href="" >Contact</router-link></li>
                    <li><router-link to="/login" class="nav-link scrollto" href="" v-if="!access_token">Sign in</router-link></li>
                    <li><router-link to="/register" class="nav-link scrollto" href="" v-if="!access_token">Sign up</router-link></li>
                    <li><a class="nav-link scrollto" href=""  @click="handleLogout" v-if="access_token">Logout</a></li>
                </ul>
            </nav><!-- .navbar -->

        </div>
    </header><!-- End Header -->
</template>