<style>

</style>

<template>
  <div>
    <number :value="core.cpu[0]" :float="2"></number>
    <block-state :max="100" :value="core.cpu[0]" :length="10"></block-state>
    <!-- <block-state :max="100" :value="core.cpu[1]" :length="10"></block-state>
    <block-state :max="100" :value="core.cpu[2]" :length="10"></block-state>
    <block-state :max="100" :value="core.cpu[3]" :length="10"></block-state> -->
    <!-- <span>cpu: {{core.cpu}}</span> -->
    <!-- <span>mem: {{core.mem}}</span> -->
    <!-- <span>disk: {{core.disk}}</span> -->
  </div>
</template>

<script>
  import Vuex from 'vuex';
  import { mapGetters, mapActions } from 'vuex';
  import number from '../../components/number'
  import blockState from '../../components/blockState'

  module.exports = {
    props: {},
    data () {
      return {};
    },
    computed: Vuex.mapState({
        core: state => state.core
    }),
    mounted () {
      this.connect('core');
    },
    methods: Vuex.mapActions({
      connect: 'connect'
    }),
    components: {
      number,
      blockState
    }
  };
</script>
