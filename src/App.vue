<template>
  <div id="app">
    <div class="demo-container">
      <vibrancy :vibrance="0" :brightness="0" :blur="0">
        <template v-slot:content>
          <p>The perfect design is now within your grasp.</p>
        </template>
      </vibrancy>
    </div>
  </div>
</template>

<script>
import Vibrancy from './components/Vibrancy.vue'

export default {
  name: 'App',
  components: {
    Vibrancy
  }
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  background: url('https://images.unsplash.com/photo-1591758692416-b47871e30eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max') no-repeat;
  /*background: url('https://images.unsplash.com/photo-1591758692416-b47871e30eac?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max') no-repeat center center fixed;*/
  /*background: url('https://source.unsplash.com/random') no-repeat center center fixed;*/
  /*background-size: cover;*/
  background-attachment: fixed;
  padding: 150px;
}
.demo-container {
  width: 500px;
  height: 200px;
  margin: auto;
  /*position: absolute;
  left: 0;
  top: 0;*/
}
p {
  text-align: center;
  padding: 30px;
  font-size: 2rem;
  color: black;
}
</style>
