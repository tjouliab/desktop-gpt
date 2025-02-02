<script setup lang="ts">
import { ref } from 'vue'
import { DateTime } from 'luxon'

interface ConversationCardProps {
  title: string
  pinned: boolean
}

export interface ConversationCardDto extends ConversationCardProps {
  id: number
  creationDate: DateTime
}

const { title, pinned } = defineProps<ConversationCardProps>()

const isHovered = ref(false)
function setIsHovered(value: boolean) {
  isHovered.value = value
}
</script>

<template>
  <v-btn
    class="text-none btn-container"
    variant="tonal"
    @mouseenter="setIsHovered(true)"
    @mouseleave="setIsHovered(false)"
  >
    <template v-slot:prepend>
      <v-icon class="chat-icon" icon="mdi-message-outline" />
      <p class="text-truncate title-text">{{ title }}</p>
    </template>
    <template v-slot:append>
      <v-btn
        v-if="isHovered"
        class="btn-menu"
        density="comfortable"
        variant="tonal"
        icon="mdi-dots-vertical"
      ></v-btn>
      <v-icon v-else-if="pinned" class="pin-icon" icon="mdi-pin" />
    </template>
  </v-btn>
</template>

<style scoped>
:deep(.btn-menu.v-btn--icon.v-btn--size-default) {
  --v-btn-size: 1em;
}

.btn-container {
  display: flex;
  flex-direction: row;
  margin-left: 1em;
  margin-right: 1em;
  border-radius: 1em;
  align-items: center;
  justify-content: space-between;
}

.chat-icon {
  font-size: 1.5em;
}

.title-text {
  width: 200px;
  margin-left: 0.5em;
}

.btn-menu {
  border-radius: 1em;
}

.pin-icon {
  font-size: 1.2em;
  rotate: 45deg;
}
</style>
