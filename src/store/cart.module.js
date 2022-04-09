
export default {
    state:{
        productos:[],
        cart:[],
        cartItems:0,
        highPrice:1500,
        sale:false,

    },
    mutations:{
          setProductos(state,payload){
            state.productos = payload
          },
          pushProductToCart(state,productoId){
            
            state.cart.push({
              id:productoId,
              quantity:1,
            });
            state.cartItems++
          },          
          incrementItemQty(state,cartItem){
            cartItem.quantity++
            state.cartItems++

          },
          decrementItemQty(state,cartItem){
            cartItem.quantity--
            state.cartItems--
          },
          removeProductToCart(state,cartItem){
            state.cart = state.cart.filter(item => item.id != cartItem.id);
            state.cartItems -= cartItem.quantity

            const productos = state.productos.find(item => item.id === cartItem.id)
            productos.inventory += cartItem.quantity

          },    
          incrementProductInventory(state,producto){
            producto.inventory++
          },          
          decrementProductInventory(state,producto){

            producto.inventory--
          },
          setHighPrice(state,event){
            state.highPrice = event
          },
          toggleSale(state){
            state.sale=!state.sale
          },
          emptyCart(state){
            state.cart = []
            state.cartItems = 0
            
          }

    },
    actions:{
          async fetchData({commit}){
            try {
              const res = await fetch('./api/shop.json')
              const productos = await res.json()
              commit('setProductos',productos)
              
              
            } catch (error) {
              console.log('errores',error)
            }
          },
          addProductToCart(context,producto){
            const cartItem = context.state.cart.find(item => item.id === producto.id)
            if(!cartItem){
              context.commit('pushProductToCart',producto.id)
            }
            else{
              context.commit('incrementItemQty',cartItem)
            }
            const productoItem = context.state.productos.find(item => item.id === producto.id)
            context.commit('decrementProductInventory',productoItem)
          
          },
          decreaseProductCart(context,producto){
            const cartItem = context.state.cart.find(item => item.id === producto.id)
            if(cartItem){
              context.commit('decrementItemQty',cartItem)
              const productoItem = context.state.productos.find(item => item.id === producto.id)
              context.commit('incrementProductInventory',productoItem)
            }                      

          },
          removeItemProductToCart(context,producto){
            const cartItem = context.state.cart.find(item => item.id === producto.id)
            if(cartItem){
              context.commit('removeProductToCart',cartItem)
            }
          },
          checkout(context){
              context.commit('emptyCart')
              
          }
    },
    getters:{
   
          cartProductos(state){
        
            return state.cart.map(cartItem => {
              const producto = state.productos.find(product => product.id === cartItem.id)
              
            return {
              id:producto.id,
                title:producto.title,
                price:producto.price,
                img:producto.img,
                quantity:cartItem.quantity,
              };
          })
        
          },
          cartTotal(state,getters){

            return getters.cartProductos.reduce((total,producto)=>total + producto.price*producto.quantity,0);

        
          },
     
    },
}