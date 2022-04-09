<template>
  <div class="page-holder">
    <div class="container-fluid px-lg-4 px-xl-5 contentShop">
      <div v-if="noItem > 0">
        <div class="row">
          <div class="col-lg-12">
            <div class="card-table">
              <div class="d-flex justify-content-between pb-2 px-2">
                <h4 class="heading">Carrito de compras</h4>
                <span>Productos: {{ noItem }}</span>
              </div>
              <div
                class="row p-2 border-top mx-2"
                v-for="producto in productos"
                :key="producto.id"
              >
                <div
                  class="
                    col-12 col-lg-4 col-sm-4
                    d-flex
                    justify-content-center
                    align-items-center
                    pb-2
                  "
                >
                  <div class="row">
                    <div
                      class="
                        col-lg-5 col-md-5 col-12
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <img
                        :src="require(`@/assets/static/images/${producto.img}`)"
                        :alt="`imagen de ${producto.title}`"
                        width="100px"
                        height="100px"
                        class="img-fluid rounded"
                      />
                    </div>
                    <div
                      class="
                        col-lg-7 col-md-7 col-12
                        d-flex
                        justify-content-center
                        align-items-center
                      "
                    >
                      <div class="d-inline-block">
                        {{ producto.title }}
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    col-12 col-lg-2 col-sm-2
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <h6 class="text-muted d-block">S/ {{ producto.price }}</h6>
                </div>

                <div
                  class="
                    col-12 col-lg-2 col-sm-2
                    d-flex
                    justify-content-center
                    align-items-center
                    pb-2
                  "
                >
                  <button class="btn" :disabled="producto.quantity <= 1">
                    <fa
                      @click="decreaseProductCart(producto)"
                      class="text-black"
                      icon="fa fa-minus-square"
                    ></fa></button
                  ><span>{{ producto.quantity }}</span>
                  <button class="btn">
                    <fa
                      @click="addProductToCart(producto)"
                      class="text-black"
                      icon="fa fa-plus-square"
                    ></fa>
                  </button>
                </div>

                <div
                  class="
                    col-12 col-lg-3 col-sm-3
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <h6 class="text-muted d-block">
                    S/ {{ producto.price * producto.quantity }}
                  </h6>
                </div>
                <div
                  class="
                    col-12 col-lg-1 col-sm-1
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                >
                  <button
                    @click="removeItemProductToCart(producto)"
                    class="btn"
                  >
                    <fa class="bg-removes" icon="fas fa-xmark"></fa>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="card-table">
              <div class="row">
                <div class="col-lg-3 radio-group">
                  <div
                    class="d-flex px-3 radio"
                    :class="{ gray: mastercard }"
                    @click="radio('mastercard')"
                  >
                    <img
                      class="pay"
                      :src="require(`@/assets/images/masterCard.jpg`)"
                    />
                    <p class="my-auto">Crédito</p>
                  </div>
                  <div
                    class="d-flex px-3 radio"
                    :class="{ gray: visa }"
                    @click="radio('visa')"
                  >
                    <img
                      class="pay"
                      :src="require(`@/assets/images/visa.jpg`)"
                    />
                    <p class="my-auto">Débito</p>
                  </div>
                  <div
                    class="d-flex px-3 radio mb-3"
                    :class="{ gray: paypal }"
                    @click="radio('paypal')"
                  >
                    <img
                      class="pay"
                      :src="require(`@/assets/images/paypal.jpg`)"
                    />
                    <p class="my-auto">PayPal</p>
                  </div>
                </div>
                <div class="col-lg-5">
                  <div class="row px-2">
                    <div class="form-group col-md-6 mt-2">
                      <label class="form-control-label">Titular</label>
                      <input
                        class="input"
                        type="text"
                        id="cname"
                        name="cname"
                        placeholder="Nombres apellidos"
                      />
                    </div>
                    <div class="form-group col-md-6 mt-2">
                      <label class="form-control-label">Número</label>
                      <input
                        class="input"
                        type="text"
                        id="cnum"
                        name="cnum"
                        placeholder="1111 2222 3333 4444"
                      />
                    </div>
                  </div>
                  <div class="row px-2">
                    <div class="form-group col-md-6 mt-2">
                      <label class="form-control-label">Vencimiento</label>
                      <input
                        class="input"
                        type="text"
                        id="exp"
                        name="exp"
                        placeholder="MM/YYYY"
                      />
                    </div>
                    <div class="form-group col-md-6 mt-2">
                      <label class="form-control-label">CVV</label>
                      <input
                        class="input"
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="***"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-lg-4 mt-2">
                  <div class="d-flex justify-content-between px-4">
                    <p class="mb-1 text-left">Sub total</p>
                    <h6 class="mb-1 text-right">S/ {{ Total }}</h6>
                  </div>
                  <div class="d-flex justify-content-between px-4">
                    <p class="mb-1 text-left">Descuento</p>
                    <h6 class="mb-1 text-right">S/ 0.00</h6>
                  </div>
                  <span class="row d-flex border-top mx-2 pt-2"></span>
                  <div class="d-flex justify-content-between px-4">
                    <p class="mb-1 text-left"><b>Total (igv incluido)</b></p>
                    <h6 class="mb-1 text-right">
                      <b>S/ {{ Total }}</b>
                    </h6>
                  </div>
                  <div class="row px-4">
                    <button class="btn-block btn-blue">
                      <span>
                        <span id="checkout">Pagar</span>
                        <span id="check-amt">S/ {{ Total }}</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="card-table">
        <div class="card-body col-sm-12 empty-cart-cls text-center">
          <img
            :src="require(`@/assets/static/images/nocart.png`)"
            alt="cart"
            width="150px"
            height="150px"
            class="img-fluid mb-2 mr-3"
          />
          <h5 class="mb-3">Tu carrito esta vacío</h5>
          <router-link to="/" class="btn-blue text-uppercase m-3">
            Continuar comprando
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      mastercard: false,
      visa: true,
      paypal: true,
    };
  },
  computed: {
    noItem() {
      return this.$store.state.CartModule.cartItems;
    },

    ...mapGetters({
      productos: "cartProductos",
      Total: "cartTotal",
    }),
  },
  methods: {
    ...mapActions({
      addProductToCart: "addProductToCart",
      decreaseProductCart: "decreaseProductCart",
      removeItemProductToCart: "removeItemProductToCart",
    }),
    radio(value) {
      if (value == "mastercard") {
        this.visa = true;
        this.mastercard = false;
        this.paypal = true;
      }
      if (value == "visa") {
        this.visa = false;
        this.mastercard = true;
        this.paypal = true;
      }
      if (value == "paypal") {
        this.visa = true;
        this.mastercad = true;
        this.paypal = false;
      }
    },
  },
};
</script>
<style lang="css" scoped>
.contentShop {
  margin-top: 6rem;
}
.card-table {
  border: none;
  padding: 15px;
  margin-bottom: 10px;
  background: #fff;
}
a{
text-decoration: none;
}

