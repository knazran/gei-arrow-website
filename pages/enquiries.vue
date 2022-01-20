<template>
  <div class="bg-gei-secondary-100">
    <div
      class="
        min-h-screen
        py-12
        bg-scroll
        rotate-180
        lg:bg-contain
        bg-no-repeat
        lg:bg-right
        bg-top
      "
    >
      <PageSection>
        <PageTitle
          description="We are here because we care for you. Keep in touch with us!"
          title="Contact Us"
        />

        <div class="flex py-8">
          <div v-if="isSignedUp" class="w-full max-w-lg">
            <h4 class='text-lg text-gei-primary-500'>Thank you - we'll be in touch shortly.</h4>
          </div>
          <form
            v-else
            name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
            class="w-full max-w-lg"
            @submit.prevent="handleSubmit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="
                    block
                    tracking-wide
                    text-gei-primary-500 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  Name
                </label>

                <input
                  id="name"
                  v-model="name"
                  name="name"
                  placeholder="Your name :)"
                  :class="errorsName ? 'error-border' : ''"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gei-secondary-200
                    text-gei-primary-500
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  type="text"
                  @keypress="removeErrorName($event)"
                />
                <p v-if="errorsName" class="text-red-500">
                  Please correct the following error(s): {{ errorsName }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="
                    block
                    tracking-wide
                    text-gei-primary-500 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  E-mail
                </label>
                <input
                  id="email"
                  v-model="email"
                  name="email"
                  :class="errorsEmail ? 'error-border' : ''"
                  placeholder="jane@example.com"
                  class="
                    appearance-none
                    block
                    w-full
                    bg-gei-secondary-200
                    text-gei-primary-500
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                  "
                  type="email"
                  @keypress="removeErrorEmail($event)"
                />
                <p v-if="errorsEmail" class="text-red-500">
                  Please correct the following error(s): {{ errorsEmail }}
                </p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="
                    block
                    tracking-wide
                    text-gei-primary-500 text-base
                    font-bold
                    mb-2
                  "
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  :class="errorsMessage ? 'error-border' : ''"
                  class="
                    no-resize
                    appearance-none
                    block
                    w-full
                    bg-gei-secondary-200
                    text-gei-primary-500
                    border border-gray-200
                    rounded
                    py-3
                    px-4
                    mb-3
                    leading-tight
                    focus:outline-none
                    focus:bg-white
                    focus:border-gray-500
                    h-48
                    resize-none
                  "
                  @keypress="removeErrorMessage($event)"
                ></textarea>
                <p v-if="errorsMessage" class="text-red-500">
                  Please correct the following error(s): {{ errorsMessage }}
                </p>
              </div>
            </div>
            <div class="md:flex md:items-center">
              <div class="md:w-2/3">
                <input
                  class="
                    form-button
                    rounded-lg
                    bg-gei-tertiary-500
                    text-center text-white
                    w-32
                    py-1
                    cursor-pointer
                    hover:font-bold
                    hover:bg-mau-secondary-950
                  "
                  type="submit"
                  value="Submit"
                />
              </div>
              <div class="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </PageSection>
    </div>
  </div>
</template>

<script>
import TextureGreen from '~/static/img/textures/texture-green-2.png'

export default {
  data() {
    return {
      bgGreen: TextureGreen,
      isSignedUp: false,
      name: '',
      email: '',
      message: '',
      errorsName: '',
      errorsEmail: '',
      errorsMessage: '',
    }
  },
  computed: {
    getBackgroundImage() {
      return `url(${this.bgGreen})`
    },
  },
  methods: {
    async handleSubmit (e) {
      if (
        this.name &&
        this.message &&
        this.email &&
        this.validEmail(this.email)
      ) {
        // this.$refs.form.submit()
        // return true
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: this.encode({ 'form-name': 'contact', 'name': this.name, 'email': this.email, 'message': this.message }),
        });

        this.isSignedUp = true;
      }
      this.errorsName = ''
      this.errorsEmail = ''
      this.errorsMessage = ''

      if (!this.name) {
        this.errorsName = 'Name required.'
      }
      if (!this.email) {
        this.errorsEmail = 'Email required.'
      } else if (!this.validEmail(this.email)) {
        this.errorsEmail = 'Email Invalid.'
      }
      if (!this.message) {
        this.errorsMessage = 'Message required.'
      }

      e.preventDefault()
    },
    encode(data) {
      return Object.keys(data)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
        .join('&');
    },
    validEmail (email) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    removeErrorName ($event) {
      this.errorsName = ''
    },
    removeErrorEmail ($event) {
      this.errorsEmail = ''
    },
    removeErrorMessage ($event) {
      this.errorsMessage = ''
    },
  },
}
</script>

<style scoped>
.error-border {
  border-color: red;
}
</style>