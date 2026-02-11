<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue';
import api from '@/services/api'; // ← this is the key step

const contactInfo = [
    {
        icon: 'fas fa-paper-plane',
        description: 'joypitprieto@gmail.com',
    },
    {
        icon: 'fas fa-map-marker-alt',
        description: 'Manila, Philippines',
    },
    {
        icon: 'fas fa-phone',
        description: '091234567890',
    }
]

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const alertMessage = ref('');
const alertType = ref('');
const token = ref('');

const isLoading = ref(false);
function showAlert(message, type = 'alert-success', duration = 2000) {
  alertMessage.value = message;
  alertType.value = type;
  setTimeout(() => {
    alertMessage.value = '';
    alertType.value = '';
  }, duration);
}
function resetForm() {
  form.name = '';
  form.email = '';
  form.message = '';
}

const handleSubmit = async () => {
  if (!form.name || !form.email || !form.message) {
    showAlert('Please fill in all fields.', 'alert-error');
    return;
  }
  isLoading.value = true; // show spinner
  try {
    // Submit contact form
    await api.post(
      '/contact',
      {
        name: form.name,
        email: form.email,
        message: form.message
      },
      {
        headers: {
          Authorization: `Bearer ${token.value}`
        }
      }
    );

    alertMessage.value = 'Message sent successfully!';
    alertType.value = 'alert-success';
    
    // Automatically hide after 2 seconds
    setTimeout(() => {
      alertMessage.value = '';
      alertType.value = '';
    }, 2000);

    // reset form
    resetForm()

  } catch (error) {
    console.error(error.response?.data || error);
    showAlert('Something went wrong.', 'alert-error');
  } finally {
    isLoading.value = false; // hide spinner
  }
};


</script>
<template>
   <section class="contact-section pt-page">
      <div class="section-container">

          <!--Page Heading-->
          <div class="page-heading">
              <span class="icon"><i class="lnr lnr-envelope"></i></span>
              <h2>Contact Me</h2>
          </div>

          <!--Form Row-->
          <div class="row mb-70">
              <div class="col-lg-8  offset-lg-2">
                  <div class="subheading">
                      <h3>Let's Talk</h3>
                  </div>

                <!-- Form Start -->
                <form id="contact-form" >
                    <div class="row">

                    <!-- Name Field -->
                    <div class="col-md-6 mb-50">
                        <span class="input">
                        <input
                            class="input__field"
                            type="text"
                            id="cf-name"
                            v-model="form.name"
                            placeholder="Name"
                            required
                        />
                        </span>
                    </div>

                    <!-- Email Field -->
                    <div class="col-md-6 mb-50">
                        <span class="input">
                        <input
                            class="input__field"
                            type="email"
                            id="cf-email"
                            v-model="form.email"
                            placeholder="Email"
                            required
                        />
                        </span>
                    </div>

                    <!-- Message Box -->
                    <div class="col-md-12 mb-30">
                        <span class="input">
                        <textarea
                            class="input__field"
                            id="cf-message"
                            rows="5"
                            v-model="form.message"
                            placeholder="How may I help you?"
                            required
                        ></textarea>
                        </span>
                    </div>

                    <!-- Alert Message -->
                    <div class="alert-container col-md-12" v-if="alertMessage">
                        <p :class="alertType">{{ alertMessage }}</p>
                    </div>

                    <!-- Submit Button -->
                    <div class="col-md-12 text-center">
                       <SpinnerButton
                        :loading="isLoading"
                        @click="handleSubmit"
                        >
                        Send Message
                        </SpinnerButton>
                    </div>

                    </div>
                </form>
                <!-- Form End -->
              </div>
          </div>

          <!--Contact Info Row Start-->
          <div class="row contact-info mb-70">

              <!--Contact Info Item-->
              <div class="col-md-4 info-item" v-for="(info, i) in contactInfo" :key="i">
                  <span class="icon"><i :class="info.icon"></i></span>
                  <h5><a href="mailto:example@example.com">{{ info.description }}</a></h5>
              </div>
          </div>
          <!--Contact Info Row End-->
      </div>
      <!--Google Map Start-->
      <div class="google-map">
          <div id="map" data-latitude="-37.817214" data-longitude="144.955925" data-zoom="15"></div>
      </div>
      <!--Google Map End-->
  </section>
</template>