.input {
  background-color: #eef8f4;
  padding: 8px 15px 8px 15px;
  width: 100%;
  border-radius: 5px !important;
  box-sizing: border-box;
  border: 1px solid #eef8f4;
  font-size: 15px !important;
  color: #000 !important;
  font-weight: 300;
}

.input:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #96f7d2;
  outline-width: 0;
  font-weight: 400;
}

button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}

.pay {
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #76f7c5;
  margin: 10px 20px 10px 0px;
  cursor: pointer;
  box-shadow: 1px 5px 10px 1px rgba(0, 0, 0, 0.2);
}

.gray {
  -webkit-filter: grayscale(100%);
  -moz-filter: grayscale(100%);
  -o-filter: grayscale(100%);
  -ms-filter: grayscale(100%);
  filter: grayscale(100%);
  color: #e0e0e0;
}

.gray .pay {
  box-shadow: none;
}

.btn-blue {
  border: none;
  border-radius: 10px;
  background-color: #96f7d2;
  color: #fff;
  padding: 8px 15px;
  margin: 20px 0px;
  cursor: pointer;
}

.btn-blue:hover {
  background-color: #39c7cc;
  color: #fff;
}

#checkout {
  float: left;
}

#check-amt {
  float: right;
}
.bg-removes {
  color: #fa9696 !important;
  border-color: #fa9696 !important;
}
.bg-removes:hover {
  color: #ec4662 !important;
  
}
</style>