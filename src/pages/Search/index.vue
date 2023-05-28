<template>
  <div>
    我是搜索
    <h1>params参数 {{ keyword }}</h1>

    <h2>query参数 {{ k }}</h2>
  </div>
</template>

<script>
export default{
  name: '',
  props: ['keyword', 'k', 'b']
}
</script>

<style lang="scss" scoped>
</style>
