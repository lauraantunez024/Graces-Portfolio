<template>

      <div class="container">

        <TransitionSlide title="About Me"/>
        <AboutMe />
        <TransitionSlide title="Services List"/>
        <ServicesList v-for="service in services" :key="service.id" :title="service.title"
        :firstBullet="service.descriptionTiles[0].text" :secondBullet="service.descriptionTiles[1].text"
        :thirdBullet="service.descriptionTiles[2].text" :firstDetails="service.descriptionTiles[0].details"
        :secondDetails="service.descriptionTiles[1].details" :thirdDetails="service.descriptionTiles[2].details" />
        <TransitionSlide title="Testimonials!"/>
        <MyTestimonials />
      </div>
     

</template>

<style scoped>
.container {
  width: 100vw;
}

</style>

<script>
import AboutMe from '../components/AboutMe.vue';
import MyTestimonials from '../components/MyTestimonials.vue';
import ServicesList from '../components/ServicesList.vue';
import TransitionSlide from '../components/TransitionSlide.vue';


export default {
  name: 'IndexPage',
  data() {
    return {
      services: [
        {
          title: 'Filmmaking',
          descriptionTiles: [
            {
              text: 'Screenwriting',
              details: [
                'Developed and executed original: ', 
                'Screenplays',
                'Music video concepts',
                'Concepts for informational videos and advertisements'
              ]
            },
            {
              text: 'Bachelor of Fine Arts',
              details: [
                'Graduated December 2023 with BFA in Digital & Visual Storytelling',
                'Awarded Silver Telly Award for "Birthdays" in Social Video Category',
                'Awarded Best Videography in PSA Contest by Georgia Cancer Center'
              ]
            },
            {
              text: 'Directing',
              details: [
                'Directed narrative short film productions',
                'Directed music video productions',
                'Directed informational and advertising video productions'
              ]
            }
          ]
        },
        {
          title: 'Social Media Coordinator',
          descriptionTiles: [
            {
              text: 'Content Creation',
              details: [
                'Created and curated compelling content for various social media platforms',
                "Used Canva and Adobe Suite to create graphics and videos for various social media platforms",
                'Copywrote social media content and captions across social media platforms'
              ]
            },
            {
              text: 'Social Media Management',
              details: [
                'Managed and maintained various social media accounts',
                'Developed and implemented a comprehensive social media content calendar',
                ''
              ]
            },
            {
              text: 'Analytics & Reporting',
              details: [
                'Utilized social media analytics tools to track performance metrics',
                'Utilized social media analytics tools to optimize future social media efforts',
                'Researching industry analytics, competitor accounts, and social media trends to plan content strategy'
              ]
            }
          ]
        },
        {
          title: 'Audio',
          descriptionTiles: [
            {
              text: 'Soundscape',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            },
            {
              text: 'Podcast',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            },
            {
              text: 'Video',
              details: [
                'detail 1',
                'detail 2',
                'detail 3'
              ]
            }
          ]

        }
      ]





    }
  },
  components: {
    AboutMe,
    MyTestimonials,
    ServicesList,
    TransitionSlide
}
}
</script>
