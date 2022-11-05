<script setup>
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const { data } = await useFetch('/api/books')
const bookList = computed(() => {
  return data.value.bookList.data
})
</script>
<template>
  <ul>
    <li v-for="book in bookList" :key="book.id">
      {{ book.title }}
    </li>
  </ul>
</template>
