var Pnum : int;
var skin : GUISkin;
var curloc : Vector3;
var PauseMenu : Rect = Rect(300, 10, 1200, 700);
var isPause : boolean = false;
var mouse : GameObject;
var Spawn : Vector3;
var HealthBar : GameObject;
static var Health : int = 200;
var StaminaBar : GameObject;
static var Stamina : int = 200;
var regen : boolean = true;
static var abilityNum : int;
var player : GameObject;


var	skin6 : GUISkin;
var sixmenu : Rect = Rect(300, 10, 1200, 700);
var menu6 : boolean = false;
static var element : int;
var stormView : GameObject;
var normSky : Material;
var stormySky : Material;
var sun : GameObject;
var Invis : boolean = false;
var WaterFx : GameObject;


var FrostFX : GameObject;
var IceSpikes : GameObject;
var CanIce : boolean = true;
var SingleIce : GameObject;
var TargetPos : Vector3;
var IcePath : GameObject;
var OnWater : boolean = false;

var destination2 : Transform;
var HydrolocomotionPlatform : GameObject;

var gravity : Vector3;
var supspeed : boolean = false;
var SupSprintSpeed : float;
var WalkSpeed : float;
var CM : CharacterMotor;
var isdown : boolean;
var onwall : boolean;

var Rock : boolean = false;
var RockObj : GameObject;

function Start () 
{	
	if(Difficulty.player == 1)
	{
		Pnum = 1;
	}
	if(Difficulty.player == 2)
	{
		Pnum = 2;
	}
	if(Difficulty.player == 3)
	{
		Pnum = 3;
	}
	if(Difficulty.player == 4)
	{
		Pnum = 4;
	}
	if(Difficulty.player == 5)
	{
		Pnum = 5;
	}
	if(Difficulty.player == 6)
	{
		Pnum = 6;
	}
	if(Difficulty.player == 7)
	{
		Pnum = 7;
	}
	if(Difficulty.player == 8)
	{
		Pnum = 8;
	}
	if(Difficulty.player == 9)
	{
		Pnum = 9;
	}
	if(Difficulty.player == 10)
	{
		Pnum = 10;
	}
	if(Difficulty.player == 0)
	{
		Difficulty.candes = false;
		Application.LoadLevel (1);
	}
	else
	{
		Difficulty.candes = true;
	}
	Screen.lockCursor = true;
	Spawn = this.transform.position;
	regen = true;
	element = 0;
	gravity = Physics.gravity;
	CM = GetComponent(CharacterMotor);
	WalkSpeed = CM.movement.maxForwardSpeed;
	SupSprintSpeed = WalkSpeed *5;	
	player = this.gameObject;
	stormView = GameObject.Find("Storm");
	sun = GameObject.Find("sun");
	StaminaBar = GameObject.Find("Stamina-Bar");
	HealthBar = GameObject.Find("Health-Bar");
	
	/*if(Difficulty.player == 0)
	{
		Difficulty.candes = false;
		Application.LoadLevel (1);
	}
	*/
}

