<template>
    <div>
        <CommonLayout>
            <div class="grid md:grid-cols-2 sm:grid-cols-1">
            <!-- <div class="product-grid grid sm:grid-cols-1 md:gap-4s"> -->
                <div
                    id="carouselExampleCrossfade"
                    class="carousel slide carousel-fade relative grid"
                    data-bs-ride="carousel"
                    >
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        >
                        </button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCrossfade"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        >
                        </button>
                    </div>
                    <div class="carousel-inner w-full overflow-hidden">
                        <div class="carousel-item active float-left w-full">
                            <img
                                src="../assets/img/ratio-six/ratio6-black-A3_1.webp"
                                class="block w-3/4"
                                alt="1"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="../assets/img/ratio-six/ratio6-black-A3_2.webp"
                                class="block w-3/4"
                                alt="2"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="../assets/img/ratio-six/ratio6-black-A3_3.webp"
                                class="block w-3/4"
                                alt="3"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide="prev"
                    >
                        <span class="material-icons text-black">navigate_before</span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide="next"
                    >
                        <span class="material-icons text-black">navigate_next</span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <!-- <div class="flex flex-grow">
                    <img src="../assets/img/ratio_six_detail.jpg" alt="item_image">
                </div> -->
                <div class="cream-white px-8 flex flex-grow flex-col gap-2">
                    <h1 class="xl:text-3xl xl:mb-6 lg:text-2x pt-4">Ratio Six</h1>
                    <div class="mb-4">$365.00</div>
                    <div class="mb-6">
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star</span>
                        <span class="material-icons">star_border</span>
                    </div>
                    <hr class="w-4/6"/>
                    <div class="mb-4">
                        <p class="w-7/12">Thanks to Ratio Six, world-class coffee is more accessible than ever. Engineered with the brewing precision of the Ratio Eight, the Six offers the one-button convenience of its bigger sibling with a leaner form and lighter price.</p>
                    </div>
                    <div class="special-font uppercase mb-2"><span class="material-icons md-icon-size">water_drop</span>BPA-free water tank</div>
                    <div class="special-font uppercase mb-2"><span class="material-icons md-icon-size">flag</span>Designed in Portland, Oregon</div>
                    <div class="special-font uppercase mb-2"><span class="mb-8 material-icons md-icon-size">workspace_premium</span>SCA Certified Home Brewer Award</div>
                    <div class="lg:w-2/5 mb-6">
                        <a href="#">
                            <div class="border border-green-900 px-11 py-3 text-center hover:bg-green-900 whitespace-nowrap hover:text-white text-green-900">
                                Add to Cart
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </CommonLayout>
    </div>    
</template>

<script setup>
import CommonLayout from '../components/CommonLayout.vue';
</script>

<style>
.product-grid {
    display: grid;
    grid-template-columns: 0.60fr 0.40fr;
    gap: 1.5rem;
}

.md-icon-size {
    position: relative;
    top: 0.4rem;
    margin-right: 0.5rem;
}
</style>