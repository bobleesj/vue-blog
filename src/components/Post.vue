<template lang="pug">
.post
  .post-header
    .post-header-profile
      img(src="../assets/bob-profile.png" )
    .post-header-author
      .post-header-author-name
        span(id="author-name") Bob Lee
      .post-header-author-bio
        span(id="author-bio") iOS Instructor from South Korea. Love cooking and helping others build great product
      .post-header-post-summary
        span(id="post-description") 5 min read • Feb 29th, 2017
  .post-description
    .post-description-title
      h1 How to become an iOS developer
    .post-description-subtitle
      h2 iOS Development is hard. Embrace it and deal with it.
    .post-description-cover
      img(src="../assets/small-thumbnail-placeholder.png" id="cover-photo")
  .post-content
    h3 Why Completion Handlers
    p Before we dive into a technical aspect, let’s talk about what it means to use completion handlers. Assume the user is updating an app while using it. You definitely want to notify the user when it is done. You possibly want to pop up a box that says,“Congratulations, now, you may fully enjoy!”
    p So, how do you run a block of code only after the download has been completed? Further, how do you animate certain objects only after a view controller has been moved to the next? Well, we are going to find out how to design one like a boss.

    h3 Why Completion Handlers
    p Before we dive into a technical aspect, let’s talk about what it means to use completion handlers. Assume the user is updating an app while using it. You definitely want to notify the user when it is done. You possibly want to pop up a box that says,“Congratulations, now, you may fully enjoy!”
    p So, how do you run a block of code only after the download has been completed? Further, how do you animate certain objects only after a view controller has been moved to the next? Well, we are going to find out how to design one like a boss.
  .post-footer
  .post-share
  .post-comment
</template>

<style lang="scss">
@import '../styles/post';
</style>
