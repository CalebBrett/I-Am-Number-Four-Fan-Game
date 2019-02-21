#pragma strict

var skin : GUISkin;
var menuStyle : GUIStyle;
static var player : int;
static var candes : boolean = false;
var toolbarInt = 999;
var toolbarStrings : String[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

function Start()
{
	DontDestroyOnLoad(this);
}

function Update()
{
	if(candes)
	{
		Destroy(this);
	}
	if(toolbarInt == 0)
	{
		player = 1;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 1)
	{
		player = 2;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 2)
	{
		player = 3;
		Application.LoadLevel (2);
	}
	if (toolbarInt == 3)
	{
		player = 4;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 4)
	{
		player = 5;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 5)
	{
		player = 6;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 6)
	{
		player = 7;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 7)
	{
		player = 8;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 8)
	{
		player = 9;
		Application.LoadLevel (2);
	}
	if(toolbarInt == 9)
	{
		player = 10;
		Application.LoadLevel (2);
	}
	
}

function OnGUI() 
{
	GUI.skin = skin;
    toolbarInt = GUI.Toolbar (Rect (300, 100, 600, 50), toolbarInt, toolbarStrings);
	
	if (GUI.Button(Rect(50,20,355,41),"Back",menuStyle))
	{
		Application.LoadLevel(0);
	}
}