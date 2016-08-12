<style>

</style>

<template>
  <div>
    {{state.n}}
    <button type="button" @click="handleClick('test')">button</button>
    <progress :total="100" :value="40"
      size="small"
      type="normal">
    </progress>
    <progress :total="100" :value="60"
      size="middle"
      type="normal">
    </progress>
    <progress :total="100" :value="80"
      size="big"
      type="normal">
    </progress>
  </div>
</template>

<script>
  import store from './vuex/store'
  import actions from './vuex/actions'
  import getters from './vuex/getters'
  import progress from '../../components/progress'

  module.exports = {
    vuex: {
      getters,
      actions
    },
    props: {},
    data () {
      return {};
    },
    store,
    ready () {
      this.connect()
    },
    methods: {
      handleClick (target) {
        this.send({
          command: target
        })
      }
    },
    components: {
      progress
    }
  }
</script>
