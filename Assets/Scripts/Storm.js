#pragma strict

var lighting : GameObject;
var target : GameObject;
var megaTarget : GameObject;
var Enabled : boolean = true;
var normSky : Material;
var sun : GameObject;
var player : GameObject;
static var start  : boolean = false;
var shotnum : int;
var fullPower : boolean;

function Update () 
{
	player = GameObject.Find("Player(Clone)");
	if(start)
	{
		shotnum = 0;
		fullPower = true;
		start = false;
	}
	if(this.camera.depth == 1)
	{
		if(Enabled)
		{
			StormStart();
		}
		if(Powers.Stamina < 1)
		{
			Powers.element = 0;
			Powers.abilityNum = 0;
			this.camera.depth = -1;
			Screen.lockCursor = true;
			this.transform.position -= new Vector3(0,100,0);
			RenderSettings.skybox = normSky;
			sun.light.intensity = 1;
			player.GetComponent( CharacterMotor ).enabled = true;
			player.transform.position += new Vector3 (0,100,0);
			Time.timeScale = 1;
		}
	}
	
	if(Input.GetButtonDown ("Fire1") && Powers.element == 1)					//Lightning
	{
			// Construct a ray from the current mouse coordinates
		var ray : Ray = this.camera.ScreenPointToRay (Input.mousePosition);
		if (Physics.Raycast (ray))
		{
			// Create a particle if hit
			lightingStrike();
			
		}
	}
	
	if(Input.GetButtonDown ("Fire2") && Powers.element == 1 && shotnum < 4 && fullPower)					
	{
		MegaStrike();
	}
	
	if (Input.mousePosition.x <= Screen.width /2 - 30)
	{
		this.transform.position += new Vector3 (-0.5F,0,0);
	}
	
	if (Input.mousePosition.x >= Screen.width /2 + 30)
	{
		this.transform.position += new Vector3 (0.5F,0,0);
	}
	
	if (Input.mousePosition.y <= Screen.height /2 - 30)
	{
		this.transform.position += new Vector3 (0,0,-0.5F);
	}
	
	if (Input.mousePosition.y >= Screen.height /2 + 30)
	{
		this.transform.position += new Vector3 (0,0,0.5F);
	}
	
}

function StormStart()
{
	Enabled = false;
	Powers.Stamina -= 2;
	yield WaitForSeconds (0.1);
	Enabled = true;
}
function lightingStrike()
{
	var lighting = Instantiate (lighting, transform.position, Quaternion.identity);
	var target = Instantiate (target, GameObject.Find("lightSpawn").transform.position, Quaternion.identity);
	target.transform.position -= new Vector3 (0,250,0);
	yield WaitForSeconds (0.5F);
	Destroy(lighting);
	Destroy(target);
}

function MegaStrike()
{
	fullPower = false;
	var target = Instantiate (target, GameObject.Find("lightSpawn").transform.position, Quaternion.identity);
	target.transform.position -= new Vector3 (0,250,0);
	var megaTarget = Instantiate (megaTarget, GameObject.Find("lightSpawn").transform.position, Quaternion.identity);
	megaTarget.transform.position -= new Vector3 (0,250,0);
	
	var lighting = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting.transform.position += new Vector3 (2,0,7);
	yield WaitForSeconds(0.2);

	
	
	var lighting1 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting1.transform.position += new Vector3 (0,0,-3);
	yield WaitForSeconds(0.2);
	Destroy(lighting1);
	
	
	var lighting2 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting2.transform.position += new Vector3 (5,0,-2);
	yield WaitForSeconds(0.2);
	Destroy(lighting2);
	
	
	var lighting3 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting3.transform.position += new Vector3 (-2,0,0);
	yield WaitForSeconds(0.2);
	Destroy(lighting3);
	
	
	var lighting4 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting4.transform.position += new Vector3 (2,0,-10);
	yield WaitForSeconds(0.2);
	Destroy(lighting4);
	
	
	var lighting5 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting5.transform.position += new Vector3 (12,0,0);
	yield WaitForSeconds(0.2);
	Destroy(lighting5);
	
	
	var lighting6 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting6.transform.position += new Vector3 (-12,0,2);
	yield WaitForSeconds(0.2);
	Destroy(lighting6);
	
	
	var lighting7 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting7.transform.position += new Vector3 (-2,0,-20);
	yield WaitForSeconds(0.2);
	Destroy(lighting7);
	
	
	var lighting8 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting8.transform.position += new Vector3 (2,0,5);
	yield WaitForSeconds(0.2);
	Destroy(lighting8);
	
	
	var lighting9 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting9.transform.position += new Vector3 (-4,0,2);
	yield WaitForSeconds(0.2);
	Destroy(lighting9);
		
	var lighting10 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting10.transform.position += new Vector3 (-30,0,-7);
	yield WaitForSeconds(0.2);
	Destroy(lighting10);
	
	var lighting11 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting11.transform.position += new Vector3 (0,0,30);
	yield WaitForSeconds(0.2);
	Destroy(lighting11);
	
	var lighting12 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting12.transform.position += new Vector3 (-40,0,20);
	yield WaitForSeconds(0.2);
	Destroy(lighting12);
	
	var lighting13 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting13.transform.position += new Vector3 (10,0,0);
	yield WaitForSeconds(0.2);	
	Destroy(lighting13);
	
	var lighting14 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting14.transform.position += new Vector3 (-20,0,10);
	yield WaitForSeconds(0.2);
	Destroy(lighting14);
	
	var lighting15 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting15.transform.position += new Vector3 (-15,0,0);
	yield WaitForSeconds(0.2);
	Destroy(lighting15);
	
	var lighting16 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting16.transform.position += new Vector3 (15,0,4);
	yield WaitForSeconds(0.2);
	Destroy(lighting16);
	
	var lighting17 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting17.transform.position += new Vector3 (20,0,20);
	yield WaitForSeconds(0.2);
	Destroy(lighting17);
	
	var lighting18 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting18.transform.position += new Vector3 (-20,0,-15);
	yield WaitForSeconds(0.2);
	Destroy(lighting18);
	
	var lighting19 = Instantiate (lighting, transform.position, Quaternion.identity);
	lighting19.transform.position += new Vector3 (4,0,-2);
	
	yield WaitForSeconds (0.2F);
	
	Destroy(lighting);
	Destroy(lighting19);
	Destroy(megaTarget);
	Destroy(target);
	shotnum++;
	Powers.Stamina -= 5;
	fullPower = true;
}