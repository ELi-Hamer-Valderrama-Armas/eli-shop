<template>
  <div class="card">
    <div class="d-flex justify-content-center align-items-center">
      <span class="views">Maximo precio S/ {{ princeRange }}</span>
    </div>
    <div class="mt-3">
      <input
        type="range"
        class="form-range custom-range"
        id="princerange"
        :value="princeRange"
        :min="min"
        :max="max"
        step="0.1"
        @input="updateHighPrice($event)"
      />
      <div class="d-flex justify-content-between align-items-center">
        <span class="text-sm">S/ {{ min }}</span>
        <span class="text-sm">S/ {{ max }}</span>
      </div>
    </div>

    <span class="border-bottom mt-4 mb-4"></span>
    <div class="d-flex justify-content-center align-items-center">
      <span class="views"><b>Super Venta</b> </span>
    </div>
    <div class="d-flex justify-content-center align-items-center mt-3">
      <label>Mostrar solo artículos en oferta</label>
    </div>
    <div class="form-check form-switch d-flex justify-content-center mt-2">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="check"
        @change="updateSale"
        id="flexSwitchCheckDefault"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      min: 0,
      max: 2000,
      check: this.checked,
    };
  },
  computed: {
    princeRange() {
      return this.$store.state.CartModule.highPrice;
    },
    checked() {
      return this.$store.state.CartModule.sale;
    },
  },
  methods: {
    updateHighPrice(event) {
      return this.$store.commit("setHighPrice", event.target.value);
    },
    updateSale() {
      this.$store.commit("toggleSale");
    },
  },
};
</script>
<style lang="css" scoped>
.card {
  border: none;
  padding: 15px;
  margin-bottom: 10px;
}
.custom-range::-webkit-slider-thumb{
  background:#ff637d ;
}
.custom-range::-moz-range-thumb{
 background:#ff637d ;
}
.custom-range::-ms-thumb{
  background:#ff637d ;
}
.form-check-input:checked{
  background-color:#ff637d;
  border-color: #ff637d;
}

</style>