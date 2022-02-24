import {createStore} from 'vuex'
 
const store = createStore({
    state: {
        shoppingCart: {
            items: [
                {
                    id: 1,
                    productName: 'ratio eight',
                    quantity: 10,
                },
                {
                    id: 2,
                    productName: 'ratio six',
                    quantity: 0,
                },
                {
                    id: 3,
                    productName: '',
                    quantity: 0,
                },
            ]
        }
    },
    getters: {},
       actions: {},
    mutations: {
        CART_ADD_ITEM: (state, data) => {
            state.shoppingCart.items = data;
        }
    },
    modules: {},
})

export default store;