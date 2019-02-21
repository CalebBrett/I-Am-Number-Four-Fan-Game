

var distance;
var Target : Transform;


function Update () 
{
	Target = GameObject.Find("Player(Clone)").transform;
	distance = Vector3.Distance(Target.position, transform.position);
	if(distance < 20.0F)
	{
		var rotation = Quaternion.LookRotation(Target.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime);
	}
	if(distance < 10.0F)
	{
		transform.Translate(Vector3.forward * 5 * Time.deltaTime);
	}
	//if(this.transform.position.y - 3 < 0 )
}