<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-2 fixed-top">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand name">
        <img
          :src="require(`@/assets/logo.png`)"
          alt="logo"
          height="40px"
          width="40px"
        />
      </router-link>

      <div class="order-lg-2 nav-btns text-center">
        <button
          type="button"
          class="btn position-relative"
          role="button"
          data-bs-toggle="dropdown"
        >
          <fa class="bg-cart" icon="fas fa-shopping-bag" size="lg"></fa>
          <span
            v-if="noItems > 0"
            class="
              position-absolute
              top-0
              start-100
              translate-middle
              badge
              rounded-pill
              bg-count
            "
            >{{ noItems }}</span
          >
        </button>

        <div class="dropdown-menu dropdown-menu-end">
          <div v-if="noItems > 0" class="shopping-cart">
            <div class="shopping-header d-flex justify-content-between">
              
                <span>Tu carrito</span>

              <span class="">Total: S/ {{ Total }}</span>

            </div>

            <div class="drop-menu">
              <div class="row" v-for="producto in productos" :key="producto.id">
                <div class="col-10 border-0 d-flex align-items-center">
                  <div class="row pt-2 pb-2 d-flex align-items-center">
                    <div class="col-4 d-flex align-items-center">
                      <img
                        :src="require(`@/assets/static/images/${producto.img}`)"
                        :alt="`imagen de ${producto.title}`"
                        width="70px"
                        height="70px"
                        class="img-fluid rounded"
                      />
                    </div>
                    <div class="col-8 d-flex align-items-center">
                      <div class="ml-3 d-inline-block align-middle">
                        <div class="d-inline-block align-middle">
                          {{ producto.title }}
                        </div>
                        <h6 class="text-muted d-block">
                          {{ producto.quantity }} x S/ {{ producto.price }}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-2 d-flex justify-content-center align-items-center"
                >
                  <button
                    @click="removeItemProductToCart(producto)"
                    class="btn"
                  >
                    <fa class="bg-remove" icon="fas fa-xmark"></fa>
                  </button>
                </div>
              </div>
            </div>

            <div class="d-flex justify-content-between px-1 pt-3 bg-red">
              <div>
                <span class="vaciar" @click="checkout">
                  <fa icon="far fa-trash-can" class="space"></fa>
                  <span class="d-inline-block text-left text-uppercase"> Vaciar </span>
                </span>
              </div>
              <div>
                <router-link to="/carrito" class="verificar">
                  <span class="space text-uppercase">Verificar</span>
                  <fa icon="long-arrow-right"></fa>
                </router-link>
              </div>
            </div>
          </div>
          <div v-else class="card-body cart">
            <div class="col-sm-12 empty-cart-cls text-center">
              <img
                :src="require(`@/assets/static/images/nocart.png`)"
                alt="cart"
                width="90"
                height="90"
                class="img-fluid mb-2 mr-3"
              />
              <h5 class="mb-3">Tu carrito esta vacío</h5>
               <router-link to="/" class="btn-continuar text-uppercase m-3">
            Continuar comprando
          </router-link>
            </div>
          </div>
        </div>
      </div>
      <button
        class="navbar-toggler border-0"
        type="button "
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul class="navbar-nav mx-auto text-center">
          <li v-for="(item, i) in menuItem" :key="i" class="nav-item px-2 py-2">
            <router-link
              class="nav-link text-dark text-uppercase"
              :to="item.route"
              :class="{ active: $route.name === item.name }"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TopNavigation",
  data() {
    return {
      menuItem: [
        { name: "Inicio", route: "/" },
        { name: "Celulares", route: "/Celulares" },
        { name: "Relojes", route: "/relojes" },
        { name: "Carrito", route: "/carrito" },
      ],
    };
  },
  computed: {
    noItems() {
      return this.$store.state.CartModule.cartItems;
    },
    ...mapGetters({
      productos: "cartProductos",
      Total: "cartTotal",
    }),
  },
  methods: {
    ...mapActions({
      removeItemProductToCart: "removeItemProductToCart",
      checkout: "checkout",
    }),
  },
};
</script>
<style lang="css" scoped>
.navbar {
  -webkit-box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
  box-shadow: 0 3px 9px 3px rgba(0, 0, 0, 0.1);
}

.nav-link:hover {
  color: #ff637d !important;
}
.bg-main {
  background-color: #ff637d !important;
}
.nav-link.active {
  color: #ff637d !important;
}
a{
  text-decoration: none;
}
.dropdown-menu {
  width: 300px;
}

@media (max-width: 990px) {
  .dropdown-menu {
    width: 300px;
    position: absolute;
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
}
.shopping-cart {
  padding: 20px;
}
.shopping-header {
  border-bottom: 1px solid #e8e8e8e8;
  padding-bottom: 5px;
}

.drop-menu {
  height: auto;
  max-height: 350px;
  overflow-x: hidden;
  padding-top: 15px;
}
.space {

  margin-right: 10px;
}
.bg-cart {
  color: #91eced !important;
  border-color: #91eced!important;
}
.bg-count {
  background-color: #91eced;
}

.bg-remove {
  color: #ff637d !important;
  border-color: #ff637d !important;
}
.bg-remove:hover {
  color: #ec4662 !important;
  
}
button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.vaciar{
  cursor: pointer;
  color:#ff637d ;
}
.vaciar:hover{
  color: #ec4662;
}
.verificar{
  cursor: pointer;
  color:#91eced ;
}
.verificar:hover{
  color: #39c7cc;
}
.btn-continuar {
  border: none;
  border-radius: 10px;
  background-color: #96f7d2;
  color: #fff;
  padding: 8px 15px;
  margin: 20px 0px;
  cursor: pointer;
}

.btn-continuar:hover {
  background-color: #39c7cc;
  color: #fff;
}
</style>