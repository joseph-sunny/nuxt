<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3> Post you might enjoy! </h3>
      <ul>
        <li v-for="related in relatedPosts">
        <nuxt-link :to="{name: 'posts-id', params: {id: related.id}}">
          {{related.title}}
        </nuxt-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        posts: [
          {
            id: 'joe',
            title: 'Quis nostrud exercitation',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
          },
          {
            id: 'jack',
            title: 'Cillum dolore eu fugiat',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
          },
          {
            id: 'karl',
            title: 'Occaecat cupidatat',
            content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
      }
    },
    computed: {
      post() {
      return this.posts.find(post => post.id === this.id)
      },
      relatedPosts() {
        return this.posts.filter(post => post.id !== this.id)
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>