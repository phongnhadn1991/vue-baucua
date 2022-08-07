<template>
    <div>
        <div class="p-dish">
            <div class="p-dish_list">
                <div class="list-choice_item" v-for="product in productsChoice" :key="product.id" :value="product.id">
                    <div class="thumb">
                        <img :src="product.image" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-button_play" @click="playNewGame">
            <img src="../../../public/image_baucua/soc.png" />
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "ChoiceProduct",

  data() {
    return {};
  },
  created(){
    this.firstLoadGame();
  },
  mounted() {},
  computed: {
    ...mapState(['productsChoice']),
  },
  methods: {
    playNewGame() {
        this.$store.commit('PLAY_NEW_GAME');
    },
    firstLoadGame() {
        this.$store.commit('FIRTS_LOAD_GAME');
    }
  },
  watch: {
  }
};
</script>

<style scoped>
</style>