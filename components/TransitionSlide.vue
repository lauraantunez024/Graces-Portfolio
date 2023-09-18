<template>
    <div class="container">
        <div class="content">
            <!-- data-aos="flip-left" 
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic" 
            data-aos-duration="2000" -->

            <h1 
            > {{ splitTitle.firstHalf }}
            </h1>
            <br>
            <br>
            <h1 
            > {{ splitTitle.secondHalf }}
        </h1>
        
        <!-- data-aos="flip-right" 
        data-aos-delay="200"
        data-aos-easing="ease-out-cubic" 
        data-aos-duration="2000" id="secondhalf" -->

        </div>

    </div>
</template>

<script>
export default {
    name: 'TransitionSlide',
    props: ['title'],
    computed: {
        splitTitle() {
            const words = this.title.split(' ');
            const middleIndex = Math.floor(words.length / 2);
            const firstHalf = words.slice(0, middleIndex).join(' ');
            const secondHalf = words.slice(middleIndex).join(' ');

            return {
                firstHalf, secondHalf
            }
        }
    }
}
</script>

<style scoped>
.container {
    display: grid;
    height: 100vh;
    width: 100vw;
    grid-template-rows: 15% 85%;
    /* grid-template-rows: repeat(3, 1fr); */
    background-color: gainsboro;
}

h1 {
    text-align: center;
    margin: auto;
    font-size: 12vw;
    font-family: Helvetica;
}
/* #secondhalf {
    margin-right: 15px;
} */
.content {

    grid-row-start: 2;
    grid-row-end: 4; 
}
</style>