function Update () 
{	
	HealthBar.guiTexture.pixelInset.width = Health;            //setting stuff
	StaminaBar.guiTexture.pixelInset.width = Stamina;
	var mouseLook = GetComponent.<MouseLook>();
	curloc = this.transform.position;
	Physics.gravity = gravity;
	
	
	if(Input.GetKeyDown(KeyCode.Escape) && menu6 == false || Input.GetKeyDown(KeyCode.P) && menu6 == false)
	{
		Difficulty.candes = false;
        mouseLook.enabled = !mouseLook.enabled;					//pause
        Screen.lockCursor = false;
        isPause = !isPause;
		if(isPause)
		{
			Time.timeScale = 0;
		}
		else
		{
			Screen.lockCursor = true;
			Time.timeScale = 1;
		}

  	}
  	if(Health < 1)												//Status Bars
  	{
  		Health = 200;
  		Stamina = 200;
  		this.transform.position = Spawn;
  	}
  	if(Stamina < 200 && regen == true)
  	{
  		RegenS();
  	}
  	
  	if(Input.GetKeyDown (KeyCode.Escape) && menu6 == true)  		
  	{
  		menu6 = false;
		mouseLook.enabled = !mouseLook.enabled;
        Screen.lockCursor = true;
  	}
  	

	if (Pnum == 6)															//Six
	{

		Invisibility();

		if(Input.GetKeyDown (KeyCode.Alpha1))
		{
			abilityNum = 1;
		}
		if(Input.GetKeyDown (KeyCode.Alpha2))
		{
			abilityNum = 2;
		}
		if(Input.GetButtonDown ("Fire1") && abilityNum == 1 && element == 0)
		{
			mouseLook.enabled = !mouseLook.enabled;
			Screen.lockCursor = false;
			menu6 = true;
		}
		if(Input.GetKeyDown (KeyCode.F))
		{
			Invis = !Invis;

			if(Invis == false)
			{
				GameObject.Find("Graphics").SetActive(true);
				GameObject.Find("ARM-L").GetComponent(MeshRenderer).active = true;
				GameObject.Find("ARM-R").GetComponent(MeshRenderer).active = true;
				GameObject.Find("LEG-R").GetComponent(MeshRenderer).active = true;
			}
		}
		if(Input.GetKeyDown (KeyCode.E))
		{
			GameObject.Find("ARM-R").animation.Play("rightpunch");
		}
		if(Input.GetKeyDown (KeyCode.Q))
		{
			GameObject.Find("ARM-L").animation.Play("leftpunch");
		}
		if(Input.GetKeyDown (KeyCode.CapsLock))
		{
			GameObject.Find("LEG-R").animation.Play("Kick");
		}
		
	}
	
	if(Pnum == 7)																	//Seven
	{
		if(sun.light.intensity < 0.5F)
		{
			GameObject.Find("NightVison").light.enabled = true;
		}
		if(Input.GetKeyDown (KeyCode.Alpha1))
		{
			abilityNum = 1;
		}
		if(Input.GetKeyDown (KeyCode.Alpha2))
		{
			abilityNum = 2;
		}
		
		if(Input.GetKeyDown (KeyCode.F))
		{
			supspeed = !supspeed;
		}
		
		if (Input.GetKeyDown (KeyCode.LeftShift) && supspeed == true) 						
		{
			CM.movement.maxForwardSpeed = SupSprintSpeed;
		}
		if (Input.GetKeyUp (KeyCode.LeftShift)) 
		{
			CM.movement.maxForwardSpeed = WalkSpeed;
		}
		
		if(Input.GetButtonDown ("Fire1") && abilityNum == 1)
		{
			IceSpike();
		}

		if(Input.GetButtonDown ("Fire2") && abilityNum == 1)
		{
			var hit1 : RaycastHit;
			var ray1 = Camera.main.ScreenPointToRay (Input.mousePosition);
			if(Physics.Raycast (ray1, hit1, 100))
			{
				if(hit1.transform.position.x != -1000.0)
				{
					TargetPos = hit1.transform.position;
					SingleTargetIce();
				}
			}
		}
		if(OnWater && abilityNum == 1)
		{
			IcePathOnWater();
		}

		if(Input.GetKeyDown (KeyCode.E))
		{
			GameObject.Find("ARM-R").animation.Play("rightpunch");
		}
		if(Input.GetKeyDown (KeyCode.Q))
		{
			GameObject.Find("ARM-L").animation.Play("leftpunch");
		}
		if(Input.GetKeyDown (KeyCode.CapsLock))
		{
			GameObject.Find("LEG-R").animation.Play("Kick");
		}
	}
	
	if(Pnum == 8)																//Eight
	{
		if(Input.GetKeyDown (KeyCode.Alpha1))
		{
			abilityNum = 1;
		}
		if(Input.GetKeyDown (KeyCode.Alpha2))
		{
			abilityNum = 2;
		}
		
		
		if(Input.GetButtonDown ("Fire1") && abilityNum == 1)
		{
			player.transform.position = destination2.transform.position;
		}
		if(Input.GetButtonDown ("Fire2") && abilityNum == 1)
		{
			var hit : RaycastHit;
			var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
			if(Physics.Raycast (ray, hit, 100))
			{
				if(hit.transform.position.x != -1000.0)
				{
					player.transform.position = hit.transform.position;
					player.transform.rotation = hit.transform.rotation;
					player.transform.position += Vector3.back;
				}
			}
		}
		
		
		if(Input.GetKeyDown (KeyCode.E))
		{
			GameObject.Find("ARM-R").animation.Play("rightpunch");
		}
		if(Input.GetKeyDown (KeyCode.Q))
		{
			GameObject.Find("ARM-L").animation.Play("leftpunch");
		}
		if(Input.GetKeyDown (KeyCode.CapsLock))
		{
			GameObject.Find("LEG-R").animation.Play("Kick");
		}
	}
	
	if(Pnum == 9)																		//Nine  9
	{
		if(Input.GetKeyDown (KeyCode.Alpha1))
		{
			abilityNum = 1;
		}
		if(Input.GetKeyDown (KeyCode.Alpha2))
		{
			abilityNum = 2;
		}
		if(Input.GetKeyDown (KeyCode.F))
		{
			supspeed = !supspeed;
		}
		
		if (Input.GetKeyDown (KeyCode.LeftShift) && supspeed == true) 						
		{
			CM.movement.maxForwardSpeed = SupSprintSpeed;
		}
		if (Input.GetKeyUp (KeyCode.LeftShift)) 
		{
			CM.movement.maxForwardSpeed = WalkSpeed;
		}
		if(isdown)
		{
			 var lastloc = curloc;
			GameObject.Find("Heart").transform.Rotate (Vector3(-90,0,0), -90);
			this.transform.position = lastloc;
			if(onwall == false)
			{
				//player.transform.position += new Vector3(0,-0.1F,0);
			}
		}
		
		if(Input.GetKeyDown (KeyCode.E))
		{
			GameObject.Find("ARM-R").animation.Play("rightpunch");
		}
		if(Input.GetKeyDown (KeyCode.Q))
		{
			GameObject.Find("ARM-L").animation.Play("leftpunch");
		}
		if(Input.GetKeyDown (KeyCode.CapsLock))
		{
			GameObject.Find("LEG-R").animation.Play("Kick");
		}
	}
	
	if (Pnum == 10)																						//ten
	{
		if(Input.GetKeyDown (KeyCode.Alpha1))
		{
			abilityNum = 1;
		}
		if(Input.GetKeyDown (KeyCode.Alpha2))
		{
			abilityNum = 2;
		}
		if(Input.GetKeyDown (KeyCode.F) && GameObject.Find("Heart").transform.localScale.y > 0.3F)
		{
			GameObject.Find("Heart").transform.position += new Vector3(0,1,0);
			GameObject.Find("Heart").transform.localScale -= new Vector3(0,0.1F,0);
		}
		if(Input.GetKeyDown (KeyCode.G) && GameObject.Find("Heart").transform.localScale.y < 1.5F)
		{
			GameObject.Find("Heart").transform.position += new Vector3(0,7,0);
			GameObject.Find("Heart").transform.localScale += new Vector3(0,0.1F,0);
		}
		
		if(Input.GetButtonDown ("Fire1") && abilityNum == 1)
		{
			if(Rock)
			{
				RockObj.transform.position = GameObject.Find("ARM-R").transform.position;
				RockObj.transform.parent = transform;
				RockObj.transform.position += new Vector3(0,-0.5,1);
				RockObj.renderer.material.color = Color.red;
			}
		}
		
		if(Input.GetKeyDown (KeyCode.E))
		{
			GameObject.Find("ARM-R").animation.Play("rightpunch");
		}
		if(Input.GetKeyDown (KeyCode.Q))
		{
			GameObject.Find("ARM-L").animation.Play("leftpunch");
		}
		if(Input.GetKeyDown (KeyCode.CapsLock))
		{
			GameObject.Find("LEG-R").animation.Play("Kick");
		}
	}
}



