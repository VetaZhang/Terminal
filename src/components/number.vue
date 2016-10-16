<style>

</style>

<template>
  <span class="">
    {{(current/Math.pow(10,this.float)).toFixed(this.float)}}
  </span>
</template>

<script>
  export default {
    props: {
      value: {
        type: Number,
        default: 0
      },
      float: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        target: 0,
        current: 0,
        loop: null,
        step: 1
      }
    },
    watch: {
      value (val) {
        this.target = parseInt((val*Math.pow(10,this.float)).toFixed(0))
        let t = parseInt(((this.target - this.current) * 16 / 250).toFixed(0))
        this.step = Math.abs(t) < 1 ? 1 : t
        if (!this.loop) this.run()
      }
    },
    methods: {
      run () {
        this.loop = setInterval(() => {
          if (this.step >= 0 && this.current + this.step >= this.target) {
            this.stop()
            return
          }
          if (this.step < 0 && this.current + this.step <= this.target) {
            this.stop()
            return
          }
          this.current = this.current + this.step
        }, 16)
      },
      stop () {
        this.current = this.target
        clearInterval(this.loop)
        this.loop = null
      }
    }
  }
</script>
