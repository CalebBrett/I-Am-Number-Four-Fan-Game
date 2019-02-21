#pragma strict

var menuStyle: GUIStyle;

function Start()
{
	Screen.lockCursor = false;
}

function OnGUI() {
	if (GUI.Button(Rect(500,150,355,41),"Play",menuStyle))
	{
		Application.LoadLevel(1);
	}
	if (GUI.Button(Rect(480,300,420,41),"Controls",menuStyle))
	{
		Application.LoadLevel(1);
	}
		if (GUI.Button(Rect(500,400,355,39),"Exit",menuStyle))
	{
		Application.Quit();
	}
}