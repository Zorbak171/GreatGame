#pragma strict

private var animator: Animator;
public var speed: float = 0.5;
public var rotationSpeed: float = 0.5;

function Start () {
	animator = this.GetComponent(Animator);
}

function Update () {
	if(Input.GetKey(KeyCode.W))
		moveForward();
	else if(Input.GetKey(KeyCode.S))
		moveBackward();
	else
		animator.SetInteger('Speed', 0);

	if(Input.GetKey(KeyCode.A))
		turnLeft();
	else if(Input.GetKey(KeyCode.D))
		turnRight();
	
}

private function turnLeft() {
	this.transform.rotation.y += this.rotationSpeed;
}

private function turnRight() {
	this.transform.rotation.y -= this.rotationSpeed;
}

private function moveForward() {
	animator.SetInteger('Speed', 2);
	this.transform.position.z -= this.speed;
	this.transform.rotation.y = 180;
}

private function moveBackward() {
	animator.SetInteger('Speed', 2);
	this.transform.position.z += this.speed;
	this.transform.rotation.y = 0;
}
