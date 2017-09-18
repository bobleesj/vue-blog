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
      img(src="../assets/logos/udemy-logo.png" id="udemy")
      img(src="../assets/logos/medium-logo.png" id="medium")
      img(src="../assets/logos/ios-goodies-logo.png" id="ios-goodies")
      img(src="../assets/logos/ios-dev-weekly-logo.png" id="ios-dev-weekly")
      img(src="../assets/logos/this-week-in-swift-logo.png" id="this-week-swift")

  //- Recommenation -//
  .about-recommendation
    h3(id="recommendation-text") Recommendations
    h4(id="recommendation-subtext") What others have said about my work
    .about-recommendation-individual(v-for="review in reviews")
      .about-recommendation-individual-header
        .about-recommendation-individual-header-profile
          img(:src="review.img")
        .about-recommendation-individual-header-description
          span#name #[a(href="https://www.linkedin.com/in/flexmcpee/") Alex McPherson]
          span#title iOS Developer Manager @#[a(href="http://www.my-mo.co.uk/" target="_blank") my-mo]
      .about-recommendation-individual-content
        p {{ review.message }}


  .about-speaking
    .about-speaking-header
      h3(id="speaking-text") Speaking
      h3(id="speaking-subtext")  Fond of sharing my experience
    .about-speaking-individual(v-for="event in events")
      .about-speaking-individual-logo
        img(:src="`https://cdn.bobthedeveloper.io/assets/events/` + event.logo")
      .about-speaking-individual-description
        span(id="title") {{ event.name}}
        span(id="subtitle") {{ event.title }}
        span(id="date") {{ event.date }}
      .about-speaking-individual-summary
        p This workshop is designed for developers who are interested in learning iOS app development with Swift. Even if you do not have any prior iOS programming experience, you will learn how to create an iOS app and understand the Swift basics by the end of the workshop. We'll look at Swift fundamentals like properties, optionals, access-controls, functions, protocols, structs, generics, enumerations, functional programming and error handling. We'll use Swift Playgrounds to explore some of these aspects of the language including the latest

  .about-footer
    span I can be reached at #[a(href="https://team.bobthedeveloper.io" target="_blank") bob@bobthedeveloper.io]


</template>


<script scope>
export default {
  data () {
    return {
      reviews: [
        {
          name: `Alex McPherson`,
          title: `iOS Developer @my-mo`,
          message: `I have been building apps for iOS for about 6-7 years with my first language being Objective-C. I never felt I've mastered the language with the release of Swift. In the past, I found many resources online some were alright and some were terrible turning us into code monkeys without any understanding what was seen. With the help of Bob's intermediate to advnaced Swift course, I have been able to grasp the language way better than I could without his help. His awesome teaching style, approachability and the way Bob uses real world analogies to get a subject across are magnificent. I wouldn’t hesitate to recommend Bob's course to anyone who wishes to learn the language of Swift because that exactly what you will do.`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/alex-min.png`
        },
        {
          name: `Alex McPherson`,
          title: `iOS Developer @my-mo`,
          message: `I have been building apps for iOS for about 6-7 years with my first language being Objective-C. I never felt I've mastered the language with the release of Swift. In the past, I found many resources online some were alright and some were terrible turning us into code monkeys without any understanding what was seen. With the help of Bob's intermediate to advnaced Swift course, I have been able to grasp the language way better than I could without his help. His awesome teaching style, approachability and the way Bob uses real world analogies to get a subject across are magnificent. I wouldn’t hesitate to recommend Bob's course to anyone who wishes to learn the language of Swift because that exactly what you will do.`,
          img: `https://cdn.bobthedeveloper.io/assets/reviews/alex-min.png`
        }
      ],
      events: [
        {
          name: 'try! Swift @Bangalor',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Swift Beginner’s Workshop`,
          date: `Nov 11th, 2017`,
          logo: `try-swift.png`
        },
        {
          name: `Let'Swift 17`,
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Swift Beginner’s Workshop`,
          date: `Sept 22th, 2017`,
          logo: `lets-swift17.png`
        },
        {
          name: 'Swift Korea Meetup',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change`,
          title: `Swift Beginner’s Workshop`,
          date: `May 30th, 2017`,
          logo: `swift-korea.png`
        }
      ]
    }
  }
}
</script>





<style lang="scss">
@import '../styles/about.scss';
</style>
