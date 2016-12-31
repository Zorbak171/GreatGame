#pragma strict

private var animator: Animator;
private var timeAlive: int = 0;
private var lastJumpTime: int = 0;

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

	if(canJump() && Input.GetKey(KeyCode.Space))
		this.lastJumpTime = jump();
	else if(Input.GetKey(KeyCode.LeftControl))
		crouch();
	else
		uncrouch();
	
	this.timeAlive += Time.deltaTime * 1000;
}

private function uncrouch() {
	animator.SetBool('Crouch', false);
}

private function crouch() {
	animator.SetBool('Crouch', true);
}

private function canJump() {
	if(this.timeAlive - this.lastJumpTime > 500) {
		if(animator.GetBool('Jumping')) {
			animator.SetBool('Jumping', false);
			this.lastJumpTime = this.timeAlive;
			return false;
		}
		return true;
	} else
		return false;
}

private function jump() {
	animator.SetBool('Jumping', true);
	return this.timeAlive;
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
