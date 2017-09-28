<template lang="pug">
.about
  .about-introduction
    .about-introduction-profile
      img(src="../assets/bob-full-body.png")
    .about-introduction-bio
      h1 Bob Lee
      p My name is Bob. I'm a full-stack developer, good enough to build websites and iOS apps with reactive programming and front-end development. I distribute content as the editor of the iOS Developers Facebook Page and make a living as an online instructor and blogger.

      p In 1996, I was born in Seoul. Due to my father's international business, I was fortunate to experience a variety of cultures. I primarily lived in Penang, Malaysia and Ho Chi Minh City, Vietnam and attended a number of international schools. In college, I studied chemical engineering at Cooper Union located in Manhattan. On Sept 16, 2016, I decided to stop pursuing the engineering degree, and instead get involved with teaching and sharing what I've learned so far, utlimately working towards providing affordable and quality education.

      p My short-term goal as an instructor is to raise fund to pursue furthur education in the areas of computer science and electrical engineering at a higher level. I'm determined to building a product that combines the VR technology along with education. I believe education should be accessible by all people regardless of wealth, race, gender, and any other factors. VR and AR are on the way to disrupt the way knowledge is distributed. I wish I could be a part of the change.
  .about-featured
    .about-featured-header
      h3(id="featured-text") As Featured In
    .about-featured-logos
      img(src="../assets/logos/realm-logo.png" id="realm")
      img(src="../assets/logos/medium-logo.png" id="medium")
      img(src="../assets/logos/sitepoint-logo.png" id="sitepoint")
      img(src="../assets/logos/udemy-logo.png" id="udemy")
      img(src="../assets/logos/ios-goodies-logo.png" id="ios-goodies")
      img(src="../assets/logos/ios-dev-weekly-logo.png" id="ios-dev-weekly")
      img(src="../assets/logos/this-week-in-swift-logo.png" id="this-week-swift")

  //- Recommenation -//
  .about-recommendation
    h3(id="recommendation-text") Recommendations
    h4(id="recommendation-subtext") What others have said about my work
    .about-recommendation-container
      .about-recommendation-container-individual(v-for="review in reviews")
        .about-recommendation-container-individual-header
          .about-recommendation-container-individual-header-profile
            img(:src="review.img")
          .about-recommendation-container-individual-header-description
            span#name #[a(href="https://www.linkedin.com/in/flexmcpee/") {{ review.name }}]
            span(v-html="review.title" id="title")
        .about-recommendation-container-individual-content
          p {{ review.message }}


  .about-speaking
    .about-speaking-header
      h3(id="speaking-text") Speaking
      h3(id="speaking-subtext")  Fond of sharing my experience
    .about-speaking-container
      .about-speaking-container-individual(v-for="event in events")
        .about-speaking-container-individual-logo
          img(:src="`https://cdn.bobthedeveloper.io/assets/events/` + event.logo")
        .about-speaking-container-individual-description
          span(id="title") {{ event.name}}
          span(id="subtitle") {{ event.title }}
          span(id="date") {{ event.date }}
        .about-speaking-container-individual-summary
          p {{ event.description }}
  .about-profile
    .about-profile-container
      img(src="https://cdn.bobthedeveloper.io/assets/bob/bob-conference-min.png")

  .about-footer
    span I can be easily contacted at #[a(href="https://team.bobthedeveloper.io" target="_blank") bob@bobthedeveloper.io]



</template>


