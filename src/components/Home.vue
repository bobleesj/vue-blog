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
          a(href="/post/")
            img(:src="post.thumbnail" id="cover-photo")
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
    const response = await axios.get(`http://localhost:5000/blog/posts`)
    this.posts = response.data
  },
  data () {
    return {
      posts: []
    }
  },
  methods: {
    mouseOver: function () {
      console.log(this.$el)
    }
  }
}
</script>



<style lang="scss">
@import '../styles/home';
</style>
