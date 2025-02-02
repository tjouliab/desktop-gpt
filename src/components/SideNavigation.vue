<script setup lang="ts">
import { DateTime } from 'luxon'
import ConversationCard, { type ConversationCardDto } from './ConversationCard.vue'
import { computed, ref } from 'vue'
import { sortByDate } from '@/utils/luxon.utils'

const conversations = ref<ConversationCardDto[]>([
  {
    id: 1,
    title: 'titleA',
    pinned: true,
    creationDate: DateTime.fromISO('2025-01-01T00:00:00Z'),
  },
  {
    id: 2,
    title: 'titleB',
    pinned: false,
    creationDate: DateTime.fromISO('2025-01-02T00:00:00Z'),
  },
  {
    id: 3,
    title: 'VeryVeryVeryLongTitleThatNeverEndOmgItsTooLong',
    pinned: true,
    creationDate: DateTime.fromISO('2025-01-02T00:00:00Z'),
  },
  {
    id: 4,
    title: 'VeryVeryVeryLongTitleThatNeverEndOmgItsTooLong',
    pinned: false,
    creationDate: DateTime.fromISO('2025-01-01T00:00:00Z'),
  },
])

const conversationsPinned = computed(() =>
  sortByDate(
    conversations.value.filter((conversation) => conversation.pinned),
    'creationDate',
    'desc',
  ),
)
const conversationsUnpinned = computed(() =>
  sortByDate(
    conversations.value.filter((conversation) => !conversation.pinned),
    'creationDate',
    'desc',
  ),
)
</script>

<template>
  <div class="column-container">
    <v-btn>Nouvelle discussion</v-btn>
    <p v-if="conversationsPinned.length > 0">Discussion épinglées</p>
    <ConversationCard
      v-for="conversation of conversationsPinned"
      :key="conversation.id"
      :title="conversation.title"
      :pinned="conversation.pinned"
    />
    <p v-if="conversationsUnpinned.length > 0">Discussions récentes</p>
    <ConversationCard
      v-for="conversation of conversationsUnpinned"
      :key="conversation.id"
      :title="conversation.title"
      :pinned="conversation.pinned"
    />
  </div>
</template>

<style scoped>
.column-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
