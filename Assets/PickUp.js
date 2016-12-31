#pragma strict

private var attached: boolean = false;

function Start () {
	
}

function Update () {
	if(this.attached) {
		this.transform.localPosition = new Vector3(0.038, 0.0127, -0.0066);
		this.transform.localRotation.eulerAngles = new Vector3(-20.286, 90, -90); 
		this.GetComponent(Rigidbody).useGravity = false;
	}
}

public function OnCollisionEnter(col: Collision) {
	
	if(col.gameObject.tag == 'Player') {
//	Debug.Log();
		this.transform.parent = col.gameObject.transform.Find('Armature/Hips/Spine/Chest/Arm_Upper_R/Arm_Lower_R/Hand_R');
		this.attached = true;
	}
}
