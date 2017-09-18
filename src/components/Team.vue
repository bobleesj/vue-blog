<!--  Template  -->
<template lang="pug">
.team
  .team-header
    h1 Team Bob the Developer
    h2 We work together to bring top-quality content
  .team-member(v-for="member in members")
     .team-member-header
       .team-member-header-profile
         img(:src="member.img" id="member-profile")
       .team-member-header-social
         a(:href="member.twitter" id="twitter") #[img(src="../assets/icons/twitter-dark-logo.png")]
         a(:href="member.linkedin" id="linkedin") #[img(src="../assets/icons/linkedin-dark-logo.png")]
         a(:href="member.github" id="github") #[img(src="../assets/icons/github-dark-logo.png")]
     .team-member-body
       h3 {{ member.name }}
       h4 {{ member.role }}
       p(v-html="member.description")
  .team-footer
    span Interested in joining Team Bob the Developer? #[a(href="https://team.bobthedeveloper.io" target="_blank") Learm More]
</template>

<!--  Vue  -->
<script scope>
export default {
  data () {
    return {
      name: 'Team',
      members: [
        {
          name: 'Raphael 🇺🇸',
          role: 'Content Distributor in Spanish',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change. <br />
          On a whim one day, I decided to try and make an iOS game not knowing anything about development. I quickly learned how in over my head I was, but what kept me going was my immediate love for Swift and coding itself. I love the strain of working through challenging problems and the elation of finally breaking through. I love helping people become better programmers, and that is what led me to Bob. Working with Bob has allowed me to help people change their work, their lives, and even the world all through doing what I love <br /> My desire is to see more people coding in Swift and making great apps. If you have any interest in making iOS applications you are in the right place. Check out our articles, watch some free tutorials on our YoutTube channel, and, please, download the intermediate course with Bob if you want to go to the next level. All of these resources are here to help you become the best developer you can be, and, of course, you can always contact Bob or me. We are here to see you succeed. Now let’s get coding!`,
          twitter: 'https://www.twitter.com/bobleesj',
          linkedin: 'https://www.linkedin.com/bobthedev',
          github: 'https://www.github.com/bobthedev',
          img: `https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png`
        },
        {
          name: 'Bobby',
          role: 'Content Distributor in Spanish',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change. <br />
          On a whim one day, I decided to try and make an iOS game not knowing anything about development. I quickly learned how in over my head I was, but what kept me going was my immediate love for Swift and coding itself. I love the strain of working through challenging problems and the elation of finally breaking through. I love helping people become better programmers, and that is what led me to Bob. Working with Bob has allowed me to help people change their work, their lives, and even the world all through doing what I love`,
          twitter: 'https://www.twitter.com/bobleesj',
          linkedin: 'https://www.linkedin.com/bobthedev',
          github: 'https://www.github.com/bobthedev',
          img: `https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png`
        },
        {
          name: 'Banana',
          role: 'Content Distributor in Spanish',
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change. <br />
          On a whim one day, I decided to try and make an iOS game not knowing anything about development. I quickly learned how in over my head I was, but what kept me going was my immediate love for Swift and coding itself. I love the strain of working through challenging problems and the elation of finally breaking through. I love helping people become better programmers, and that is what led me to Bob. Working with Bob has allowed me to help people change their work, their lives, and even the world all through doing what I love`,
          twitter: 'https://www.twitter.com/bobleesj',
          linkedin: 'https://www.linkedin.com/bobthedev',
          github: 'https://www.github.com/bobthedev',
          img: `https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png`
        }
      ]
    }
  }
}
</script>

<!--  SCSS  -->
<style lang="scss">
@import '../styles/team.scss';
</style>
