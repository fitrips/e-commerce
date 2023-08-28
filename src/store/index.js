import { createStore } from "vuex";
import auth from "./modules/auth";
import brands from "./modules/brands";
import category from "./modules/category";
import product from "./modules/product";
import cart from "./modules/cart";
import order from "./modules/order";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        category,
        product,
        cart,
        order,

    },
});

export default store;