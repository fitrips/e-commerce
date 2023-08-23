import { createStore } from "vuex";
import auth from "./modules/auth";
import brands from "./modules/brands";
import category from "./modules/category";
import product from "./modules/product"


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        auth,
        brands,
        category,
        product
    },
});

export default store;