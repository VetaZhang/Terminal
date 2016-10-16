<style>
.block-state {
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  width: 150px;
  height: 40px;
  div {
    width: 14px;
    min-width: 5px;
    background-color: #eee;
    opacity: 0;
    transition: opacity 0.25s;
  }
}
</style>

<template>
  <div class="block-state">
    <div class="" v-for="item in list" :style="{opacity: item}">

    </div>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    props: {
      max: {
        type: Number,
        default: 1
      },
      value: {
        type: Number,
        default: 0
      },
      length: {
        type: Number,
        default: 10
      }
    },
    data () {
      const l = []
      for (let i = 0; i < this.length; i++) {
        l.push(0)
      }
      return {
        list: l,
        step: this.max / this.length,
        loop: null,
        current: 0,
        upDirection: true
      }
    },
    watch: {
      value (val, old) {
        this.upDirection = val > old
        if (!this.loop) {
          this.run()
        }
      }
    },
    methods: {
      run () {
        this.loop = setInterval(() => {
          if (this.upDirection) {
            if (this.value <= this.step * (this.current + 1) &&
              this.value > this.step * this.current) {
              this.stop()
              this.list.splice(this.current, 1, ((this.value - this.step * this.current) / this.step).toFixed(2))
            } else {
              this.list.splice(this.current, 1, 1)
              this.changeCurrent(1)
            }
          } else {
            if (this.value <= this.step * (this.current + 1) &&
              this.value > this.step * this.current) {
              this.stop()
              this.list.splice(this.current, 1, ((this.value - this.step * this.current) / this.step).toFixed(2))
            } else {
              this.list.splice(this.current, 1, 0)
              this.changeCurrent(-1)
            }
          }
        }, 16)
      },
      changeCurrent (n) {
        if (n > 0) {
          if (this.current >= this.list.length - 1) {
            this.current = this.list.length - 1
            this.stop()
          } else this.current = this.current + 1
        } else {
          if (this.current < 1) {
            this.current = 0
            this.stop()
          } else this.current = this.current - 1
        }
      },
      stop () {
        clearInterval(this.loop)
        this.loop = null
      }
    }
  }
</script>
