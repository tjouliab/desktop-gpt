<script setup lang="ts">
import { ref } from 'vue'

interface ConversationCardProps {
  title: string
  pinned: boolean
}

const { title, pinned } = defineProps<ConversationCardProps>()

const isHovered = ref(false)
function setIsHovered(value: boolean) {
  isHovered.value = value
}
</script>

<template>
  <div
    class="row-container outline-container"
    @mouseenter="setIsHovered(true)"
    @mouseleave="setIsHovered(false)"
  >
    <div class="text-container">
      <i class="fa-regular fa-comment chat-icon"></i>
      <p class="title-text">{{ title }}</p>
    </div>
    <div>
      <button v-if="isHovered"></button>
      <i v-else-if="pinned" class="fa-solid fa-thumbtack pin-icon"></i>
    </div>
  </div>
</template>

<style scoped>
.row-container {
  display: flex;
  flex-direction: row;
}

.outline-container {
  height: 2em;
  border-radius: 1em;
  border-color: black;
  border: 1px solid;
  align-items: center;
  justify-content: space-between;
  padding-left: 1em;
  padding-right: 1em;
  margin-left: 1em;
  margin-right: 1em;
}

.text-container {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.chat-icon {
  font-size: 1.5em;
}

.title-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  margin-left: 0.5em;
}

.pin-icon {
  font-size: 1.2em;
  rotate: 45deg;
}
</style>
