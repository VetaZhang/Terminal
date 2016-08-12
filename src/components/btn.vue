<style media="screen">
@import "../main.css";
btn {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100px;
  height: 30px;
  font-size: 14px;
  letter-spacing: 0.8px;
  border-radius: $radius;
  border-color: #1f5e91;
  background-color: #1f5e91;
  transition: background-color 0.25s;
  user-select: none;
  outline: none;
  cursor: pointer;
  overflow: hidden;

  &.disabled {
    opacity: .6;
    pointer-events: none;
  }
  &.clean {
    border: none;
    background-color: rgba(255, 255, 255, 0) !important;
  }
  &.border {
    border-width: 2px;
    border-style: solid;
    background-color: rgba(255, 255, 255, 0) !important;
  }
  &.fill {
    color: #fff !important;
  }
  &.block {
    display: flex;
    width: 100%;
    height: 45px;
    font-size: 18px;
  }
  &.big {
    width: 140px;
    height: 40px;
    font-size: 16px;
  }
  &.small {
    width: 75px;
    height: 25px;
    font-size: 12px;
  }
  .skyblue {
    color: #138ef4;
    border-color: #138ef4;
    background-color: #138ef4;
  }
  .red {
    color: #db4545;
    border-color: #db4545;
    background-color: #db4545;
  }
  .grey {
    color: #b3abab;
    border-color: #b3abab;
    background-color: #b3abab;
  }
}
</style>

<template>
  <btn :class="{'disabled': disabled}">
    <slot></slot>
  </btn>
</template>

<script type="text/javascript">
  module.exports = {
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
