<template>
    <div class="container">
        <div class="content">
            <div class="title-container">

                <h1> {{ currentTitle }}</h1>
            </div>

            <button class="btn-prev btn" @click="changeVideo('prev')">prev</button>
            <div class="video-container">
                <video controls>
                    <source :src="currentVideo" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <span id="caption">
                <p> {{ currentCaption }}</p>
            </span>

            <button class="btn-next btn" @click="changeVideo('next')">next</button> 

        </div>


        <!-- Two buttons that will control the view whether podcasts are shown or sounds scapes v-show -->


        <!-- 
                    <h1> {{ currentType }} </h1>
                    <div class="video-container" ref="scrollContainer" :style="currentBackground">
                        <span><img class='title-image' :src="currentTitleImage" alt="test" :style="currentTitleImageStyle"></span>
                      
                        <div class="caption" :style="currentCaptionStyle">
                            <h2 :style="currentHeaderStyle"> {{ currentTitle }}</h2> 
                            <p :style="currentPStyle"> {{ currentDescription }}</p>
                        </div>
                    </div>
                -->

    </div>
    <!-- </v-col>
    </v-row> -->
</template>

<script>

// import '../assets/sass/style.scss'


export default {
    name: 'VideoView',

    data() {
        return {
            videos: [
                {
                    name: 'First Video',
                    path: '../assets/dmmy-vidoe.mp4',
                    caption: 'This is the first video weeeeeee',
                    titleImage: '',
                    style: ''
                },
                {
                    name: 'Second Video',
                    path: '../assets/video_preview_h264.mp4',
                    caption: 'Second Video RAAAAAAAAH',
                    titleImage: '',
                    style: ''
                },
            ],
            currentSlideIndex: 0
           
            

        }
    },

    methods: {
        changeVideo(action) {
            if (action === 'prev') {

                this.currentSlideIndex = (this.currentSlideIndex - 1 + this.videos.length) % this.videos.length
            } else if (action === 'next') {

                this.currentSlideIndex = (this.currentSlideIndex + 1) % this.videos.length
            }
        },

    },
    computed: {
        currentVideo() {
            return this.videos[this.currentSlideIndex].path;
        },
     
        currentTitle() {
            return this.videos[this.currentSlideIndex].name;
        },
        currentCaption() {
            return this.videos[this.currentSlideIndex].caption;
        },
        currentTitleImage() {
            return this.videos[this.currentSlideIndex].titleImage;
        },
    
       
    },



}
</script>

<style scoped> 

.container {

     display: grid;
     grid-template-rows: repeat(5, 1fr);
     grid-template-columns: repeat(5, 1fr);
     width: 100vw;
     height: 100vh;
 }

 .content {
     grid-row-start: 2;
     grid-row-end: 6;
     display: grid;
     grid-template-columns: 10% 70% 10% 10%;
     grid-template-rows: repeat(5, 1fr);
     width: 100vw;
     height: 80vh;
 }

 .video-container {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 5;
    display: flex;
    justify-content: center;
 }

 .title-container {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: center;
    margin: auto;
 }

 h1 {
    font-size: 5vw;
 }

 video {
    height: 100%;
 }

 .btn {
    height: 5vh;
    width: 6vw;
    margin: auto;
    font-size: 2vw;
    top: 50%;
 }



 button:hover {
    background-color: bisque;


 }

 .btn-prev {
    /* grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 2;
    grid-column-end: 3; */
    position: absolute;
    left: 10%;

 }
 .btn-next {
    /* grid-row-start: 3;
    grid-row-end: 4;
    grid-column-start: 4;
    grid-column-end: 5; */
    position: absolute;
    right: 10%;

}
#caption {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 2;
    grid-column-end: 3;
    text-align: center;
    margin: auto;
    font-size: 1.5vw;
}

</style>
