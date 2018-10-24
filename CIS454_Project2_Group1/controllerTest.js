//Button 0: A
//Button 1: B
//Button 2: X
//Button 3: Y
//Button 4: Left Bumper
//Button 5: Right Bumper
//Button 6: Left Trigger
//Button 7: Right Trigger
//Button 8: Select
//Button 9: Start
//Button 10: L3
//Button 11: R3
//Button 12: D-pad up
//Button 13: D-pad down
//Button 14: D-pad left
//Button 15: D-pad right


$(window).on("gamepadconnected", function() {
	console.log("Gamepad Connected");
});

$(window).on("gamepaddisconnected", function() {
	console.log("Gamepad Disconnect")
});

var state = 0;
var i = 0;
var controller;

function loop()
{
 	controller= navigator.getGamepads()[0];
	i = getButton(controller);
	if(controller.buttons[i].pressed && state == 0)
	{
		state = 1;
		console.log(i + " button pressed");

		console.log(cube1.position.x + " : " + cube2.position.x);
		
		if(i == 15 && cube2.position.x < 1.4)
		{
			cube2.position.x += 0.1;
		}
		else if(i == 14 && cube2.position.x > -1.4)
		{
			cube2.position.x -= 0.1;
		}
		else if(i == 12 && cube2.position.y < 1.4)
		{
			cube2.position.y += 0.1;
		}
		else if(i == 13 && cube2.position.y > -1.4)
		{
			cube2.position.y -= 0.1;
		}
		else if(i == 3 && cube2.position.z > -1.4)
		{
			cube2.position.z -= 0.1;
		}
		else if(i == 0 && cube2.position.z < 1.4)
		{
			cube2.position.z += 0.1;
		}
		else if(i == 7)
		{
			plane1.material.color.setHex(0x9359BB)
			plane2.material.color.setHex(0xB6B029)
		}
		else if(i == 6)
		{
			plane1.material.color.setHex(0xCF2C2C);
			plane2.material.color.setHex(0x29B69C);
		}
	}

	if(controller.buttons[i].pressed == false && state == 1)
	{
		state = 0;
	}

	if(controller.axes[0] > 0.5)
	{
		cameraRotate = 0.01;
	}
	else if(controller.axes[0] < -0.5)
	{
		cameraRotate = -0.01;
	}
	else
	{
		cameraRotate = 0;
	}

	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

function getButton(controller)
{

	for(var i = 0; i < controller.buttons.length; i++)
	{
		if(controller.buttons[i].pressed)
		{
			return i;
		}
	}
	return 0;
}