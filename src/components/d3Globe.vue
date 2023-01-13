
<template>
  <div ref="globe" style="height:1000px; width:2000px; align:center; overflow: hidden;" ></div>
</template>

<script setup>
import * as THREE from 'three'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import { onMounted, ref } from 'vue'
const globe = ref(null)

onMounted(() => {
  var radius = 220,
    mesh,
    graticule,
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(90, globe.value.clientWidth/globe.value.clientHeight, 1, 1000),
    renderer = new THREE.WebGLRenderer({ alpha: true })

  camera.position.z = 250;
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(globe.value.clientWidth, globe.value.clientHeight)
  globe.value.appendChild(renderer.domElement)

  fetch('https://unpkg.com/world-atlas@1/world/50m.json')
    .then(res => res.json())
    .then(topology => {
      scene.add(
        (graticule = wireframe(
          graticule10(),
          new THREE.LineBasicMaterial({ color: 0xCCCCCC })
        ))
      )
      scene.add(
        (mesh = wireframe(
          topojson.mesh(topology, topology.objects.land),
          new THREE.LineBasicMaterial({ color: 0x000000 })
        ))
      )
      d3.timer(function (t) {
        graticule.rotation.x = mesh.rotation.x =
          (Math.sin(t / 11000) * Math.PI) / 3 - Math.PI / 2
        graticule.rotation.z = mesh.rotation.z = t / 10000
        renderer.render(scene, camera)
      })
    })

  // Converts a point [longitude, latitude] in degrees to a THREE.Vector3.
  function vertex (point) {
    var lambda = (point[0] * Math.PI) / 180,
      phi = (point[1] * Math.PI) / 180,
      cosPhi = Math.cos(phi)
    return new THREE.Vector3(
      radius * cosPhi * Math.cos(lambda),
      radius * cosPhi * Math.sin(lambda),
      radius * Math.sin(phi)
    )
  }

  // Converts a GeoJSON MultiLineString in spherical coordinates to a THREE.LineSegments.
  function wireframe (multilinestring, material) {
    var points = []
    multilinestring.coordinates.forEach(function (line) {
      d3.pairs(line.map(vertex), function (a, b) {
        points.push(a, b)
      })
    })
    var geometry = new THREE.BufferGeometry().setFromPoints(points)
    return new THREE.LineSegments(geometry, material)
  }

  // See https://github.com/d3/d3-geo/issues/95
  function graticule10 () {
    var epsilon = 1e-6,
      x1 = 180,
      x0 = -x1,
      y1 = 80,
      y0 = -y1,
      dx = 10,
      dy = 10,
      X1 = 180,
      X0 = -X1,
      Y1 = 90,
      Y0 = -Y1,
      DX = 90,
      DY = 360,
      x = graticuleX(y0, y1, 2.5),
      y = graticuleY(x0, x1, 2.5),
      X = graticuleX(Y0, Y1, 2.5),
      Y = graticuleY(X0, X1, 2.5)

    function graticuleX (y0, y1, dy) {
      var y = d3.range(y0, y1 - epsilon, dy).concat(y1)
      return function (x) {
        return y.map(function (y) {
          return [x, y]
        })
      }
    }

    function graticuleY (x0, x1, dx) {
      var x = d3.range(x0, x1 - epsilon, dx).concat(x1)
      return function (y) {
        return x.map(function (x) {
          return [x, y]
        })
      }
    }

    return {
      type: 'MultiLineString',
      coordinates: d3
        .range(Math.ceil(X0 / DX) * DX, X1, DX)
        .map(X)
        .concat(d3.range(Math.ceil(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(
          d3
            .range(Math.ceil(x0 / dx) * dx, x1, dx)
            .filter(function (x) {
              return Math.abs(x % DX) > epsilon
            })
            .map(x)
        )
        .concat(
          d3
            .range(Math.ceil(y0 / dy) * dy, y1 + epsilon, dy)
            .filter(function (y) {
              return Math.abs(y % DY) > epsilon
            })
            .map(y)
        )
    }
  }
})
</script>
