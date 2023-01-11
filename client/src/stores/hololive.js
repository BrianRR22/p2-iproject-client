import { defineStore } from "pinia";
import axios from "axios";

origin = 'http://localhost:3000'

export const useHololiveStore = defineStore('hololive', {
    state() {
        return {
            song: [],
            name: '',
            access_token: '',
            username: '',
            idols: [],
            branches: [],
            favoriteIdols: []
        }
    },
    actions: {
        songSpotify() {
            const options = {
                method: 'GET',
                url: 'https://spotify23.p.rapidapi.com/artist_singles/',
                params: { id: '2Iss9rGmxvoEfVigargjTH', offset: '0', limit: '20' },
                headers: {
                    'X-RapidAPI-Key': '37f62bd33cmshc44f509dac943b4p140114jsn4a30c69863c7',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };

            axios.request(options)
                .then(function (response) {
                    // console.log(response.data.data.artist.discography.singles.items);
                    let song = response.data.data.artist.discography.singles.items
                    song.forEach(el => {
                        console.log(el.releases.items[0].name); //judul lagu spotify
                    });
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        async fetchIdols(branchId = null) {
            try {
                const { data } = await axios({
                    method: 'GET',
                    url: origin + `/idols?${branchId ? `filter[branch]=${branchId}` : ''}`
                })
                this.idols = data
                console.log(data);
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
                console.log(data);
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
                this.access_token = data.access_token
                this.username = data.username
                this.fetchIdols()
                this.fetchBranch()
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
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        },
    },
})