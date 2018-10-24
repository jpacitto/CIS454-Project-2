var light = new THREE.PointLight(0xffffff, 2, 6);
light.position.set(0, 1, 1);
scene.add(light);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );

var material1 = new THREE.MeshPhongMaterial( { color: 0x00ff00 } );
cube1 = new THREE.Mesh( geometry, material1 );
scene.add( cube1 );

var material2 = new THREE.MeshPhongMaterial( { color: 0xffffff } );
cube2 = new THREE.Mesh( geometry, material2 );
scene.add( cube2 );

var material3 = new THREE.MeshPhongMaterial( { color: 0xffffff } );
cube3 = new THREE.Mesh( geometry, material3 );
scene.add( cube3 );

randomPosition(cube1);
randomPosition(cube2);
randomPosition(cube3);

var cameraRotate = 0;

var animate = function () 
{
	requestAnimationFrame( animate );

	var x = camera.position.x;
    var z = camera.position.z;

    camera.position.x = x * Math.cos(cameraRotate) + z * Math.sin(cameraRotate);
    camera.position.z = z * Math.cos(cameraRotate) - x * Math.sin(cameraRotate);

    camera.lookAt(scene.position);

    checkCubes();

	renderer.render( scene, camera );
};

animate();

function randomPosition(cube)
{
	cube.position.x = (Math.random() * (1.5 + 1.5) - 1.5).toFixed(2);
	cube.position.y = (Math.random() * (1.5 + 1.5) - 1.5).toFixed(2);
	cube.position.z = (Math.random() * (1.5 + 1.5) - 1.5).toFixed(2);
}

function checkCubes()
{
	if(cube1.position.x == cube2.position.x && cube1.position.x == cube3.position.x)
	{
		randomPosition(cube1);
		randomPosition(cube2);
		randomPosition(cube3);
	}
}