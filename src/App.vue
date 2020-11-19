<template>
	<div id="app flex flex-col bg-green-200">
		<header id="Header">
			<section id="head" style="height: 600px;">
				<div id="head">
				</div>
			</section>
		</header>
		<div class="body">

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

			<section id="Introduction" class="bg-gray-200">
				<h1 class="section-title text-main">Create your class!</h1>
				<div class="container mx-auto">
					<hr class="w-1/5 mx-auto h-12">
				</div>
				<div class="container mx-auto" id="setup">
					<form action="/create_class.html" class="mx-auto ">
						<label for="fname">What do you want to teach?</label>
						<input type="text" id="fname" name="fname"><br><br>
						<label for="lname">What is the age of the audience?</label>
						<input type="text" id="lname" name="lname"><br><br>
						<p>Please select the type of class:</p>
						<input type="radio" id="sync" name="type" value="sync">
						<label for="sync">sync</label><br>
						<input type="radio" id="async" name="type" value="async">
						<label for="async">async</label><br>
						<input type="radio" id="other" name="type" value="other">
						<label for="other">Other</label>
						<br>
						<input type="submit" value="Submit">
                    </form>
				</div>
			</section>
			<section>
				<div class="" id="template_class">

					<ul id="available_template">
						<li>
							<ul id="template1">
								<li>Introduction</li>
								<li>Core theory</li>
								<li>Exercises</li>
								<li>Conclusion</li>
							</ul>
						</li>
						<li>
							<ul id="template2">
								<li>Introduction</li>
								<li>Core theory</li>
								<li>Conclusion</li>
							</ul>
						</li>
					</ul>
					<br>
					<form action="/create_class.html">
						<input type="submit" value="Submit">
                    </form>
				</div>
				<div class="" id="class">


					<h2>Introduction</h2>
					<ul id="template1introduction">
						<li>aa</li>
						<li>bb</li>
						<li>cc</li>
						<li><button>+</button></li>
					</ul>
					<h2>Core theory</h2>
					<ul id="template2 introduction">
						<li>dd</li>
						<li>ee</li>
						<li>ff</li>
						<li><button>+</button></li>
					</ul>
					<h2>Exercises</h2>
					<ul id="template1-introduction">
						<li>gg</li>
						<li>hh</li>
						<li>ii</li>
						<li><button>+</button></li>
					</ul>
					<h2>Conclusion</h2>
					<ul id="template1-introduction">
						<li>jj</li>
						<li>kk</li>
						<li>ll</li>
						<li><button>+</button></li>
					</ul>


				</div>
				<div class="" id="class">
					<form action="/create_class.html">
						<label for="fname">What do you want to teach?</label>
						<input type="text" id="fname" name="fname"><br><br>
                    </form>
						<h2>Select your source of content:</h2>
						<ul id="Source_Content">
							<li>
								<h3>Google</h3>
								<ul id="template1-introduction">
									<li><button>aa</button></li>
									<li><button>bb</button></li>
									<li><button>cc</button></li>
								</ul>
							</li>
							<li>
								<h3>Youtube</h3>
								<ul id="template1-introduction">
									<li><button>dd</button></li>
									<li><button>ee</button></li>
									<li><button>ff</button></li>
								</ul>
							</li>
							<li>
								<h3>Wikipedia</h3>
								<ul id="template1-introduction">
									<li><button>gg</button></li>
									<li><button>hh</button></li>
									<li><button>ii</button></li>
								</ul>
							</li>
							<li>
								<h3>Record yourself</h3>
								<ul id="template1-introduction">
									<li><button>+</button></li>
								</ul>
							</li>
						</ul>
						<br>
						<form action="/create_class.html">
							<input type="submit" value="Submit">
                    </form>
				</div>
			</section>
		</div>


		<footer id="Footer" class="bg-black flex-grow">
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
        -webkit-transform: translate3d(0, 0, 0);
        top: 0;
        left: 0;
        width: 100%;
        height: 600px;
    }

    #VideoBackground {
        position: relative;
        -webkit-transform: translate3d(0, 0, 0);
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
