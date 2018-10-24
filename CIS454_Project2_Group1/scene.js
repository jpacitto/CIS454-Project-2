//create scene and camera
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.5, 2000 );

//create renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//same material and geometry for each wall
var planeGeo = new THREE.PlaneGeometry(4, 4);
var planeMat = new THREE.MeshPhongMaterial({ color : 0xffffff });

//left wall
var plane1 = new THREE.Mesh(planeGeo, planeMat);
plane1.rotation.y = Math.PI / 2;
plane1.position.x = -2;
scene.add(plane1);

//right wall
var plane2 = new THREE.Mesh(planeGeo, planeMat);
plane2.rotation.y = -Math.PI / 2;
plane2.position.x = 2;
scene.add(plane2);

//back wall
var plane3 = new THREE.Mesh(planeGeo, planeMat);
plane3.position.z = -2;
scene.add(plane3);

//top wall
var plane4 = new THREE.Mesh(planeGeo, planeMat);
plane4.rotation.x = Math.PI / 2;
plane4.position.y = 2;
scene.add(plane4);

//bottom wall
var plane5 = new THREE.Mesh(planeGeo, planeMat);
plane5.rotation.x = -Math.PI / 2;
plane5.position.y = -2;
scene.add(plane5);

//front wall
var plane6 = new THREE.Mesh(planeGeo, planeMat);
plane6.position.z = 2;
plane6.rotation.y = Math.PI;
scene.add(plane6);