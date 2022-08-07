<template>
    <div class="p-list-choice">
            <ItemProduct :product="product" v-for="product in products" :key="product.id" />
        </div>
</template>

<script>

import { mapState } from 'vuex';
import ItemProduct from './ItemProduct.vue';
export default {
    name: "ListProduct",
    data() {
        return {};
    },
    mounted() { 
    },
    computed: {
        ...mapState({
            products: state => state.products
        })
    },
    methods: {
    },
    components: { ItemProduct }
};
</script>

<style scoped>
</style>