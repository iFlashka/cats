<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/history">History</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.img {
  max-height: 300px;
}

.rating {
  margin-top: 10px;
  display: inline-block;
  margin-left: 30px;
  font-size: 20px;
  cursor: pointer;
}
</style>
