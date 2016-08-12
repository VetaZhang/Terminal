<style>
@import '../main.css';
.progress {
  position: relative;
  border-radius: $radius;
  overflow: hidden;
  .bar {
    height: 100%;
    transition: width 0.25s;
  }
  &.big {
    height: 0.6rem;
  }
  &.middle {
    height: 0.3rem;
  }
  &.small {
    height: 0.1rem;
  }
  &.normal {
    background-color: $darkblue-l;
    .bar {
      background-color: $blue;
    }
  }

}
</style>

<template>
  <div :class="['progress', size, type]" :style="{width: width}">
    <div class="bar" :style="{width: value/total*100+'%'}"></div>
  </div>
</template>

<script>
  export default {
    props: {
      total: {
        type: Number,
        default: 100
      },
      value: {
        type: Number,
        default: 0
      },
      size: {
        type: String,
        default: 'middle'
      },
      type: {
        type: String,
        default: 'normal'
      },
      width: {
        type: String,
        default: '4rem'
      }
    },
    data () {
      return {
        //
      };
    }
  }
</script>
