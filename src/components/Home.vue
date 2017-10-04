<template lang="pug">
.home
  //- Blog CTA -//
  .home-action
    h1 Want to become an advanced Swift Developer?
    h2 Take Your Swift Game to the Next Level
    button Learn More
  .home-blog
    .home-blog-header
      span Recent
      .home-blog-header-divider
    //- Blog Container -//
    .home-blog-container
      .home-blog-container-individual(v-for="post in posts")
        .home-blog-container-individual-info
          a(v-on:click="mouseOver" :alt="post._id" ref="post")
            img(src="https://cdn.bobthedeveloper.io/posts/5991934931ca9b1c7733572b/intro-to-error-handling-in-swift.png" id="cover-photo" :alt="post._id")
          h3(id="title") {{ post.title }}
          h4(id="subtitle") {{ post.subtitle }}
        .home-blog-container-individual-tags
          ul
            li(v-for="tag in post.tags") {{ tag }}
        .home-blog-container-individual-translation
          .home-blog-container-individual-translation-language(v-for="translator in post.translators")
            a(href="www.facebook.com")
              img(:src="translator.profile"  v-on:mouseover="mouseOver")
            span {{translator.langauge}}
  .home-footer
    span Interested in contributing? #[a(href="https://team.bobthedeveloper.io" target="_blank") Learm More]
</template>

<script>
import axios from 'axios'

export default {
  async created () {
    const response = await axios.get(`http://localhost:5000/post/posts`)
    this.posts = response.data
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    mouseOver: async function (event) {
      // const postId = event.target.alt
      // const postInfo = await axios.get(`http://localhost:5000/post/` + postId)
      // console.log(postInfo)
      // this.$router.push({ path: 'post/' + postInfo.data.postUrl })
      // this.$store.commit('appendPost')
      this.$store.commit('prepareForUpload')
      this.$store.dispatch('getPost')
      console.log(this.$store.state.currentPost)
      console.log(this.$store.state.postObject.title)
      console.log(this.$store.getters.doneTodos)
    }
  }
}
</script>



<style lang="scss">
@import '../styles/home';
</style>
