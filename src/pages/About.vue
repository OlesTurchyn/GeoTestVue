<template>

  <div id="Bar">
    <h1 style="color:white">About</h1>
    <router-link id="backBtn" to="/" @click="location.reload()">Home</router-link>
  </div>

  <div id="text">
    <h3>What is this?</h3>
    <p>GeoTest.io is a small web project that was built with the intention of practicing some software engineering skills
      while studying geography.</p>
      <p>&nbsp;</p>
    <h3>How do I play?</h3>
    <p>To play, simply click on a country and enter in what you think the name is. 
      If you are correct, a point will be added and the country will turn green. Otherwise, the country will turn 
      red. 
    </p>
    <p>&nbsp;</p>
    <h3>Is this the final version?</h3>
    <p>No. There are still many bugs to fix and features to add. As I keep learning in school or work, 
      I like to keep coming back to this project.
    </p>
    <p>&nbsp;</p>
    <h3>What technologies are used?</h3>
    <p>This project originally started out to be purely HTML, CSS, and JAVASCRIPT. However, I started working with
      Vue.js during an internship and decided to re-work the code with this framework. Vue allows me to make dynamic 
      components that can be re-used across the project. 
    </p>
   
    <div id="footer">
      <p>Made by Oleksander Turchyn in Ottawa, Canada</p>
    </div>
    
  </div>
   
</template>

<style>

#backBtn {
  position:absolute;
  z-index: 2;
  top:25%;
  left:89%;
  color: white;
  cursor: pointer;
  font-family: Verdana;
  font-size: 16px;
  float:left;

  transition-duration: 0.1s;
}

#text{
  position: absolute;
  height: 500px;
  height: 300px;
  top:50px;
  margin-left: 5%;
  margin-right: 5%;
  text-align: left;
  color: black;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
}

#footer{
  color:darkblue;
  margin-top:25%;
}

</style>