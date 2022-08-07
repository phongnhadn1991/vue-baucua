<template>
  <div class="l-game">
    <div class="p-heading">
      <h1>Game bầu cua</h1>
    </div>
    <div class="l-top">
      <div class="p-money">
        <p>
          Tiền thưởng: <span class="number">{{ bank }}</span
          ><span>$</span>
        </p>
      </div>
      <div class="p-button_replay" @click="playAgainGame">Chơi lại</div>
    </div>
    <div class="l-container">
      <div class="l-left">
        <ListProduct />
      </div>
      <div class="l-right">
        <ChoiceProduct />
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";
import ListProduct from "./ListProduct.vue";
import ChoiceProduct from "./ChoiceProduct.vue";
import { mapState } from "vuex";
export default {
  name: "ContainerGame",
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      bank: (state) => state.bank,
    }),
  },
  mounted() {
    this.getMoneyUpdate()
  },
  methods: {
    getMoneyUpdate() {
       bus.$on("update-money", (productId) => {
        if(this.bank > 0) {
            this.$store.commit('UPDATE_BANK',productId)
        }
      });
    },
    playAgainGame() {
        this.$store.commit('PLAY_AGAIN_GAME');
    }
  },
  components: { ListProduct, ChoiceProduct },
};
</script>

<style lang="postcss" scoped>
</style>