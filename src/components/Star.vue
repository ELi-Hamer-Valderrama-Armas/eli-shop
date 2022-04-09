<template>
  <div class="rating">
    <span v-for="(n, item) of rating" :key="item">
      <fa
        class="bg-star-rat"
        :icon="
          value >= n
            ? ['fa', 'star']
            : value > n - 1
            ? ['fa', 'star']
            : ['far', 'star']
        "
        @click="$emit('update:value', n)"
      >
      </fa>
    </span>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      rating: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style lang="css" scoped>
.rating{
  cursor: pointer;
}
.bg-star-rat {
  color: #fff87f !important;
  border-color: #fff87f !important;
}
.bg-star-rat:hover {
  color: #eee655 !important;
  border-color: #fff87f !important;
}
</style>
