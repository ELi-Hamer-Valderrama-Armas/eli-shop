<template>
  <footer class="footer">
    <div class="row">
      <div class="col-sm-6 col-md-4 footer-navigation">
        <h3>
          <router-link to="/">SHOP<span>example</span></router-link>
        </h3>
        <p class="links">
          <router-link
            v-for="(item, i) in menuItem"
            :key="i"
            :to="item.route"
            :class="{ active: $route.name === item.name }"
            >{{ item.name }}<strong> · </strong></router-link
          >
        </p>
      </div>
      <div class="col-sm-6 col-md-4 footer-contacts">
        <div class="d-flex aling-items-center margin-contacts">
          <fa class="mx-2" icon="fa fa-map-marker"> </fa>
          <p>Trujillo - La libertad, PERÚ</p>
        </div>
        <div class="d-flex aling-items-center">
          
          <p class="footer-center-info email text-left">
            <a class="contacts" target="_blank" href="https://wa.me/51928139629"
              ><fa class="contacts mx-2" icon="fa fa-phone "></fa>+51 928139629</a
            >
          </p>
        </div>
        <div class="d-flex aling-items-center">
          
          <p>
            <a class="contacts" href="mailto:evalderrama500@gmail.com"
              ><fa class="contacts mx-2" icon="fa fa-envelope "></fa>evalderrama500@gmail.com
              </a
            >
          </p>
        </div>
      </div>
      <div class="col-md-4">
        <div class="social-links">
          <a target="_blank" href="https://www.facebook.com/eli.valderramaarmas"
            ><fa :icon="['fab', 'facebook']" style="color: #426bdb"></fa
          ></a>
          <a target="_blank" href="https://twitter.com/Eli_ValderramaA"
            ><fa :icon="['fab', 'twitter']" style="color: #42abdb"></fa
          ></a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/eli-valderrama-armas-137834112/"
          >
            <fa :icon="['fab', 'linkedin']" style="color: #3734e9"></fa
          ></a>
          <a
            target="_blank"
            href="https://github.com/ELi-Hamer-Valderrama-Armas"
            ><fa :icon="['fab', 'github']" style="color: #33383b"></fa
          ></a>
        </div>
        <p class="company-name">ELI VALDERRAMA © 2022</p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
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
};
</script>

<style lang="css" scoped>
footer {
  background-color: #fff;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  padding: 30px 50px;
  margin-top: 80px;
  bottom: 0;
  color: #33383b;
}

.footer-navigation h3 {
  margin: 0;
  font: normal 36px Cookie, cursive;
  margin-bottom: 20px;
  color: #33383b;
}

.footer-navigation h3 a {
  text-decoration: none;
  color: #33383b;
}

.footer-navigation h3 span {
  color: #ff637d ;
}

.footer-navigation p.links a {
  color: #000;
  font-weight: normal;
  text-decoration: none;
}
.footer-navigation p.links a:hover {
  color: #ff637d  !important;
}
.footer-navigation p.links a.router-link-exact-active {
  color: #ff637d  !important;
}

.contacts {
    text-decoration: none;
  color: #91eced!important;
  border-color: #91eced  !important;
}

.contacts:hover {
  color: #39c7cc  !important;
}

.margin-contacts {
  margin-top: 20px;
}

.footer-contacts p {
  display: inline-block;
  color: #33383b;
  vertical-align: middle;
}



.fa.footer-contacts-icon {
  background-color: #33383b;
  color: #000;
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 38px;
  margin: 10px 15px 10px 0;
}

div.social-links {
  margin-top: 20px;
  color: #fff;
}

.social-links a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 2px;
  font-size: 20px;
  color: #33383b;
  text-align: center;
  line-height: 35px;
  margin-right: 5px;
  margin-bottom: 5px;
}
.company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
}
.e {
  color: #426bdb;
}
</style>


