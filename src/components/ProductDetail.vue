<template>
  <div class="container-fluid px-lg-4 px-xl-5 contentDetail">
    <div class="row d-flex justify-content-center">
      <div class="col-12">
        <div class="card-detail">
          <div class="row">
            <div class="col-md-6">
              <div class="images p-3">
                <div class="text-center p-4">
                  <img
                    ref="image"
                    :src="require(`@/assets/static/images/${producto.img}`)"
                    :alt="`imagen de ${producto.title}`"
                    width="350"
                  />
                </div>
                <div class="thumbnail text-center">
                  <img
                    @click="
                      change_image(
                        require(`@/assets/static/images/${producto.img}`)
                      )
                    "
                    :src="require(`@/assets/static/images/${producto.img}`)"
                    :alt="`imagen de ${producto.title}`"
                    width="70"
                  />
                  <img
                    @click="
                      change_image(
                        require(`@/assets/static/images/${producto.img1}`)
                      )
                    "
                    :src="require(`@/assets/static/images/${producto.img1}`)"
                    :alt="`imagen de ${producto.title}`"
                    width="70"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="product p-4">
                <div class="d-flex align-items-center">
                  <div class="d-flex align-items-center">
                    <router-link to="/"
                      ><fa class="bg-back" icon="fa fa-long-arrow-left"></fa
                    ></router-link>
                  </div>
                </div>
                <div class="mt-4 mb-3">
                  <span class="text-uppercase text-muted brand">{{
                    producto.category
                  }}</span>
                  <h5 class="text-uppercase">{{ producto.title }}t</h5>
                  <div class="d-flex flex-row align-items-center">
                    <span
                      >Precio:
                      <b :class="{ 'act-price': producto.sale }">
                        S/ {{ producto.price }}</b
                      >
                    </span>
                    <div v-if="producto.sale" class="mx-2">
                      <small class="dis-price text-muted mx-2"
                        >S/
                        {{
                          (producto.price * 10) / 100 + producto.price
                        }}</small
                      >
                      <span class="bg-purple">oferta 10%</span>
                    </div>´
                    
                    <div v-if="producto.inventory < 1" class="mx-2">
                      
                      <span class="act-price">Sin stock</span>
                    </div>
                  </div>
                </div>
                <p class="about">
                  {{ producto.description }}
                </p>
                <span class="d-flex flex-row align-items-center">
                  <span>
                    Disponibles: <b> {{ producto.inventory }}</b>
                  </span>
                </span>
                <div class="sizes mt-2">
                  <div
                    class="
                      d-flex
                      flex-row
                      align-content-center
                      justify-content-center
                    "
                  >
                    <Rating :value.sync="producto.valoration"></Rating>
                  </div>
                </div>
                <div
                  class="d-flex mt-4 align-items-center justify-content-center"
                >
                  <button
                    :disabled="producto.inventory < 1"
                    @click="addProductToCart(producto)"
                    class="btn btn-danger text-uppercase px-2"
                  >
                    Añadir al carrito
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Rating from "@/components/Star.vue";
export default {
  components: {
    Rating,
  },
  props: {
    producto: Object,
  },
  methods: {
    change_image(image) {
      this.$refs.image["src"] = image;
    },
    ...mapActions({
      addProductToCart: "addProductToCart",
    }),
  },
};
</script>
<style lang="css" scoped>
.card-detail {
  border: none;
  padding: 15px;
  margin-bottom: 10px;
  background: #fff;
}

.contentDetail {
  margin-top: 6rem;
}

.brand {
  font-size: 13px;
}

.act-price {
  color: #fa9696;
}

.dis-price {
  text-decoration: line-through;
}

.bg-purple {
  color: #f5b5fc !important;
  border-color: #f5b5fc !important;
}

.color {
  margin-bottom: 10px;
}

.btn-danger {
  background-color: #91eced!important;
  border-color: #91eced !important;
 
}

.btn-danger:hover {
  background-color: #39c7cc !important;
  border-color: #39c7cc !important;
}

.btn-danger:focus {
  box-shadow: none;
}

.bg-back {
  color: #ff637d  !important;
  border-color: #ff637d !important;
}
</style>