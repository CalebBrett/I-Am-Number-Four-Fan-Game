using UnityEngine;
using System.Collections;

public class NetworkManager : MonoBehaviour {

	// Use this for initialization
	void Start () 
	{
		Connect ();
	}

	void Connect()
	{
		PhotonNetwork.ConnectUsingSettings ("1.0.0");
	}

	void OnGUI()
	{
		GUILayout.Label (PhotonNetwork.connectionStateDetailed.ToString ());
	}

	void OnJoinedLobby()
	{
		PhotonNetwork.JoinRandomRoom();
	}

	void OnPhotonRandomJoinFailed()
	{
		PhotonNetwork.CreateRoom (null);
	}

	void OnJoinedRoom()
	{
		SpawnPlayer ();
	}

	void SpawnPlayer()
	{
		GameObject MyPlayer = (GameObject)PhotonNetwork.Instantiate ("Player", new Vector3(420,55,100), Quaternion.identity,0);
		((MonoBehaviour)MyPlayer.GetComponent("FPSInputController")).enabled = true;
		((MonoBehaviour)MyPlayer.GetComponent("MouseLook")).enabled = true;
		((MonoBehaviour)MyPlayer.GetComponent("CharacterMotor")).enabled = true;
		MyPlayer.transform.FindChild ("Main Camera").gameObject.SetActive (true);
	}
}
