var light = new THREE.PointLight(0xffffff, 2, 6);
light.position.set(0, 1, 1);
scene.add(light);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	var x = camera.position.x;
    var z = camera.position.z;
    camera.position.x = x * Math.cos(0.005) + z * Math.sin(0.005);
    camera.position.z = z * Math.cos(0.005) - x * Math.sin(0.005);
    camera.lookAt(scene.position);

	renderer.render( scene, camera );
};

animate();