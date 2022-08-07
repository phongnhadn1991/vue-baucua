<template>
  <div class="list-choice_item" @click="getMoney(product.id)" :value="product.id">
    <div class="thumb">
      <img :src="product.image" />
    </div>
    <div class="money">Cược: {{ product.money }}$</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { bus } from '../../main'
export default {
  name: "ItemProduct",

  data() {
    return {};
  },

  props: {
    product: {
      type: Object,
      request: true,
    },
  },

  mounted() {},

  computed: {
    ...mapState({
        bank: (state) => state.bank,
    })
  },

  methods: {
    getMoney(productId) {
        if(this.bank > 0) {
            bus.$emit('update-money', productId)
        }else{
            console.log('No Money Bank');   
        }
    },
  },
};
</script>

<style scoped>
</style>