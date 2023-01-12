import { defineStore } from "pinia";
import axios from "axios";

// origin = 'https://hllv-production.up.railway.app'
origin = 'http://localhost:3000'

export const useHololiveStore = defineStore('hololive', {
    state() {
        return {
            songs: [],
            name: '',
            access_token: '',
            username: '',
            idols: [],
            branches: [],
            favoriteIdols: [],
            youtubeVideo: '',
            user: {},
            login: false,
            isSubscribed: ''
        }
    },
    actions: {
        songSpotify(id) {
            axios({
                method: 'GET',
                url: origin + '/idols/songs/' + id,
            })
                .then(({ data }) => {
                    this.songs = data
                })
                .catch(err => {
                    console.log(err);
                })
        },
        async fetchIdols(branchId = null) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: origin + `/idols?${branchId ? `filter[branch]=${branchId}` : ''}`
                })
                this.idols = data
            } catch (error) {
                console.log(error);
            }
        },
        async fetchBranch() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: origin + `/idols/branches`
                })
                this.branches = data
            } catch (error) {
                console.log(error);
            }
        },
        async handleRegis(inputRegistrasi) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: origin + '/users/register',
                    data: inputRegistrasi
                })
                Swal.fire(
                    'Register',
                    'Success to Register',
                    'success'
                )
                this.router.push('/login')
            } catch (error) {
                let messageError = error.response.data.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: messageError,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        async handleLogin(inputLogin) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: origin + '/users/login',
                    data: inputLogin
                })
                localStorage.setItem("access_token", data.access_token)
                localStorage.setItem("username", data.username)
                localStorage.setItem("isSubscribed", data.isSubscribed)
                this.access_token = data.access_token
                this.username = data.username
                this.login = true
                this.fetchIdols()
                this.fetchBranch()
                this.fetchUser()
                Swal.fire(
                    'Login',
                    'Success to Login',
                    'success'
                )
                this.router.push('/')
            } catch (error) {
                console.log(error);
                let messageError = error.response.data.message
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: messageError,
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        googleOneTap(credential) {
            axios({
                url: origin + '/users/google-login',
                method: 'POST',
                headers: {
                    google_auth_token: credential
                }
            })
                .then((result) => {
                    localStorage.setItem("access_token", result.data.access_token)
                    localStorage.setItem("username", result.data.username)
                    localStorage.setItem("isSubscribed", result.data.isSubscribed)
                    this.access_token = result.data.access_token
                    this.username = result.data.username
                    this.isSubscribed= result.data.isSubscribed
                    this.login = true
                    this.fetchIdols()
                    this.fetchBranch()
                    Swal.fire(
                        'Login',
                        'Success to Login',
                        'success'
                    )
                    this.router.push('/')
                })
                .catch(err => {
                    console.log(err);
                    // let messageError = err.response.data.message
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: messageError,
                    //     footer: '<a href="">Why do I have this issue?</a>'
                    // })
                })
        },
        async addFavoriteIdol(id) {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: origin + '/users/idols/' + id,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                Swal.fire(
                    'Favorite',
                    `${data.message}`,
                    'success'
                )
            } catch (error) {
                console.log(error);
            }
        },
        async fetchFavoriteIdols(branchId = null) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: origin + `/users/idols/favorites${branchId ? `?filter[branch]=${branchId}` : ''}`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.favoriteIdols = data
            } catch (error) {
                console.log(error);
            }
        },
        fetchOneIdol(id) {
            return axios({
                method: 'GET',
                url: origin + '/idols/' + id
            })
        },
        getYoutubVideo(id) {
            axios({
                method: 'GET',
                url: origin + '/idols/video/' + id,
            })
                .then(({ data }) => {
                    this.youtubeVideo = 'https://www.youtube.com/embed/' + data.videoId
                })
                .catch(err => {
                    console.log(err);
                })
        },
        async fetchUser() {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: origin + `/users`,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.isSubscribed = data.isSubscribed
                this.user = data
            } catch (error) {
                console.log(error);
            }
        },
        async changeStatus() {
            try {
                const { data } = await axios({
                    method: 'PATCH',
                    url: origin + '/users/subscription',
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.fetchUser()
            } catch (error) {
                console.log(error);
            }
        },
        async subscribe() {
            try {
                const { data } = await axios({
                    method: 'POST',
                    url: origin + '/users/generate-midtrans-token',
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                let statusMember = this.changeStatus
                window.snap.pay(data.token, {
                    onSuccess: function (result) {
                        /* You may add your own implementation here */
                        statusMember()
                        alert("payment success!"); console.log(result);
                    },
                    onPending: function (result) {
                        /* You may add your own implementation here */
                        alert("wating your payment!"); console.log(result);
                    },
                    onError: function (result) {
                        /* You may add your own implementation here */
                        alert("payment failed!"); console.log(result);
                    },
                    onClose: function () {
                        /* You may add your own implementation here */
                        alert('you closed the popup without finishing the payment');
                    }
                })
            } catch (error) {
                console.log(error);
            }
        },
        async deleteFavorite(id) {
            try {
                const { data } = await axios({
                    method: 'DELETE',
                    url: origin + '/users/idols/' + id,
                    headers: {
                        access_token: localStorage.getItem("access_token")
                    }
                })
                this.fetchFavoriteIdols()
            } catch (error) {
                console.log(error);
            }
        },
    },
})