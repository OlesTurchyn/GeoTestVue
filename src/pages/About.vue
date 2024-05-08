<template>

  <div id="Bar">
    <h1 style="color:white">About</h1>
    <router-link id="backBtn" to="/" @click="location.reload()">Home</router-link>
  </div>

  <div id="text">
    <h3>What is this?</h3>
  <p>GeoTest.io is a small web project aimed at refining software engineering skills while exploring geography.</p>
  <br>
  <h3>How do I play?</h3>
  <p>To play, simply click on a country and enter what you think its name is. 
    If correct, the country turns green, and you earn a point. Otherwise, it turns red.
  </p>
  <br>
  <h3>Is this the final version?</h3>
  <p>No. There are still many bugs to fix and features to add. I continuously revisit this project 
    as I learn in school or work.
  </p>
  <br>
  <h3>What technologies are used?</h3>
  <p>Initially, this project was built using HTML, CSS, and JavaScript. However, after working with 
    Vue.js during an internship, I decided to refactor the code using this framework. Vue enables 
    dynamic components that can be reused throughout the project.
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
  margin-left: 15%;
  margin-right: 15%;
  text-align: left;
  color: black;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;

}

#footer{
  color:rgb(40, 40, 40);
  margin-top:25%;
}

</style>