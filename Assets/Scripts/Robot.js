#pragma strict

private var animator: Animator;
public var speed: float;
public var rotationSpeed: float;

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
	this.transform.Rotate(Vector3.down * Time.deltaTime * this.rotationSpeed);
}

private function turnRight() {
	this.transform.Rotate(Vector3.up * Time.deltaTime * this.rotationSpeed);
}

private function moveForward() {
	animator.SetInteger('Speed', 2);
	this.transform.Translate(Vector3.forward * this.speed * Time.deltaTime);
}

private function moveBackward() {
	animator.SetInteger('Speed', 2);
	this.transform.Translate(Vector3.back * this.speed * Time.deltaTime * 0.5);
}
