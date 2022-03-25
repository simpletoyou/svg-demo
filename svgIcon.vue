<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-13 15:01:09
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-13 16:07:53
-->
<template>
  <svg :class="svgClass" aria-hidden="true" :width="swidth" :height="sheight">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: "",
    },
    size: {
      type: [String, Number],
      default: 120,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
    swidth() {
      if (this.size < 0 || isNaN(this.size)) {
        return 20;
      }
      return this.size;
    },
    sheight() {
      if (this.size < 0 || isNaN(this.size)) {
        return 20;
      }
      return this.size;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  /* width: 1em; 自定义 图标的大小
  height: 1em; */
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  cursor: pointer;
}
svg {
  /* transition: all .1s; */
  
}
svg:hover,
svg:focus {
  filter: invert(20%) sepia(64%) saturate(6378%) hue-rotate(259deg) brightness(94%) contrast(88%);
}
</style>