<template>
    <div class="overflow-hidden">
        <router-link :to="{ name: 'ProductViewB' }">
            <div class="zoom-out-box flex items-center justify-center">
                <img class="w-10/12" :src="getImageUrl(props.productData.imgUrl)" alt="rt6-black">
            </div>
            <div class="mt-4 grid place-content-center">
                <div class="font-bold mb-2 text-xl text-center">{{ props.productData.productName }}</div>
                <div class="mb-2 flex-centered">
                    <span class="material-icons">star</span>
                    <span class="material-icons">star</span>
                    <span class="material-icons">star</span>
                    <span class="material-icons">star</span>
                    <span class="material-icons">star_border</span>
                </div>
                <div class="mb-2 text-center">
                    ({{ props.productData.reviewCount }} Reviews)
                </div>
                <div class=" text-center">
                    ${{ props.productData.price }}.00
                </div>
            </div>
        </router-link>    
    </div>
</template>

<script setup>
const props = defineProps(
    {
        productData: {
            imgUrl: String,
            productName: String,
            reviewCount: Number,
            starCount: Number,
            price: Number
        }
    }
);

function getImageUrl (filename) {
    return new URL(`../assets/img/store/${filename}`, import.meta.url).href;
}
</script>

<style>

</style>