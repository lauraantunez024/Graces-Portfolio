<template>
    <div class="contact">
      <h1>Want to work together?</h1>
      <v-layout row>
          <v-flex xs6 class="services">
              <h2> list of services</h2>
  
          </v-flex>
        <v-flex xs6>

            <ContactForm/>
        </v-flex>


      </v-layout>
  
    </div>
  </template>
  
  <script>
  import ContactForm from '../components/ContactForm.vue';
  export default {
    name: 'ContactView',
    components: {
      ContactForm
    
    }
  }
  
  </script>
  
  <style scoped>
  h1 {
    margin-top: 10vh;
    /* margin-bottom: 2vh; */
    font-size: 5rem;
    text-align: center;
  }

  h2 {
    left: 25%;
    position: absolute;
  }


  
  </style>
  