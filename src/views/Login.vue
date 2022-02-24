<template>
  <div>
    <div>
      <!-- <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"> -->
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Log in to your account</h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Or
        <router-link :to="{name: 'Register'}" class="font-medium text-green-700 hover:text-green-600">
          Register for free
        </router-link>
      </p>
    </div>
    <form class="mt-8 space-y-6" @submit="login">
      <div v-if="errorMsg" class="py-3 px-5 bg-red-500 text-white rounded flex justify-between">
        <div class="flex items-center">{{ errorMsg }}</div>
        <div @click="errorMsg = ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
      </div>
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autocomplete="email" required 
            v-model="user.email"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
            placeholder="Email address"
          >
        </div>
        <div>
          <label for="password" class="sr-only">Password</label>
          <input id="password" name="password" type="password" autocomplete="current-password" required 
            v-model="user.password"
            class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" 
            placeholder="Password"
          >
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" 
            v-model="user.remember"
            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            >
          <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>
      </div>

      <div>
        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-900 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            <!-- Heroicon name: solid/lock-closed -->
            <svg class="h-5 w-5 text-green-800 group-hover:text-green-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
            </svg>
          </span>
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

import Header from '../components/Header.vue';

const router = useRouter();

const user = {
  email: '',
  password: '',
  remember: false
}

let errorMsg = ref('')

function login(ev) {
  ev.preventDefault();
  
  store
    .dispatch('login', user)
    .then(() => {
      router.push({
        name: 'Dashboard',
      });
    })
    .catch(err => {
      console.log(`err.response.data.error: ${err.response.data.error}`)
      errorMsg.value = err.response.data.error
    })
}
</script>

<style>

</style>