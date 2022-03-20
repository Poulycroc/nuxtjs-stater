<template>
  <section>
    <div
      v-if="error"
      class="flex bg-red-100 rounded-lg p-4 mb-4 text-sm text-red-700"
      role="alert"
    >
      <svg
        class="w-5 h-5 inline mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <div>
        {{ error }}
      </div>
    </div>
    <form method="post" @submit.prevent="login">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            email
          </label>
          <input
            id="email"
            v-model="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            type="email"
            placeholder="email"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            id="password"
            v-model="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker mb-3"
            :class="{ 'border-red': !hasPassword }"
            type="password"
            placeholder="******************"
          />
          <p v-if="!hasPassword" class="text-red text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="button"
            @click="login"
          >
            Sign In
          </button>
          <nuxt-link
            to="/register"
            class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          >
            S'inscrire
          </nuxt-link>
        </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'LoginPage',
  auth: 'guest',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      hasPassword: true,
    }
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          },
        })

        this.$router.push('/secret')
      } catch (e) {
        this.error = e?.response?.data.message
      }
    },
  },
}
</script>
