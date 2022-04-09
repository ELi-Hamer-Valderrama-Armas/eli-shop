<template>
  <div class="overflow-hidden">
    <div class="row">
      <CardItem
        v-for="producto in productosList"
        :producto="producto"
        :key="producto.id"
        v-show="category == 'all' || producto.category == category"
      />
    </div>
  </div>
</template>
<script>
import CardItem from "@/components/CardItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    CardItem,
  },
  props: {
    category: String,
  },
  methods: {
    ...mapActions({ fetchData: "fetchData" }),
  },
  computed: {
    productosList() {
      return this.$store.state.CartModule.productos.filter((item) =>
        this.$store.state.CartModule.sale
          ? item.price < this.$store.state.CartModule.highPrice && item.sale
          : item.price < this.$store.state.CartModule.highPrice
      );
    },

    ...mapGetters({
      // productosList: "productosList",
      productosInStock: "productosInStock",
    }),
  },
  created() {
    this.fetchData();
  },
};
</script>
<style>
body {
 /* background-color: #f6f7f9;*/
  background-color: #eaf2e3;
}
</style>