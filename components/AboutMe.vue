<template>
    <div class="container">
        <div class="content">
            <span class="headshot-image" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                <img src="../assets/alfred.jpg" alt="Alfred">
            </span>

            <div class="aboutme-content" data-aos="fade-right" data-aos-duration="2000">
                <p> Hey there! I'm Grace, a passionate student on a creative journey. My story revolves around
                    the world of Digital and Visual Storytelling. Currently pursuing a Bachelor of Fine Arts at Augusta
                    University in Augusta, GA, I'm set to graduate in December 2023.
                </p>
                <br>
                <!-- <h3> Skills Snapshot </h3>
                <ul>
                    <li>
                        Instructing 🎓
                    </li>
                    <li>
                        Videography 🎥
                    </li>
                    <li>
                        Audio Engineering 🎙️

                    </li>
                    <li>
                        Social Media Management 📱

                    </li>
                    <li>
                        Adobe Creative Cloud 🎨

                    </li>
                    <li>
                        Final Cut Pro 🎬

                    </li>
                    <li>
                        Social Media Management 📱

                    </li>
                </ul> 
            <br>
        -->


                <h3> My Journey </h3>

                <p> My experience extends across various roles, where I've thrived in the realm of media and content
                    creation. As a Television & Cinema Lab Assistant at Augusta University, I assisted professors in film
                    classes, managed equipment scheduling, and played a part in video and audio productions.

                    During my remote stint as a Social Media Coordinator at Who'z Nxt in Pleasanton, CA, I crafted
                    eye-catching graphics and videos, wrote compelling social media content, and stayed ahead of industry
                    trends.

                    I also served as a Communications & Marketing Student Assistant at Augusta University, where I edited
                    podcast episodes and created promotional videos. I even stepped up to manage social media during my
                    supervisor's absence, ensuring our online presence remained vibrant.

                    As a Keyholder and Social Media Manager at BoxLunch, I took charge of store operations and created
                    engaging photo and video content to boost our online presence. </p>
                <br>
                <h3> Achievements & Accolades </h3>

                <ul>
                    <li>
                        Secretary of the Media Production Club at Augusta University.
                    </li>
                    <li>
                        Host and Chief Editor of the Media Production Club Podcast.
                    </li>
                    <li>
                        Proud recipient of the Silver Telly Award for "Birthdays" in the Social Video Category.
                    </li>
                    <li>
                        Honored with the Katherine Reese Pamplin Award for Artistic Achievement in Filmmaking at Augusta
                        University.
                    </li>
                    <li>
                        Winner of the Best Videography award in the PSA Contest held by the Georgia Cancer Center.
                    </li>
                </ul>

                <br>
                <p> My journey is all about creativity, storytelling, and the power of media. Join me as I continue to
                    explore the fascinating world of digital narratives! </p>





            </div>
            <div class="contactme-btn">
                <span id="btn-container" data-aos="fade" data-aos-duration="1500" data-aos-delay="1200">
                    <router-link id="button" to="/contact">Contact Me</router-link>
                </span>

            </div>

            <h1 id="linkedin" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500"
                data-aos-anchor="#btn-container">
                <a href="https://www.linkedin.com/in/grace-rolfe-40320223b/" target="_blank"> LinkedIn</a>
            </h1>
            <h1 id="resume" data-aos="fade" data-aos-duration="1500" data-aos-delay="1500" data-aos-anchor="#btn-container">
                <a href="../../public/resume.pdf" target="_blank"> Resume</a>
            </h1>


        </div>

    </div>
</template>

<script>
export default {
    name: 'AboutMe'


}
</script>

<style scoped>
.container {
    /* display: grid; */
    height: 100vh;
    /* scroll-snap-type: y mandatory; */
    /* grid-template-rows: repeat(5, 20%); */
}

.headshot-image {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 2;
    grid-row-end: 5;
    display: flex;
    width: 80%;

}

.content {
    /* width: 100vw; */
    height: 100vh;
    display: grid;
    grid-row-start: 2;
    grid-template-columns: 10% 50% 5% 25% 10%;
    grid-template-rows: repeat(4, 20%) 10% 10%;
    background-color: rgb(238, 234, 234);

}

.aboutme-content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
    margin: auto;
    margin-top: 10px;
    /* border: 2px rgb(61, 0, 61) solid; */
    padding: 20px;
    scroll-snap-align: start;
    overflow-y: scroll;
    max-height: 50vh;
}

p {
    overflow-y: scroll;

}

#btn-container {

    grid-row-start: 3;
    grid-row-end: 5;
    justify-self: center;
    border-radius: 25%;
}

#button {
    font-size: 1.5rem;
    border-radius: 50%;
    border: 3px black purple;
    padding: 30px;
    background-color: rgba(61, 0, 61, 0.8);
    position: relative;
    bottom: -9vh;
    width: 3vw;
}




#linkedin {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 5;
    grid-row-end: 6;
    display: flex;
    margin: auto;
}

#resume {
    display: flex;
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column-start: 2;
    grid-column-end: 3;
    /* left: 80%; */
    margin: auto;


}

a {
    position: relative;
    bottom: -5vh;
}

.contactme-btn {
    display: grid;
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column-start: 2;
    grid-column-end: 3;
    /* grid-template-columns: repeat(5, 20%); */
    grid-template-rows: repeat(5, 20%);
}

img {
    border-radius: 50%;
    display: flex;
    width: auto;
    height: auto;

}
</style>