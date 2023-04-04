<template>
  <div id="app">
    <h2 class="content"> World</h2>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app{
  background-color: #1d1c1c;
  height: 100vh;
  display: flex;
}
.content{
  margin: auto;
  color: #fff;
  font-size: 70px;
  font-weight: bolder;
  position: relative;
}
.content::before{
  content: "Hello ";
  color: #06ee99;
  white-space: nowrap;
  overflow: hidden;
  border-right: 5px solid #06ee99;
  animation: animate 8s linear infinite;
  filter: drop-shadow(0 0 50px #06ee99);
}
@keyframes animate {
  0%{
    width: 0;
  }
  100%{
    width: 100px;
  }
}
</style>
