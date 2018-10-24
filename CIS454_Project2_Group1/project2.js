var light = new THREE.PointLight(0xffffff, 2, 6);
light.position.set(0, 1, 1);
scene.add(light);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var geometry = new THREE.BoxGeometry(1,1,1);
var groundMirror = new THREE.Reflector( geometry, {
	clipBias: 0.003,
	textureWidth: WIDTH * window.devicePixelRatio,
	textureHeight: HEIGHT * window.devicePixelRatio,
	color: 0x777777,
	recursion: 1
} );
groundMirror.position.y = 0.5;
groundMirror.rotateX( - Math.PI / 2 );
scene.add( groundMirror );

camera.position.z = 4;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();