function OnGUI()
{
	if(isPause)
	{
		GUI.skin = skin;
		GUI.Window(0, PauseMenu, ThePauseMenu, "Pause");
	}
	if(menu6)
	{
		GUI.skin = skin6;
		GUI.Window(0, sixmenu, The6Menu, "Choose an Element");
	}
}
	 
function The6Menu() 
{
	GUILayout.BeginHorizontal();
	if(GUILayout.Button("Storm"))
	{
		menu6 = false;
		element = 1;
		stormView.transform.position = curloc += new Vector3(0,150,0);
		stormView.camera.depth = 1;
		RenderSettings.skybox = stormySky;
		sun.light.intensity = 0.5F;
		var CM = GetComponent.<CharacterMotor>();
		CM.enabled = false;
		Storm.start = true;
		menu6 = false;
	}
	if(GUILayout.Button("Fire"))
	{
		menu6 = false;
	}
	if(GUILayout.Button("Water"))
	{
		element = 3;
		CM.enabled = false;
		menu6 = false;

		var WaterFx = Instantiate (WaterFx, this.transform.position, this.transform.rotation);
		WaterFx.transform.position -= new Vector3(6,3,0);
	}
	GUILayout.EndHorizontal();
}

function ThePauseMenu()
{
	
	if(GUILayout.Button("Main Menu"))
	{
		Application.LoadLevel(0);
	}
	if(GUILayout.Button("Restart"))
	{
		Application.LoadLevel(Application.loadedLevel);
		isPause = false;
		Time.timeScale = 1;
	}
	if(GUILayout.Button("Quit"))
	{
		Application.Quit();
	}
}

