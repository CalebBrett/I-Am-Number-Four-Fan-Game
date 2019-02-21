using UnityEngine;
using System.Collections;

public class Sprint : MonoBehaviour 
{
	public CharacterMotor CM;
	public float walkSpeed, SprintSpeed;

	// Use this for initialization
	void Start () 
	{
		CM = (CharacterMotor)GetComponent<CharacterMotor> ();
		walkSpeed = CM.movement.maxForwardSpeed;
		SprintSpeed = walkSpeed * 2;

	}
	
	// Update is called once per frame
	void Update () 
	{
		if (Input.GetKeyDown (KeyCode.LeftShift)) 						//Sprint
		{
			CM.movement.maxForwardSpeed = SprintSpeed;
		}
		if (Input.GetKeyUp (KeyCode.LeftShift)) 
		{
			CM.movement.maxForwardSpeed = walkSpeed;
		}

		if (Input.GetKeyDown (KeyCode.LeftControl))						//Crouch
		{
			this.transform.localScale -= new Vector3(0,0.5F,0);
		}
		if (Input.GetKeyUp (KeyCode.LeftControl))
		{
			this.transform.position += new Vector3 (0,1,0);
			this.transform.localScale += new Vector3(0,0.5F,0);
		}
	}
}
