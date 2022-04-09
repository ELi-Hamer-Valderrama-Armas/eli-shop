<template>
  <div class="page-holder">
    <div class="container-fluid px-lg-4 px-xl-5 contentDiv">
      <aside>
        <div class="row">
          <div class="col-lg-3">
            <Sidebar />
          </div>
          <div class="col-lg-9">
            <transition name="fade">
            <router-view />
            </transition> 
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>
<script>
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },
};
</script>
<style>
.page-holder {
  display: flex;
  overflow-x: hidden;
  width: 100%;
  min-height: calc(100vh - 72px);
  flex-wrap: wrap;
}
.contentDiv {
  margin-top: 6rem;
}
</style>