function RegenS()
{
	regen = false;
	Powers.Stamina += 2;
	yield WaitForSeconds (2);
	regen = true;
}

function Invisibility()
{
	if(Invis)
	{
		Invis = false;
		Health -= 0.5F;
		if(Input.GetKeyDown (KeyCode.F))
		{
			return;
		}
		yield WaitForSeconds(2);	
		if(Input.GetKeyDown (KeyCode.F))
		{
			return;
		}
		else
		{
		Invis = true;
		}
	}
}

function IceSpike()
{
	if(CanIce)
	{
		CanIce = false;

		if(GameObject.Find("IceSpikeCircle(Clone)") != null)
		{
			var OldIce = GameObject.Find("IceSpikeCircle(Clone)");
			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.1F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIce.transform.Translate (Vector3(0,-0.5F,0));

			Destroy(OldIce);
		}

		if(GameObject.Find("FrostFX(Clone)") != null)
		{
			Destroy(GameObject.Find("FrostFX(Clone)"));
		}

		var FrostFX = Instantiate (FrostFX, this.transform.position, Quaternion.identity);
		FrostFX.transform.parent = this.transform;
		FrostFX.transform.position.y += 2;
		yield WaitForSeconds(1);
		var IceSpikes = Instantiate (IceSpikes, this.transform.position, this.transform.rotation);
		IceSpikes.transform.position -= new Vector3(0,3,0);
		yield WaitForSeconds(0.5F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);

		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		yield WaitForSeconds(0.02F);


		IceSpikes.transform.Translate (Vector3(0,0.5F,0));
		
		CanIce = true;

		yield WaitForSeconds(10);

		if(GameObject.Find("IceSpikeCircle(Clone)") != null)
		{
			var OldIceAfterTime = GameObject.Find("IceSpikeCircle(Clone)");
			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.1F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));
			yield WaitForSeconds(0.05F);

			OldIceAfterTime.transform.Translate (Vector3(0,-0.5F,0));

			Destroy(OldIceAfterTime);
		}
	}
}

function SingleTargetIce()
{
	var SingleIce = Instantiate (SingleIce, TargetPos, this.transform.rotation);
	SingleIce.transform.position -= new Vector3(0,5,0);
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(0.02F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(0.02F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(0.02F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(0.02F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(0.02F);

	SingleIce.transform.Translate (Vector3(0,0.5F,0));
	yield WaitForSeconds(10);


	SingleIce.transform.Translate (Vector3(0,-0.5F,0));
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,-0.5F,0));
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,-0.5F,0));
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,-0.5F,0));
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,-0.5F,0));
	yield WaitForSeconds(0.05F);

	SingleIce.transform.Translate (Vector3(0,-0.5F,0));

	Destroy(SingleIce);

}

function IcePathOnWater()
{
	var IcePath = Instantiate(IcePath, GameObject.Find("Player").transform.position, Quaternion.identity);
	IcePath.transform.position.y -= 0.8F;
	yield WaitForSeconds(30);
	Destroy(IcePath);
}

function OnTriggerEnter(collision : Collider)
{
	if(Pnum == 7)
	{
		OnWater = true;
	}
	if(Pnum == 8)
	{
		collision.collider.isTrigger = false;
	}
	if(Pnum == 9)
	{
		print(collision);
		//CM.movement.gravity *= -1;
		CM.movement.gravity = 0;
		//transform.position += new Vector3(0,1,0);
		isdown = !isdown;
	}
	if(Pnum == 10)
	{
		print("Hello");
		RockObj = collision.gameObject;
		Rock = true;
	}
}					

function OnTriggerExit(collision : Collider)
{
	if(Pnum == 7)
	{
		OnWater = false;
	}
	if(Pnum == 8)
	{
		var HydrolocomotionPlatform = Instantiate(HydrolocomotionPlatform, player.transform.position, Quaternion.identity);
		HydrolocomotionPlatform.transform.parent = player.transform;
	}
}

function OnTriggerEnter(other : Collision)
{
	print(other);
	onwall = true;

}									