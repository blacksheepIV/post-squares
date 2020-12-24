<template>
  <div class="container">
    <h3>Hello from Home</h3>
  </div>
</template>

<script>
import { HTTP } from '@/utils/http-common.js'
export default {
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    HTTP.get(`posts`)
      .then(response => {
        this.posts = response.data
        console.log(this.posts)
      })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
