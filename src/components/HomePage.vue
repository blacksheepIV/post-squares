<template>
  <div class="listing">
    <h3>Posts list:</h3>
    <div v-for="(row, index) in posts" :key="index" class="listing__row">
      <div v-for="(item, i) in row" :key="i">
        <Post :post-info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/utils/http-common.js'
import Post from '@/components/Post.vue'
export default {
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      errors: []
    }
  },

  created() {
    HTTP.get(`posts`)
      .then(response => {
        this.arrangeData(response.data)
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    arrangeData(data) {
      let rows = []
      while (data.length > 0) {
        rows.push(data.splice(0, 10))
      }
      console.log(rows)
      this.posts = rows
    }
  }
}
</script>

<style lang="scss" scoped>
.listing {
  &__row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
}
</style>
