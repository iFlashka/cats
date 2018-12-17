<template>
  <div class="history">
    <div
      v-for="(cat, i) in $store.state.history"
      :key="i"
    >
      <img class="img" :src="cat.img">
      <div>{{ cat.rating }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history'
}
</script>
