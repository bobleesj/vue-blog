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
          description: `Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change. <br /> My desire is to see more people coding in Swift and making great apps. If you have any interest in making iOS applications you are in the right place. Check out our articles, watch some free tutorials on our YoutTube channel, and, please, download the intermediate course with Bob if you want to go to the next level. All of these resources are here to help you become the best developer you can be, and, of course, you can always contact Bob or me. We are here to see you succeed. Now let’s get coding!`,
          twitter: 'https://www.twitter.com/bobleesj',
          linkedin: 'https://www.linkedin.com/bobthedev',
          github: 'https://www.github.com/bobthedev',
          img: `https://cdn.bobthedeveloper.io/assets/team/raphael.png`
        },
        {
          name: 'Ale 🇦🇷',
          role: 'Content Distributor in Spanish',
          description: "Alejandro has over 15 years of experience with coding in general (mostly web, backend and mobile platforms). He's been an Apple head for almost all his life, since the first Macintosh. He has a true passion on code (always trying to get better), and to help the community, giving back the help and awesomeness that they also gift to him. He has also taught Spanish as a foreign language, but he also enjoys learning and working with code (from open source projects, tutorials and articles). It does not settle with one language, and because of this I know about Swift, PHP, Ruby, Python and JavaScript, among others. On his free time, he likes to read sci-fi novels, watch a huge amount of tv shows or just relax and listen to music.",
          twitter: 'https://twitter.com/alemohamad',
          linkedin: 'https://www.linkedin.com/in/alemohamad/',
          github: 'https://github.com/alemohamad',
          website: `hello@alemohamad.com`,
          img: `https://cdn.bobthedeveloper.io/assets/team/ale.png`
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
