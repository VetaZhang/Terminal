<style>
@import 'main.css';
* {
  box-sizing: border-box;
  font-family: 'Source Sans Pro', 'Segoe UI', 'Droid Sans', Tahoma, Arial, sans-serif;
}
html {
  font-size: calc(100vw/32);
}
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: $darkblue;
  overflow: hidden;
  & > .app {
    width: 32rem;
    height: 18rem;
  }
}
</style>

<template>
  <div class="container">
    <component class="app" :is="view"></component>
  </div>
</template>

<script>
  // import store from './store'
  // import store from './lib/store'
  import Apps from './apps'

  module.exports = {
    el: '#app',
    props: {
      //
    },
    // store,
    data () {
      return {
        view: 'eva'
      };
    },
    ready () {
      let html = document.getElementsByTagName('html')[0]
      window.onresize = (e) => {
        console.log('resize')
        let height = document.body.clientHeight
        let width = document.body.clientWidth
        if (width / 32 * 18 > height) {
          html.style.fontSize = height / 18 + 'px'
        } else {
          html.style.fontSize = width / 32 + 'px'
        }
      }
    },
    methods: {
      handleResize () {

        // store.dispatch('INCREMENT')
      }
    },
    // vuex: {
    //   getters: {
    //     counterValue: function (state) {
    //       return state.count
    //     }
    //   }
    // },
    components: Apps
  }
</script>
