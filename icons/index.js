/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-01-13 15:10:27
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-01-13 15:27:04
 */
import Vue from 'vue'
import SvgIcon from './svgIcon.vue' // svg组件
// 注册到全局
Vue.component('svg-icon', SvgIcon)
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)