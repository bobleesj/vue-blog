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
          img(:src="post.thumbnail" id="cover-photo")
          h3(id="title") {{ post.title }}
          h4(id="subtitle") {{ post.subtitle }}
        .home-blog-container-individual-tags
          ul
            li(v-for="tag in post.tags") {{ tag }}
        .home-blog-container-individual-translation
          .home-blog-container-individual-translation-language(v-for="translator in post.translators")
            img(:src="translator.profile")
            span {{translator.langauge}}
  .home-footer
    span Interested in contributing? #[a(href="https://team.bobthedeveloper.io" target="_blank") Learm More]


</template>

<script scope>
export default {
  data () {
    return {
      posts: [
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        },
        {
          title: `10 Tips to become a better Swift developer`,
          subtitle: `Type less, read less, produce more`,
          tags: [`swift`, `delegate`, `singleton`],
          translators: [
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile1.png`,
              langauge: `Español`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile2.png`,
              langauge: `中文`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile3.png`,
              langauge: `日本語`
            },
            {
              name: `Bob`,
              profile: `https://cdn.bobthedeveloper.io/assets/placeholders/placeholder-profile4.png`,
              langauge: `한국어`
            }
          ],
          thumbnail: `https://cdn.bobthedeveloper.io/assets/placeholders/small-thumbnail-placeholder.png`
        }
      ]
    }
  }
}
</script>



<style lang="scss">
@import '../styles/home';
</style>
