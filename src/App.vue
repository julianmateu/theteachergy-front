<template>
    <div id="app flex flex-col bg-green-200">
        <header id="Header">
            <section id="VideoBackground" style="height: 640px;">
                <video autoplay loop muted ref="video">
                    <source :src="require('@/assets/video.mp4')" type="video/mp4">
                </video>
                <div id="VideoBackgroundContent">
                    <div class="container mx-auto h-full">
                        <div class="container text-center mt-2 mb-4">
                            <img src="@/assets/logo.jpeg" class="w-8 inline-block align-middle">
                            <h1 class="text-xl text-white inline-block align-middle px-2">The Teachergy</h1>
                        </div>
                        <div class="container mx-auto">
                            <hr class="gradient">
                        </div>
                        <div class="px-4 sm:px-24 flex flex-col mx-auto text-white text-left h-full justify-center flex-initial">
                            <h1 class="text-3xl sm:text-5xl">Create
                                <span class="text-red-600">engaging</span>
                                classes and
                                <span class="text-red-600">save time</span>
                            </h1>
                            <p class="text-xl">The right content and the best way to show it</p>
                            <div class="my-4">
                                <a class="btn btn-main" onclick="ga('send', 'event', 'landing', 'click', 'email me when ready')" href="#Subscribe">E-Mail me when it is ready</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div class="body">
            <section id="About">
                <h1>How we'll help you</h1>
                <div class="container mx-auto">
                    <hr class="w-1/5 mx-auto h-12">
                </div>
                <ul class="container flex mx-auto items-center text-center justify-center flex-wrap">
                    <li v-for="(feature, index) in features" v-bind:key="index"
                        class="w-full p-2 sm:w-1/2 sm:p-8 mx-auto">
                        <img :src="require(`@/assets/${feature.icon}`)"
                             class="center w-32 sm:w-48 rounded-full mx-auto"/>
                        <h2>{{feature.title}}</h2>
                        <p class="text-gray-600 mx-16">{{feature.text}}</p>
                    </li>
                </ul>
            </section>
            <section id="Content" class="bg-gray-100">
                <h1>4-step lesson creation</h1>
                <div class="container mx-auto">
                    <hr class="w-1/5 mx-auto h-12">
                </div>
                <div class="container mx-auto">
                    <div class="flex flex-col sm:flex-row w-full items-center">
                        <div class="w-full sm:w-1/3 container px-4">
                            <img src="@/assets/book-tree.webp" class="center mx-auto"/>
                        </div>
                        <ol class="w-full sm:w-2/3 px-8">
                            <li v-for="(step, index) in steps" v-bind:key="index">
                                <h2>{{index + 1}} - {{step.text}}</h2>
                            </li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id="Subscribe">
                <div class="bg-gray-800 bg-opacity-25 py-4">
                    <h1>Get in touch with us!</h1>
                    <form class="flex flex-col sm:flex-row items-center justify-center mx-auto mb-6" @submit="submitForm">
                        <input class="mx-4 w-1/2 my-2 sm:w-2/5 py-3 px-6 rounded text-sm font-body bg-transparent border-white text-white border placeholder-white placeholder-opacity-100"
                               placeholder="Email" type="email" v-model="email">
                        <img v-if="loading" class="mx-2" src="@/assets/hourglass_top-24px.svg">
                        <button class="btn mx-4 w-1/2 my-2 sm:w-auto btn-main"  onclick="ga('send', 'event', 'landing', 'click', 'sign up')">Sign up</button>
                    </form>
                </div>
            </section>
        </div>
        <footer id="Footer" class="bg-black flex-grow">
            <div class="container mx-auto">
                <div class="flex flex-col text-center py-8 justify-between">
                    <div class="container">
                        <img src="@/assets/logo.jpeg" class="w-6 inline-block align-middle">
                        <h1 class="text-white inline-block align-middle px-2">The Teachergy</h1>
                    </div>
                    <p class="text-gray-600 py-4">Copyright © 2020 The Teachergy - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import '@/assets/css/tailwind.css';
    import axios from 'axios';

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                loading: false,
                email: null,
                features: [
                    {
                        icon: 'books.webp',
                        title: 'Highly ranked contents',
                        text: 'Reviewed content to make your class more effective.',
                    },
                    {
                        icon: 'laptop.webp',
                        title: 'Use Tech in a wise way',
                        text: 'Create dynamic interactions using students\' devices.',
                    },
                    {
                        icon: 'library.webp',
                        title: 'Continuous improvement',
                        text: 'Track what works well for your audience.',
                    },
                    {
                        icon: 'kids.webp',
                        title: 'Access to our community',
                        text: 'Surf a content library ranked by students.',
                    },
                ],
                steps: [
                    {
                        text: 'Tell us what you have to teach',
                    },
                    {
                        text: 'Tell us what you have to teach',
                    },
                    {
                        text: 'Mix your style with our suggestions (content, other classes, etc)',
                    },
                    {
                        text: 'Give your lesson and interact with your students',
                    },
                    {
                        text: 'Improve your lesson with your students feedback',
                    },
                ],
            }
        },
        methods: {
            submitForm: async function(e) {
                e.preventDefault();

                this.loading = true;
                await axios({
                    method: 'get',
                    mode: 'no-cors',
                    url: 'https://script.google.com/macros/s/AKfycbyqGUG15oGadOrWqtV86hs0DciXxgyalCVhN9lvrDfJUKSImKT5/exec?email=' + encodeURIComponent(this.email),
                });
                this.loading = false;
                this.email = null;
            }
        }
    }
</script>

<style>
    h1, h1 * {
        @apply font-title;
    }

    * {
        @apply font-body;
    }

    .body section h1 {
        @apply text-4xl text-main text-center py-8;
    }

    .body section {
        @apply py-4;
    }

    #Subscribe {
        @apply bg-no-repeat bg-left bg-cover bg-center text-white py-0;
        background-image: url("./assets/hands.webp");
    }

    #Subscribe h1 {
        @apply text-white py-4;
    }

    h2 {
        @apply text-xl my-3;
    }

    p {
        @apply text-sm;
    }

    hr.gradient {
        border: 0;
        height: 1px;
        background-image: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0));
    }

    .btn {
        @apply font-bold py-3 px-6 rounded uppercase;
    }

    .btn-main {
        @apply bg-main text-black text-sm font-black;
    }

    .btn-main:hover {
        @apply bg-hover;
    }

    #VideoBackgroundContent {
        text-align: center;
        @apply bg-gray-800 bg-opacity-75;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 640px;
    }

    #VideoBackground {
        position: relative;
        background-size: cover;
        background-position: center;
        overflow: hidden;
    }

    video {
        object-fit: cover;
        z-index: -100;
        overflow: hidden;
        background-size: cover;
        height: 100%;
        width: 100%
    }
</style>
