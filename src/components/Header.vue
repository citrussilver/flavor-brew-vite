<template>
  <div>
      <div id="sticky-header-wrap">
        <header id="site-header">
          <div class="page-width lg:px-24 md:px-12">
            <div id="nav-items" class="flex justify-between">
              <!-- <div class="m-5"><router-link :to="{ name: 'Main' }"><img :src="getImageUrl()" alt="logo"></router-link></div> -->
              <div class="special-font flex items-center m-4 lg:text-3xl md:text-2xl">
                <router-link :to="{ name: 'Main' }">
                  flavor brew
                  <!-- <img :src="getImageUrl()" alt="logo"> -->
                </router-link>
              </div>
              <div>
                <ul class="flex m-4">
                  <router-link :to="{name: 'Store'}"><li class="lg:m-4 m-2 hover:text-green-900">Shop</li></router-link>
                  <router-link :to="{name: 'Journal'}"><li class="lg:m-4 m-2 hover:text-green-900">Journal</li></router-link>
                  <router-link :to="{name: 'About'}"><li class="lg:m-4 m-2 hover:text-green-900">About</li></router-link>
                </ul>
              </div>
              <div id="site-nav-icons" class="flex items-center m-4">
                <router-link :to="{name: 'Login'}"><span class="material-icons lg:m-4 m-2 hover:text-green-900">person</span></router-link>
                <router-link :to="{name: 'Store'}"><span class="material-icons lg:m-4 m-2 hover:text-green-900">search</span></router-link>
                <router-link :to="{name: 'ShoppingCart'}"><span class="material-icons lg:m-4 m-2 hover:text-green-900">shopping_cart</span></router-link>
              </div>
            </div>
          </div>
        </header>
      </div>
  </div>
</template>

<script setup>
let targetImg = 'flavor_brew-logo-black_140x.webp';

function getImageUrl() {
  return new URL(`../assets/img/${targetImg}`, import.meta.url).href;
}
</script>

<style>
</style>