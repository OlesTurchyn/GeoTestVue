<template>



<body class="main">
     <div id="globe"></div>
    <div class = "Title">
        <h1>GeoTest.io</h1>
    </div>
    <div class="container">
        <router-link id="playBtn" to="/play">Play</router-link> 
        <router-link id="aboutBtn" to="/about">About</router-link> 
    </div>
</body>

<div id="globeContainer">
    <Globe id="globe"/>
</div>


<router-view />

</template>

<script setup>
import Globe from '../components/d3Globe.vue'
</script>

<style>

* {
    padding: 0;
    margin: 0;
    outline: 0;
    overflow: hidden;
  }

    *, *::after, *::before {
    box-sizing: border-box;
  }

html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

.main{
    /* background-image:url('src/assets/world.svg');
    background-size:contain;
    background-position: 1px;
    background-repeat: no-repeat; */
    /* backdrop-filter: blur(4px); */
    /* filter:blur(4px); */
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: fixed;
    z-index: 4;
}

#globeContainer{
    position:absolute;
    height: 100%;
    width: 100%;
    overflow:hidden;
}


.Title{
    color:black;
    font-size: 3.0rem;
    text-align: center;
    padding: 20px;
    margin-bottom: 2rem;
    position: relative;
    top: 27%;

}

.container{
    margin-left:40%;
}

#globe {
    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode:forward;
}

@keyframes fadeInAnimation {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


#playBtn {
    text-align: left;
    position:absolute;
    top: 48%;
    left: 46%;
    background-color: black;
    border: none;
    color: white;
    padding: 15px 32px;
    display: block;
    font-size: 16px;
    border-radius: 10px;
    border: 2px solid #19024e;
    transition-duration: 0.1s;
    margin-bottom:10px;

}

#playBtn:hover{
    cursor:pointer;
    background-color: black; 
    font-size: 17px;
}

#aboutBtn{
    text-align: center;
    position:absolute;
    top: 57%;
    left: 46%;
    background-color: black;
    border: none;
    color: white;
    max-width: 100px;
    padding: 15px 32px;
    display:block;
    font-size: 16px;
    border-radius: 10px;
    border: 2px solid #19024e;
    transition-duration: 0.1s;

}

#aboutBtn:hover{
    cursor:pointer;
    background-color: rgb(0, 0, 0); 
    font-size: 17px;
}

 #overlay {
    position: fixed;
    opacity: 0;
    transition: 200ms ease-in-out;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
    backdrop-filter: blur(1px);
  }
  
  #overlay.active {
    opacity: 1;
    pointer-events: all;
  }

</style>