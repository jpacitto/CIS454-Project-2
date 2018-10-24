var light = new THREE.PointLight(0xffffff, 2, 6);
light.position.set(0, 1, 1);
scene.add(light);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var cameraRotate = 0;

var animate = function () {
	requestAnimationFrame( animate );

	var x = camera.position.x;
    var z = camera.position.z;

    camera.position.x = x * Math.cos(cameraRotate) + z * Math.sin(cameraRotate);
    camera.position.z = z * Math.cos(cameraRotate) - x * Math.sin(cameraRotate);

    camera.lookAt(scene.position);

	renderer.render( scene, camera );
};

animate();