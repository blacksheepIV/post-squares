<template>
  <div class="listing">
    <h3>Posts list:</h3>
    <LoadingBullets v-if="loading" />
    <div
      v-else-if="!loading & !noResult"
      v-for="(row, index) in posts"
      :key="index"
      class="listing__row"
    >
      <div v-for="(item, i) in row" :key="i">
        <Post :post-info="item" />
      </div>
    </div>
    <div v-else-if="!loading & noResult">
      <p>No posts were found :(</p>
    </div>
  </div>
</template>

<script>
import { HTTP } from '@/utils/http-common.js'
import LoadingBullets from '@/components/common/loading-bullets.vue'
import Post from '@/components/Post.vue'
export default {
  components: {
    LoadingBullets,
    Post
  },
  data() {
    return {
      posts: [],
      loading: true,
      noResult: false,
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
        this.noResult = true
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
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.listing {
  padding: 5px 5px;
  &__row {
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
  }
}
</style>
