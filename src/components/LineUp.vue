<template>
    <section id="line-up" class="lg:mt-16 mt-4">
        <div class="p-7 font-bold text-3xl mb-2">
            <p class="2xl:px-80 md:px-40 text-center lg:text-3xl text-2xl mb-4">Meet the Flavor Brew line-up.</p>
            <p class="2xl:px-80 md:px-40 text-gray-700 text-base text-center">
                Every Ratio machine is inspired by the beautiful ritual of manual brewing, often called pour over. Many of us love the taste of pour over but not the attention to detail and precision required for a consistent result. Enter Ratio.
            </p>
        </div>
        <div class="lg:px-32 p-7 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            <!-- Product 1-->
            <div class="overflow-hidden">
                <div class="zoom-out-box">
                    <img class="w-10/12" src="../assets/img/rt6-black-A3_360x.webp" alt="rt6-black">
                </div>
                <div class="mt-4">
                    <h5 class="text-center">SCA AWARD WINNER</h5>
                    <div class="font-bold mb-6 text-xl text-center">Ratio Six</div>
                    <div class="grid place-content-center">
                        <router-link :to="{ name: 'ProductViewB'}">
                            <div class="border border-green-900 px-11 py-3 text-center hover:bg-green-900 whitespace-nowrap hover:text-white text-green-900">
                                Shop Six
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- Product 2-->
            <div class="overflow-hidden">
                <div class="zoom-out-box">
                    <img class="w-10/12" src="../assets/img/rt8-white-walnut-glass-.webp" alt="rt8-white">
                </div>
                <div class="mt-4">
                    <h5 class="text-center">OUR BEST-SELLING ORIGINAL</h5>
                    <div class="font-bold mb-6 text-xl mb-2 text-center">Ratio Eight</div>
                    <div class="grid place-content-center">
                        <router-link :to="{ name: 'ProductViewB'}">
                            <div class="border border-green-900 px-11 py-3 text-center hover:bg-green-900 whitespace-nowrap hover:text-white text-green-900">
                                Shop Eight
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <!-- Product 3-->
            <div class="overflow-hidden">
                <div class="zoom-out-box">
                    <img class="w-10/12" src="../assets/img/rt-silver-parawood-thermal-A1_360x.webp" alt="rt-silver">
                </div>
                <div class="mt-4">
                    <h5 class="text-center">THE COMPLETE PACKAGE</h5>
                    <div class="font-bold mb-6 text-xl text-center">Ratio Eight Thermal Set</div>
                    <div class="grid place-content-center">
                        <router-link :to="{ name: 'ProductView', params: { data: productData } }">
                            <div class="border border-green-900 px-11 py-3 text-center hover:bg-green-900 whitespace-nowrap hover:text-white text-green-900">
                                Shop Thermal Set
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

let productData = 
    {
        id: 3,
        imgUrl: 'rt6-black-A3_360x.webp',
        productName: 'Ratio Six',
        reviewCount: 260,
        price: 365
    };

console.log(productData);

</script>

<style>

</style>