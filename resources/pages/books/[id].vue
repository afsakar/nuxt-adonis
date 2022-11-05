<script setup>
useHead({
  title: 'My App',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
})

const route = useRoute()
const { data } = await useFetch(`/api/books/${route.params.id}`)
</script>
<template>
  <div>
    {{ route.params.id }}
    {{ data }}
  </div>
</template>
