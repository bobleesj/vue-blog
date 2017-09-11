<!--  Template  -->
<template>
  <div class="team">
    <h1>Team</h1>
    <div v-for="member in members">
      <div v-html="member.img" />
      <h2>{{ member.name }}</h2>
      <h3>{{ member.role }}</h3>
      <p>{{ member.description }}</p>
    </div>
  </div>
</template>

<!--  Vue  -->
<script>
export default {
  data () {
    return {
      name: 'Team',
      members: [
        {
          name: 'Bob',
          role: 'Content Distributor in Spanish',
          description: 'Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change.',
          img: '<img src="https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png" />'
        },
        {
          name: 'Bobby',
          role: 'Content Distributor in Spanish',
          description: 'Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change.',
          img: '<img src="https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png" />'
        },
        {
          name: 'Banana',
          role: 'Content Distributor in Spanish',
          description: 'Born and raised in California. I moved up to Oregon in 2010 to study psychology and Spanish at the University of Oregon. While in college, I thought for sure I was going to be a therapist, but after taking multiple courses in psychology and hating most of them I knew something had to change',
          img: '<img src="https://www.bobthedeveloper.io/img/profiles/team/raphael-profile.png" />'
        }
      ]
    }
  },
  methods: {
    updateImg: function () {
      console.log('updateImg called')
    }
  },
  created: function () {
    this.name = 'Bob Lee'
  }
}
</script>

<!--  SCSS  -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

img {
  width: 100px;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
