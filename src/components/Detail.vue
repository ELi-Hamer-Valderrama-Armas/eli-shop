<template>
    <ProductDetail :producto="producto[0]"/>
</template>
<script>
import ProductDetail from "@/components/ProductDetail.vue";
export default {
    components:
    {
        ProductDetail
    },
    props: {
    id: Number,
  },
  computed: {
    producto() {    
     return this.$store.state.CartModule.productos.filter(item => 
           item.id === this.id
      );
       
    }
  }
    
}
</script>