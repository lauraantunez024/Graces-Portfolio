<!-- <template>
    <div class="contact-form">
        <form @submit.prevent="submitForm"> 
            <div class="text-input" id="name">
                <label>Name: </label>
                <input type="text" v-model="name" required>
            </div>

            <div class="btn">
                <label style="font-size: 2.5rem;">Best way to contact you</label>
                <br>
                <input type="radio" id="phone" value="phone" v-model="contactMethod">
                <label for="phone" style="font-size: 2rem;"> Phone Number</label>
                <br>
                <input type="radio" id="email" value="email" v-model="contactMethod">
                <label for="email" style="font-size: 2rem"> Email</label>
            </div>

            <div v-if="contactMethod === 'phone'" class="text-input">
                <label>Phone: </label>
                <input type="tel" v-model="phone" required>
            </div>

            <div v-if="contactMethod === 'email'" class="text-input">
                <label>Email: </label>
                <input type="email" v-model="email" required>
            </div>

            <div class="text-input" >
                <label>what it do </label>
                <input type="text" v-model="message" required>
            </div>

            <button id="submit-btn" type="submit">Submit</button>
        </form>

    </div>

</template>

<script>


export default {
    name: 'ContactForm',
    data() {
        return {
           
                name: '',
                contactMethod: '',
                email: '',
                phone: '',
                message: ''
        
            
        }
    },
 

    methods: {
    async submitForm() {
        try {
            const response = await fetch('https://graces-portfolio.vercel.app/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.name,
                    message: this.message,
                    email: this.email,
                    phone: this.phone

                })
            });
            const data = await response.json();
            if(data.success) {
                alert('Message sent!');
            } else {
                alert('Error sending message.');
            }
        } catch (error) {
            alert('Failed to send message.');
        }
    }
}
}

</script>

<style scoped>


.contact-form {
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    /* gap: 1rem; */
    font-size: 3rem;
    /* margin-top: 10vh; */
    /* border: 3px black solid; */
    padding: 15px;
    height: 65vh;
    background-color: rgba(128, 128, 128, 0.7);
    overflow-y: scroll;
    width: 30vw;
    margin: auto;
}

form {
    float: center;
    padding-top: 5%;
}

input {
    height: 3vh;
    background-color: aliceblue;
    font-size: 1rem;
    padding-left: 20px;
    position: relative;
    top: 50%;
}

.text-input {
    width: 20vw;
}

label {
    /* text-align: center; */
    padding-bottom: -10%;

}

#submit-btn {
    margin-left: 35%;
    padding-top: 3%;
    /* bottom: -30%; */
    position: relative;
}

#name {
    grid-row-start: 1;
    grid-row-start: 2;
}

</style> -->
