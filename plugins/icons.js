import Vue from 'vue'
// COMPUTENTS
import SvgIcon from '@/components/SvgIcon.vue'

// REGISTER
Vue.component('svg-icon', SvgIcon)

// ICONS
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', true, /\.svg$/)
requireAll(req)

