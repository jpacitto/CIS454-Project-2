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
	console.log("Gamepad Connected")
});

var state = 0;
var i = 0;
var controller;

function loop()
{
 	controller= navigator.getGamepads()[1];
	i = button(controller);

	if(controller.buttons[i].pressed && state == 0)
	{
		state = 1;
		console.log(i + " button pressed");
	}

	if(controller.buttons[i].pressed == false && state == 1)
	{
		state = 0;
	}

	window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

function button(controller)
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