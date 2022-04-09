<template>
  <div class="col-lg-4 col-sm-6">
    <div class="card">
      <div class="product-item">
        <div class="text-center product">
          <img
            :src="require(`@/assets/static/images/${producto.img}`)"
            :alt="`imagen de ${producto.title}`"
          />
          <ul
            class="
              d-flex
              align-items-center
              justify-content-center
              list-unstyled
              icons
            "
          >
            <li
              class="icon mx-2"
              @click="
                $router.push({ name: 'Producto', params: { id: producto.id } })
              "
            >
              <fa icon="fas fa-expand"></fa>
            </li>
            <li class="mx-2">
              <button
                class="btn icon"
                :disabled="producto.inventory < 1"
                @click="addProductToCart(producto)"
              >
                <fa icon="fas fa-cart-plus"></fa>
              </button>
            </li>
          </ul>
          <div
            class="tag bg-disc"
            v-if="producto.sale && producto.inventory > 0"
          >
            Oferta 10%
          </div>
          <div class="tag bg-red" v-if="producto.inventory < 1">Sin stock</div>
        </div>
      </div>

      <div class="title pt-4 pb-1">{{ producto.title }}</div>
      <div class="d-flex flex-row align-content-center justify-content-center">
        <Rating :value.sync="producto.valoration"></Rating>
      </div>
      <div
        class="d-flex flex-row justify-content-center align-items-center mt-2"
      >
        <span >
          <b>S/ {{ producto.price }}</b>
        </span>
        <div v-if="producto.sale" class="mx-2">
          <small class="disc-price text-muted mx-2"
            >S/ {{ (producto.price * 10) / 100 + producto.price }}</small
          >
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
    ...mapActions({
      addProductToCart: "addProductToCart",
    }),
  },
};
</script>
<style lang="css" scoped>
.card {
  border: none;
  padding: 15px;
  margin-bottom: 10px;
}

.card .product-item .product {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.card .product-item .product img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .product-item .product .icons .icon {
  width: 40px;
  height: 40px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.6s ease;
  transform: rotate(180deg);
  cursor: pointer;
}
.card .product-item .tag {
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 500;
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0 0.4rem;
  border-radius: 5px;
}

.card .product-item .product .icons .icon:hover {
  background-color: #91eced;
  color: #fff;
}

.card .product-item .product .icons .icon:nth-last-of-type(3) {
  transition-delay: 0.2s;
}

.card .product-item .product .icons .icon:nth-last-of-type(2) {
  transition-delay: 0.15s;
}

.card .product-item .product .icons .icon:nth-last-of-type(1) {
  transition-delay: 0.1s;
}

.card .product-item:hover .product .icons .icon {
  transform: translateY(-60px);
}
.disc-price {
  text-decoration: line-through;
}
.acti-price {
  color: #fa9696;
}
.bg-red {
  background-color: #ff637d;
  color: #fff;
}
.bg-disc {
  background-color: #f5b5fc;
  color: #fff;
}

.bg-star {
  color: #f0f696 !important;
  border-color: #f0f696 !important;
}
button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>