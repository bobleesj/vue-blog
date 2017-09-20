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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/5991934931ca9b1c7733572b/intro-to-error-handling-in-swift-min.png
`
        },
        {
          title: `Intro to Error Handling`,
          subtitle: `Try? Try! Try: Deal with unexpected results`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/5991940a31ca9b1c7733572c/the-complete-understanding-of-swift-delegate-and-data-source-min.png`
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/59919b8b31ca9b1c7733572e/10-tips-to-become-a-better-swift-ninja%F0%9F%8F%B4-min.png`
        },
        {
          title: `Introduction to Protocol Oriented Programming in Swift`,
          subtitle: `OOP is okay, but could’ve been better | Update on May 14th, 2017`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/59919eb231ca9b1c77335731/swift-capture-list-in-closures-min.png`
        },
        {
          title: `Intro to Grand Central Dispatch in Swift 4 with Bob`,
          subtitle: `Threading? Concurrency? Dispatch Queue? Holy Shit | Update on May 14th, 2017`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/59919f2831ca9b1c77335732/no-fear-closure-in-swift-with-bob-min.png`
        },
        {
          title: `Pass Data with NSNotification in Swift`,
          subtitle: `Between ViewControllers`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/59919f5431ca9b1c77335733/no-fear-closure-in-swift-with-bob-part-2-min.png`
        },
        {
          title: `The Complete Understanding of Access Control in Swift 4`,
          subtitle: `Differentiate Open, Public, Internal, File-private, Private`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/5991a39e8423d31db4a13bed/top-10-ground-rules-for-ios-developers-min.png`
        },
        {
          title: `How to become an iOS developer, Bob`,
          subtitle: `iOS Development is hard. Embrace it and deal with it.`,
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
          thumbnail: `https://cdn.bobthedeveloper.io/posts/5991a7824dbb671df7067453/completion-handlers-in-swift-with-bob-min.png`
        },
        {
          title: `Make Memory Management Great Again`,
          subtitle: `Swift Automatic Reference Counting explained with ease for complete beginners without CS/CE degree`,
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
