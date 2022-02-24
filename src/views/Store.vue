<template>
    <CommonLayout>
        <div>
            <div class="text-center font-bold text-3xl mb-9">Shop</div>
            <div class="lg:px-28 md:px-8 px-8 grid grid-cols-1">
                <p class="text-gray-700 text-base text-center">
                    You want options? We’ve got options. From the luxe Ratio Eight and its conical physique to the no-nonsense Six, there’s a Ratio that matches your taste and temperament. Slow drinker? Add a thermal carafe. You want the form of the Six with the carafe of the Eight? Do it. Here’s everything you could ever want. 
                </p>
            </div>
            <div class="lg:px-32 p-7 grid grid-cols-2 md:grid-cols-3 gap-5">
                <GridProduct v-for="product in productData" :key="product.id" :productData="product"/>
            </div>
        </div>
    </CommonLayout>
</template>

<script setup>
import CommonLayout from '../components/CommonLayout.vue';
import GridProduct from '../components/GridProduct.vue';

let productData = [
    {
        id: 1,
        imgUrl: 'rt8-white-walnut-glass-A2_360x.webp',
        productName: 'Ratio Eight',
        starCount: 4,
        reviewCount: 104,
        price: 565
    },
    {
        id: 2,
        imgUrl: 'rt-silver-parawood-thermal-A1_360x.webp',
        productName: 'Ratio Eight Thermal Set',
        reviewCount: 22,
        price: 795
    },
    {
        id: 3,
        imgUrl: 'rt6-black-A3_360x.webp',
        productName: 'Ratio Six',
        reviewCount: 260,
        price: 365
    },
    {
        id: 4,
        imgUrl: 'rt-eight-thermal-carafe-matte-black-with-dripper_360x.webp',
        productName: 'Ratio Eight Thermal Carafe',
        reviewCount: 83,
        price: 125
    },
    {
        id: 5,
        imgUrl: 'black-encore-grinder-three-quarter-viewAccessories_360x.webp',
        productName: 'Encore Coffee Grinder',
        reviewCount: 29,
        price: 169.95
    },
    {
        id: 6,
        imgUrl: 'Ode-Coffee-Grinder-01-Matte-Black-01_360x.webp',
        productName: 'Ode Coffee Grinder',
        reviewCount: 29,
        price: 169.95
    }
];

</script>

<style>

</style>