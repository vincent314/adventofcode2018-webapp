<template>
  <div id="app">
    <div id="nav">
      <router-link to="/day4">Day4</router-link> |
      <router-link to="/day6">Day6</router-link> |
      <router-link to="/day6part2">Day6 part.2</router-link> |
      <router-link to="/day7">Day7</router-link> |
      <router-link to="/day9">Day9</router-link> |
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
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