<script scope>
export default {
  data () {
    return {
      reviews: [
        {
          name: `Alex McPherson`,
          title: `iOS Developer Manager <a href="https://github.com/my-mo">my-mo</a>`,
          message: `I have been building apps for iOS for about 6-7 years with my first language being Objective-C. I never felt I've mastered the language with the release of Swift. In the past, I found many resources online some were alright and some were terrible turning us into code monkeys without any understanding what was seen. With the help of Bob's intermediate to advanced Swift course, I have been able to grasp the language way better than I could without his help. His awesome teaching style, approachability and the way Bob uses real world analogies to get a subject across are magnificent. I wouldn’t hesitate to recommend Bob's course to anyone who wishes to learn the language of Swift because that exactly what you will do.`,
          website: `https://www.linkedin.com/in/flexmcpee/`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/alex-min.png`
        },
        {
          name: `Byron BP`,
          title: `QA Engineer`,
          message: `I have completed Bob's intermediate to Advanced Swift course. As the course title states, you really learn Swift with Bob. The concepts that are carried out in this course can become quite dense, complex, possibly boring. The way it’s been taught by Bob, on the other hand, removes all. There is nothing that is not understood by the student. Even if you have doubts, you can contact him through email or Slack and solve the problem almost immediately. One of the aspects that differentiates Bob's course with any other online coursres is the documentation that Bob provides. Incredibly useful to follow the classes as well to come back any time to consult some specific concept. if you want to take your Swift to the next level, I recommend starting with Bob. He will get you there.`,
          website: `https://www.linkedin.com/in/byron-bacusoy-pinela-7690b7149/"`,
          company: `QA Engineer`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/byron-min.png`
        },
        {
          name: `Oren Alalouf`,
          title: `Lead SCCM @<a href="https://www.linkedin.com/company-beta/24646/">SQLink Group</a>`,
          message: `For every traveller, in the beginning , there is the mentor/source material for the journey ahead. I happened to stumble onto Bob's writing on his blog, and I can't say enough about how awesome the output is. From the first post – the agenda was nothing more than to enrich the reader, handled with a knowledgeable and most of all – human and relatable delivery. If I only had Bob's materials when I started my journey into iOS development, the road ahead would have been shorter, clearer and most certainly more enjoyable. I have the distinct pleasure of calling Bob a colleague. Thank you Bob for your persistent support and contribution to the iOS community. It's people like you who give back make learning more fun and the challenge more manageable.`,
          website: `https://www.linkedin.com/in/orenalalouf/`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/oren-min.png`
        },
        {
          name: `Patrick Bellot`,
          title: `Front End Web Developer @<a href="https://www.linkedin.com/in/gpatrickbellot">Polestar</a>`,
          message: `I was introduced to Bob from his in-depth blog posts on Medium. Since then, Bob has grown as an instructor and developer, creating one of the most popular Swift courses on the Udemy platform.  Bob’s explanations of concepts in Swift are easy to follow. If anyone wants to learn iOS and Swift, I immediately direct them to Bob's content. I know Bob will help them understand Swift and be ready for a career in iOS mobile development. Bob is also an inspiration to me and others. He has dedicated his personal time and resources to teach Swift. By focusing, understanding, and mastering core concepts through teaching, Bob has successfully built a reputation as an expert.`,
          website: `https://twitter.com/pbellot`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/patrick-min.png`
        },
        {
          name: `Luna An`,
          title: `The Flatiron Graduate • iOS Engineering Intern @<a href="https://www.prolificinteractive.com/">Prolific Interactive</a>`,
          message: `Bob is such an amazing instructor. His Medium blog has been incredibly resourceful during my journey of iOS development, and I'm so thankful for his recent creation of this well structured, excellent Udemy course. You will have lots of fun with Bob while taking this course and I would say his passion for iOS development is at an all time high - it is just so clear that he really loves what he is doing, and that shows in his teaching! I'd heartily recommend this course to anyone who wants to be a better Swift programmer. Thanks, Bob. You rock.`,
          website: `https://www.linkedin.com/in/mimicatcodes/`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/luna-min.png`
        },
        {
          name: `Justin Stanley`,
          title: `Swift iOS/React Native Developer at @<a href="https://www.skipthedishes.com/">SkipTheDishes</a>`,
          message: `Bob can always take a confusing or complex subject and break it down into easily digestible explanations that are comprehensive and logically-structured. His examples and correlations always help my brain learn core concepts better—even those that I thought I knew well enough already. Bob’s teachings have made me a stronger and more confident developer`,
          website: `https://twitter.com/JStheoriginal`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/justin-min.png`
        },
        {
          name: `Nam-Anh Vu`,
          title: `Learning iOS Development`,
          message: `Bob is a very talented and unique individual. His online tutorials have greatly expanded my Swift knowledge, fast. Simple real life examples are how I learn, and Bob breaks concepts down concisely. Bob is a great teacher who has a vision to become a unique creator in life and to help others in the process. I have a solid feeling he will succeed in doing just that!`,
          website: `https://twitter.com/yoowinks`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/nammy-min.png`
        },
        {
          name: `Joshua Ziering`,
          title: `Founder @<a href="https://kittyhawk.io/">Kitty Hawk</a>`,
          message: `Although I am relatively new to Swift, after having read through Bob's blog posts and tutorials, I've begun to appreciate Bob's teaching philosophy and attention to detail. It would be have been great if Bob also wrote tutorials on a langauge I currently use. Maybe, I should just learn Swift instead. `,
          website: `https://www.linkedin.com/in/joshziering/`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/joshua-min.png`
        },
        {
          name: `Oren Alalouf`,
          title: `Musician and iOS Developer @<a href="http://www.belatrixsf.com/">Belatrix Software</a>`,
          message: `FI've been a self-taught iOS developer for 6 years and since I took Bob's course my Swift skills took a boost of productivity. I started to take really advantage of Swift strengths and my projects started to become easier to take along. I couldn't be more grateful to Bob.`,
          website: `https://www.linkedin.com/in/leandrofournier/`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/leandro-min.png`
        }
      ],
      events: [
        {
          name: `let us: Go!`,
          description: `Talking about server-side Swift`,
          title: `Test Driven Development in iOS`,
          date: `Nov 3rd, 2017`,
          logo: `let-us-go.png`
        },
        {
          name: 'try! Swift @Bangalor',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Swift Beginner’s Workshop`,
          date: `Nov 11th, 2017`,
          logo: `try-swift.png`,
          website: `https://www.tryswift.co/events/2017/bangalore/`
        },
        {
          name: `Let'Swift 17`,
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Serverless vs Server Side Swift`,
          date: `Sept 23th, 2017`,
          logo: `lets-swift17.png`,
          website: `http://letswift.kr/2017/`
        },
        {
          name: 'Swift Korea Meetup',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Minimize Mouse and Trackpad Usage`,
          date: `May 30th, 2017`,
          logo: `swift-korea.png`,
          website: `https://swiftkorea.github.io/meetup/`
        }
      ]
    }
  }
}
</script>


<style lang="scss">
@import '../styles/about.scss';
</style>
