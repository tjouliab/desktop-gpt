<script setup lang="ts">
import ConversationCard from './ConversationCard.vue'
</script>

<template>
  <div class="column-container">
    <button>Nouvelle discussion</button>
    <p>Discussions récentes</p>
    <ConversationCard :title="'TitleA'" :pinned="true" />
    <ConversationCard :title="'TitleB'" :pinned="false" />
    <ConversationCard :title="'VeryVeryVeryLongTitleThatNeverEndOmgItsTooLong'" :pinned="false" />
    <ConversationCard :title="'VeryVeryVeryLongTitleThatNeverEndOmgItsTooLong'" :pinned="true" />
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
