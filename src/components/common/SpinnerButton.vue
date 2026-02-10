<template>
  <button 
    :disabled="loading || disabled"
    @click="$emit('click')"
    :class="['btn-main', customClass]"
  >
    <span v-if="loading" class="spinner"></span>
    <span><slot>{{ text }}</slot></span>
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: { type: String, default: 'Submit' },
  loading: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  customClass: { type: String, default: '' }
})
</script>