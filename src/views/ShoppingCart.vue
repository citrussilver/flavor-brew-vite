<template>
    <CommonLayout>
        <div>
            <div class="text-center font-bold text-3xl mb-9">Cart</div>
            <div>
                <hr/>
                <div v-if="cart">
                    <div v-for="item in cart" :key="item.id">
                        {{ item.productName }}
                    </div> 
                </div>
                <hr/>
            </div>
        </div>
    </CommonLayout>
</template>

<script>
import CommonLayout from '../components/CommonLayout.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {

    components: {
        CommonLayout
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const cart = computed(() => store.state.shoppingCart.items);

        console.log(store.state.shoppingCart.items[0].productName);
    
        return {
            cart,
        };
    },

}
</script>

<style>

</style>