<template>
    <div id="app flex flex-col bg-green-200">
        <header id="Header">
            <section id="VideoBackground" style="height: 600px;">
                <video autoplay loop muted ref="video">
                    <source :src="require('@/assets/video.mp4')" type="video/mp4">
                </video>
                <div id="VideoBackgroundContent">
                    <div class="container mx-auto h-full">
                        <div class="container text-center mx-8 mt-2 mb-1">
                            <h1 class="text-xl text-white inline-block align-middle px-2">The Teachergy</h1>
                        </div>
                        <div class="container mx-auto">
                            <hr class="gradient">
                        </div>
                        <div class="px-4 sm:px-4 flex flex-col mx-auto text-white text-left h-full flex-initial text-center">
                            <h1 class="text-3xl sm:text-4xl lg:text-5xl md:text-5xl xl:text-6xl my-16 ">Create
                                <span class="text-main">engaging</span>
                                classes
                                <br>and <span class="text-main">save time</span>
                            </h1>
                            <p class="text-xl sm:text-l lg:text-2xl sm:mx-0 pb-4 my-0">The right content and the best way to show it</p>
                            <div class="my-6">
                                <a class="btn btn-main" onclick="ga('send', 'event', 'landing', 'click', 'create a class')" href="#Subscribe">Create a class</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
        <div class="body">
            <section id="Introduction" class="bg-gray-200">
                <div class="container mx-auto py-0 px-2">
                    <h2 class="text-2xl lg:text-3xl text-main font-title text-center align-middle px-2">You know your students, we have the material and tools. <br> Let's work together!</h2>
                    <p class="text-center text-xl lg:text-2xl pt-2 text-gray-600">Give your classes a turn with <b>The Teachergy</b>. Build effective, dynamic and fun lessons.</p>
                </div>
            </section>
            <section id="Features">
                <h1 class="section-title text-main">Features</h1>
                <div class="container mx-auto">
                    <hr class="w-1/5 mx-auto h-12">
                </div>
                <ul class="container flex mx-auto items-start text-center justify-center flex-wrap">
                    <li v-for="(feature, index) in features" v-bind:key="index"
                        class="w-full p-4 sm:w-1/2 lg:w-1/4 mx-auto">
                        <img :src="require(`@/assets/${feature.icon}`)"
                             class="center w-32 rounded-full mx-auto mb-4"/>
                        <h2 class="font-title text-main text-2xl mx-4 xl:mx-6">{{feature.title}}</h2>
                        <p class="text-gray-800 mx-2 text-xl">{{feature.text}}</p>
                    </li>
                </ul>
            </section>
            <section id="Paragraph" class="bg-gray-200">
                <div class="container mx-auto px-2">
                    <p class="text-center text-xl lg:text-2xl text-gray-600 lg:mx-20">We'll help you choose the best content available, add your explanations and include activities with your students.</p>
                    <h2 class="text-xl lg:text-3xl text-main font-title text-center align-middle">Simple and in just minutes</h2>
                </div>
            </section>
            <section id="How_it_works">
                <h1 class="section-title text-main">How it works</h1>
                <div class="container mx-auto">
                    <hr class="w-1/5 mx-auto h-12">
                </div>
                <div class="container mx-auto">
                    <div class="flex flex-col sm:flex-row w-full items-center">
                        <div class="w-full sm:w-1/2 container px-4">
                            <img src="@/assets/web_4_step_lesson_creation.jpg" class="center mx-auto " style="width: 24rem"/>
                        </div>
                        <ol class="w-full sm:w-1/2 px-8">
                            <li v-for="(step, index) in steps" v-bind:key="index" class="text-3xl my-6 allign-top">
                                <h2 class="text-xl md:text-2xl lg:text-3xl"><span class="text-main font-title lg:text-3xl md:text-2xl sm:text-xl xs:text-l inline-block align-middle">{{index + 1}}</span> {{step.text}}</h2>
                            </li>
                            <li class="text-main font-title text-xl md:text-2xl lg:text-3xl my-8">Your class is ready!</li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id="Subscribe">
                <div class="bg-gray-700 bg-opacity-75 py-4">
                    <h1 class="section-title text-white">Join our early adopters community.<br> Save time but also money!</h1>
                    <form class="flex flex-col sm:flex-row items-center justify-center mx-auto mb-6" @submit="submitForm">
                        <input class="mx-4 w-1/2 my-2 sm:w-2/5 py-3 px-6 rounded text-sm font-body bg-transparent border-white text-white border placeholder-white placeholder-opacity-100"
                               placeholder="Email" type="email" v-model="email">
                        <img v-if="loading" class="mx-2" src="@/assets/hourglass_top-24px.svg">
                        <button class="btn mx-4 w-1/2 my-2 sm:w-auto btn-main"  onclick="ga('send', 'event', 'landing', 'click', 'sign up')">Get started</button>
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
                        icon: 'web_Reviewed_material.jpg',
                        title: 'Reviewed material',
                        text: 'After analyzing +1000 videos we\'ll give you just a few great options.',
                    },
                    {
                        icon: 'web_Add_your_explanation.jpg',
                        title: 'Add your explanation',
                        text: 'Easy to use editor to include your voice, videos and slides.',
                    },
                    {
                        icon: 'web_Interactions_with_students.jpg',
                        title: 'Interactions with students',
                        text: 'The best engaging tools available! From quizzes to games, whatever is suitable for your audience.',
                    },
                    {
                        icon: 'web_Continuous_improvement.jpg',
                        title: 'Continuous improvement',
                        text: 'Give the type of lessons your students value the most.',
                    },
                ],
                steps: [
                    {
                        text: 'Tell us what you teach',
                    },
                    {
                        text: 'Choose featured content',
                    },
                    {
                        text: 'Include your explanation in a simple way',
                    },
                    {
                        text: 'Make it interactive',
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

    .section-title {
        @apply text-4xl text-center p-2;
    }

    .body section {
        @apply py-6;
    }

    #Subscribe {
        @apply bg-no-repeat bg-left bg-cover bg-center text-white py-0;
        background-image: url("./assets/hands.webp");
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
        @apply py-3 px-6 rounded uppercase;
    }

    .btn-main {
        @apply bg-main text-white font-black text-xl;
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
