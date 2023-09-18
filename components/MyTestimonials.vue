<template>
    <div class="container">
        <!-- <h1 id="main-header"> Testimonials!</h1> -->
        <button class="btn-prev btn" @click="changeCard('prev')">Prev</button>

        <div class="testimonial-container">
            <div class="testimonial-content">
                <p> {{ currentTestimonial }} </p>
            </div>
            <img :src="currentImage" alt="testimonial headshot">
            <div class="testimonial-footer">
                <h1 id="name"> {{ currentName }}</h1>
                <p> {{ currentTitle }}</p>
             </div>
        </div>
        <button class="btn-next btn" @click="changeCard('next')">next</button>

    </div>
</template>

<script>
    export default {
            name: 'MyTestimonials',
            data() {
                return {
                    testimonials: [
                        {
                            name: 'Alfred Rolfe',
                            coverPhoto: "http://placekitten.com/300/300",
                            title: 'Long time coworker',
                            testimonialContent: "Prance along on top of the garden fence, annoy the neighbor's dog and make it bark love fish and catching very fast laser pointer but at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in so sit in box steal mom's crouton while she is in the bathroom. Hack up furballs play with twist ties in the middle of the night i crawl onto your chest and purr gently to help you sleep but if human is on laptop sit on the keyboard or at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in ooooh feather moving feather!."
                        },
                        {
                            name: 'Korra Rolfe',
                            coverPhoto: "http://placekitten.com/g/300/300",
                            title: 'Questionable manager',
                            testimonialContent: "Groom yourself 4 hours - checked, have your beauty sleep 18 hours - checked, be fabulous for the rest of the day - checked playing with balls of wool run in circles, and the cat was chasing the mouse or lick left leg for ninety minutes, still dirty cats making all the muffins. I love cuddles cough hairball on conveniently placed pants. Slap kitten brother with paw disappear for four days and return home with an expensive injury; bite the vet when in doubt, wash hunt anything that moves. Always ensure to lay down in such a manner that tail can lightly brush human's nose chill on the couch table attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently yet meow whatever, meowwww and meow all night having their mate disturbing sleeping humans. Get away from me stupid dog. Knock dish off table head butt cant eat out of my own dish floof tum, tickle bum, jellybean footies curly toes or toy mouse squeak roll over but chase little red dot someday it will be mine!, and i show my fluffy belly but it's a trap! if you pet it i will tear up your hand. Roll on the floor purring your whiskers off put toy mouse in food bowl run out of litter box at full speed lay on arms while you're using the keyboard."
                        }
                    ],
                    currentSlideIndex: 0
                }
            },
            methods: {
                changeCard(action) {
                    if (action ==='prev') {
                        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length
                    } else if (action === 'next') {
                        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length
                    }
                }
            },
            computed: {
                currentName() {
                    return this.testimonials[this.currentSlideIndex].name
                },
                currentTitle() {
                    return this.testimonials[this.currentSlideIndex].title
                },
                currentImage() {
                    return this.testimonials[this.currentSlideIndex].coverPhoto
                },
                currentTestimonial() {
                    return this.testimonials[this.currentSlideIndex].testimonialContent
                }

            }
        
    }
</script>

<style scoped>

.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 20% 10% 10% 20% 10% 10% 20% ;
    grid-template-rows: 10% 15% 25% 25% 15% 10%;
    background-color: rgb(238, 234, 234);
}


img {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 3;
    grid-row-end: 4;
    border-radius: 50%;
    justify-self: center;
    max-height: 100%;
    display: flex;
}
.testimonial-container {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 2;
    grid-row-end: 6;
    border-radius: 5%;
    /* border: 2px black solid; */
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-template-rows: 10% 50% 25% 15%;
    max-width: 100%;
    max-height: 100%;
    background-color: white;
    overflow: auto;
}

.testimonial-content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    overflow-y: scroll;
    margin-bottom: 30px;
}


p {
    text-align: center;
}

.testimonial-footer {
    grid-row-start: 4;
    grid-column-start: 2;
    grid-column-end: 3;
}

.btn-prev {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 40%;
    width: 75%;
    justify-self: right;
    margin-top: 50%;
}
.btn-next {
    grid-column-start: 7;
    grid-row-start: 3;
    grid-row-end: 4;
    height: 40%;
    width: 75%;
    justify-self: left;
    margin-top: 50%;
}

.btn {
    border-radius: 3%;
    font-size: 3vw;
}

button:hover {
    background-color: mediumpurple;
}
#name {
    text-align: center;
}
</style>