﻿// ----------------------------------------------------------------------------
// <copyright file="Enums.cs" company="Exit Games GmbH">
//   PhotonNetwork Framework for Unity - Copyright (C) 2011 Exit Games GmbH
// </copyright>
// <summary>
//
// </summary>
// <author>developer@exitgames.com</author>
// ----------------------------------------------------------------------------

#pragma warning disable 1587
/// \file
/// <summary>Wraps up several of the commonly used enumerations. </summary>
#pragma warning restore 1587


using ExitGames.Client.Photon;


/// <summary>
/// This enum defines the set of MonoMessages Photon Unity Networking is using as callbacks.
/// </summary>
/// <remarks>
/// Much like Unity's "Update()", PUN defines some methods you should know and implement on demand.
/// Those methods are defined and described in this enum. Each entry is the name of such a method 
/// and the description tells you when it gets used by PUN.
/// 
/// Make sure to read the remarks per entry as some methods have optional parameters.
/// </remarks>
/// \ingroup publicApi
public enum PhotonNetworkingMessage
{
    /// <summary>
    /// Called when the initial connection got established but before you can use the server. OnJoinedLobby() or OnConnectedToMaster() are called when PUN is ready.
    /// </summary>
    /// <remarks>
    /// This callback is only useful to detect if the server can be reached technically. 
    /// If this is called, a low level connection is established and PUN will tell the server your AppId, the user, etc in the background.
    /// This is not called for transitions from the masterserver to game servers.</remarks>
    /// 
    /// Most often, it's enough to implement OnFailedToConnectToPhoton() and OnDisconnectedFromPhoton().
    /// 
    /// <i>OnJoinedLobby() or OnConnectedToMaster() are called when PUN is ready.</i>
    /// 
    /// Example: void OnConnectedToPhoton() { ... }
    OnConnectedToPhoton,

    /// <summary>
    /// Called once the local user left a room.
    /// </summary>
    /// <remarks>
    /// When leaving a room, PUN brings you back to the Master Server. 
    /// Before you can use lobbies and join or create rooms, OnJoinedLobby() or OnConnectedToMaster() will get called again.
    /// 
    /// Example: void OnLeftRoom() { ... }
    /// </remarks>
    OnLeftRoom,

    /// <summary>
    /// Called after switching to a new MasterClient when the current one leaves. The former already got removed from the player list.
    /// </summary>
    /// <remarks>
    /// This is not called when getting into a room.
    /// 
    /// Example: void OnMasterClientSwitched(PhotonPlayer newMasterClient) { ... }
    /// </remarks>
    OnMasterClientSwitched,

    /// <summary>
    /// Called when a CreateRoom() call failed. Optional parameters provide ErrorCode and message.
    /// </summary>
    /// <remarks>
    /// Most likely because the room name is already in use (some other client was faster than you).
    /// PUN logs some info if the PhotonNetwork.logLevel is >= PhotonLogLevel.Informational.
    /// 
    /// Example: void OnPhotonCreateRoomFailed() { ... }
    /// 
    /// Example: void OnPhotonCreateRoomFailed(object[] codeAndMsg) { // codeAndMsg[0] is int ErrorCode. codeAndMsg[1] is string debug msg.  }
    /// </remarks>
    OnPhotonCreateRoomFailed,

    /// <summary>
    /// Called when a JoinRoom() call failed. Optional parameters provide ErrorCode and message.
    /// </summary>
    /// <remarks>
    /// Most likely error is that the room does not exist or the room is full (some other client was faster than you).
    /// PUN logs some info if the PhotonNetwork.logLevel is >= PhotonLogLevel.Informational.
    /// 
    /// Example: void OnPhotonJoinRoomFailed() { ... }
    /// 
    /// Example: void OnPhotonJoinRoomFailed(object[] codeAndMsg) { // codeAndMsg[0] is int ErrorCode. codeAndMsg[1] is string debug msg.  }
    /// </remarks>
    OnPhotonJoinRoomFailed,

    /// <summary>
    /// Called when CreateRoom this client created a room and is in it. OnJoinedRoom() will be called next as you entered a room.
    /// </summary>
    /// <remarks>
    /// This callback is only called on the client which created a room. 
    /// 
    /// As any client might close (or drop connection) anytime, there is a chance that the 
    /// creator of a room does not execute OnCreatedRoom.
    /// 
    /// If you need specific room properties or a "start signal", it is safer to implement 
    /// OnMasterClientSwitched() and to make the new MasterClient check the room's state.
    /// 
    /// Example: void OnCreatedRoom() { ... }
    /// </remarks>
    OnCreatedRoom,

    /// <summary>
    /// Called on entering the Master Server's lobby. The actual room-list updates will call OnReceivedRoomListUpdate().
    /// </summary>
    /// <remarks>
    /// Note: When PhotonNetwork.autoJoinLobby is false, OnConnectedToMaster() will be called and the room list won't become available.
    /// 
    /// While in the lobby, the roomlist is automatically updated in fixed intervals (which you can't modify).
    /// 
    /// Example: void OnJoinedLobby() { ... }
    /// </remarks>
    OnJoinedLobby,

    /// <summary>
    /// Called after leaving a lobby.
    /// </summary>
    /// <remarks>
    /// When you leave a lobby, [CreateRoom](@ref PhotonNetwork.CreateRoom) and [JoinRandomRoom](@ref PhotonNetwork.JoinRandomRoom) 
    /// automatically refer to the default lobby. 
    /// 
    /// Example: void OnLeftLobby() { ... }
    /// </remarks>
    OnLeftLobby,

    /// <summary>
    /// Called after disconnecting from the Photon server.
    /// </summary>
    /// <remarks>
    /// In some cases, other callbacks are called before OnDisconnectedFromPhoton is called.
    /// Examples: OnConnectionFail() and OnFailedToConnectToPhoton().
    /// 
    /// Example: void OnDisconnectedFromPhoton() { ... }
    /// </remarks>
    OnDisconnectedFromPhoton,

    /// <summary>
    /// Called when something causes the connection to fail (after it was established), followed by a call to OnDisconnectedFromPhoton().
    /// </summary>
    /// <remarks>
    /// If the server could not be reached in the first place, OnFailedToConnectToPhoton is called instead.
    /// The reason for the error is provided as StatusCode.
    /// 
    /// Example: void OnConnectionFail(DisconnectCause cause) { ... }
    /// </remarks>
    OnConnectionFail,

    /// <summary>
    /// Called if a connect call to the Photon server failed before the connection was established, followed by a call to OnDisconnectedFromPhoton().
    /// </summary>
    /// <remarks>
    /// If the connection was established but then fails, OnConnectionFail is called.
    /// 
    /// Example: void OnFailedToConnectToPhoton(DisconnectCause cause) { ... }
    /// </remarks>
    OnFailedToConnectToPhoton,

    /// <summary>
    /// Called for any update of the room listing (no matter if "new" list or "update for known" list). Only called in the Lobby state (on master server).
    /// </summary>
    /// <remarks>
    /// Not all types of lobbies provive a listing of rooms to the client. Some are silent and specialized for server-side matchmaking.
    /// 
    /// PUN provides the list of rooms by PhotonNetwork.GetRoomList(). 
    /// Each item is a RoomInfo which might include custom properties 
    /// (provided you defined those as lobby-listed when creating a room).
    /// 
    /// Example: void OnReceivedRoomListUpdate() { ... }
    /// </remarks>
    OnReceivedRoomListUpdate,

    /// <summary>
    /// Called when entering a room (by creating or joining it). Called on all clients (including the Master Client).
    /// </summary>
    /// <remarks>
    /// This method is commonly used to instantiate player characters. 
    /// If a match has to be started "actively", you can instead call an [RPC](@ref PhotonView.RPC) triggered by a user's button-press or a timer.
    /// 
    /// When this is called, you can usually already access the existing players in the room via PhotonNetwork.playerList.
    /// Also, all custom properties should be already available as Room.customProperties. Check Room.playerCount to find out if 
    /// enough players are in the room to start playing.
    /// 
    /// Example: void OnJoinedRoom() { ... }
    /// </remarks>
    OnJoinedRoom,

    /// <summary>
    /// Called when a remote player entered the room. This PhotonPlayer is already added to the playerlist at this time.
    /// </summary>
    /// <remarks>
    /// If your game starts with a certain number of players, this callback can be useful to check the
    /// Room.playerCount and find out if you can start.
    /// 
    /// Example: void OnPhotonPlayerConnected(PhotonPlayer newPlayer) { ... }
    /// </remarks>
    OnPhotonPlayerConnected,

    /// <summary>
    /// Called when a remote player left the room. This PhotonPlayer is already removed from the playerlist at this time.
    /// </summary>
    /// <remarks>
    /// When your client calls PhotonNetwork.leaveRoom, PUN will call this method on the remaining clients.
    /// When a remote client drops connection or gets closed, this callback gets executed. after a timeout 
    /// of several seconds.
    /// 
    /// Example: void OnPhotonPlayerDisconnected(PhotonPlayer otherPlayer) { ... }
    /// </remarks>
    OnPhotonPlayerDisconnected,

    /// <summary>
    /// Called after a JoinRandom() call failed. Optional parameters provide ErrorCode and message.
    /// </summary>
    /// <remarks>
    /// Most likely all rooms are full or no rooms are available. 
    /// When using multiple lobbies (via JoinLobby or TypedLobby), another lobby might have more/fitting rooms.
    /// PUN logs some info if the PhotonNetwork.logLevel is >= PhotonLogLevel.Informational.
    /// 
    /// Example: void OnPhotonRandomJoinFailed() { ... }
    /// 
    /// Example: void OnPhotonRandomJoinFailed(object[] codeAndMsg) { // codeAndMsg[0] is int ErrorCode. codeAndMsg[1] is string debug msg.  }
    /// </remarks>
    OnPhotonRandomJoinFailed,

    /// <summary>
    /// Called after the connection to the master is established and authenticated but only when PhotonNetwork.autoJoinLobby is false.
    /// </summary>
    /// <remarks>
    /// If you set PhotonNetwork.autoJoinLobby to true, OnJoinedLobby() will be called instead of this.
    /// 
    /// You can join rooms and create them even without being in a lobby. The default lobby is used in that case.
    /// The list of available rooms won't become available unless you join a lobby via PhotonNetwork.joinLobby.
    /// 
    /// Example: void OnConnectedToMaster() { ... }
    /// </remarks>
    OnConnectedToMaster,

    /// <summary>
    /// Implement to customize the data a PhotonView regularly synchronizes. Called every 'network-update' when observed by PhotonView.
    /// </summary>
    /// <remarks>
    /// This method is used to customize which data a PhotonView regularly synchronizes. Your code
    /// defines if something gets sent, what content gets sent and how that gets used on receiving clients.
    /// 
    /// Unlike other callbacks in this enum, <i>OnPhotonSerializeView only gets called when it is assigned 
    /// to a PhotonView</i> as PhotonView.observed script.
    /// 
    /// To make use of this method, the PhotonStream is essential. It will be in "writing" mode" on the 
    /// client that controls a PhotonView (PhotonStream.isWriting == true) and in "reading mode" on the
    /// remote clients that just receive that the controlling client sends.
    /// 
    /// If you skip writing any value into the stream, PUN will skip the update. Used carefully, this can
    /// conserve bandwidth and messages (which have a limit per room/second).
    /// 
    /// Note that OnPhotonSerializeView is not called on remote clients when the sender does not send
    /// any update. This can't be used as "x-times per second Update()".
    /// 
    /// Also see: IPunObservable, which defines this method as interface. Sometimes it's simpler to 
    /// implement it that way.
    /// 
    /// Example: void OnPhotonSerializeView(PhotonStream stream, PhotonMessageInfo info) { ... }
    /// </remarks>
    OnPhotonSerializeView,

    /// <summary>
    /// Called on all scripts on a GameObject(and it's children) that have been spawned using PhotonNetwork.Instantiate.
    /// </summary>
    /// <remarks>
    /// Example: void OnPhotonInstantiate(PhotonMessageInfo info) { ... }
    /// </remarks>
    OnPhotonInstantiate,

    /// <summary>
    /// Because the concurrent user limit was (temporarily) reached, this client is rejected by the server and disconnecting.
    /// </summary>
    /// <remarks>
    /// When this happens, the user might try again later. You can't create or join rooms in OnPhotonMaxCcuReached(), cause the client will be disconnecting.
    /// You can raise the CCU limits with a new license (when you host yourself) or extended subscription (when using the Photon Cloud).
    /// The Photon Cloud will mail you when the CCU limit was reached. This is also visible in the Dashboard (webpage).
    /// 
    /// Example: void OnPhotonMaxCccuReached() { ... }
    /// </remarks>
    OnPhotonMaxCccuReached,

    /// <summary>
    /// Called when a room's custom properties changed. The propertiesThatChanged contains all that was set via Room.SetCustomProperties.
    /// </summary>
    /// <remarks>
    /// Since v1.25 this method has one parameter: Hashtable propertiesThatChanged.
    /// Changing properties must be done by Room.SetCustomProperties, which causes this callback locally, too.
    /// 
    /// Example: void OnPhotonCustomRoomPropertiesChanged(Hashtable propertiesThatChanged) { ... }
    /// </remarks>
    OnPhotonCustomRoomPropertiesChanged,

    /// <summary>
    /// Called when custom player-properties are changed. Player and the changed properties are passed as object[].
    /// </summary>
    /// <remarks>
    /// Since v1.25 this method has one parameter: object[] playerAndUpdatedProps, which contains two entries.<br/>
    /// [0] is the affected PhotonPlayer.<br/>
    /// [1] is the Hashtable of properties that changed.<br/>
    /// 
    /// We are using a object[] due to limitations of Unity's GameObject.SendMessage (which has only one optional parameter).
    ///
    /// Changing properties must be done by PhotonPlayer.SetCustomProperties, which causes this callback locally, too.
    /// 
    /// Example:<pre>
    /// void OnPhotonPlayerPropertiesChanged(object[] playerAndUpdatedProps) {
    ///     PhotonPlayer player = playerAndUpdatedProps[0] as PhotonPlayer;
    ///     Hashtable props = playerAndUpdatedProps[1] as Hashtable;
    ///     //...
    /// }</pre>
    /// </remarks>
    OnPhotonPlayerPropertiesChanged,

    /// <summary>
    /// Called when the server sent the response to a FindFriends request and updated PhotonNetwork.Friends.
    /// </summary>
    /// <remarks>
    /// The friends list is available as PhotonNetwork.Friends, listing name, online state and 
    /// the room a user is in (if any).
    /// 
    /// Example: void OnUpdatedFriendList() { ... }
    /// </remarks>
    OnUpdatedFriendList,

    /// <summary>
    /// Called when the custom authentication failed. Followed by disconnect!
    /// </summary>
    /// <remarks>
    /// Custom Authentication can fail due to user-input, bad tokens/secrets.
    /// If authentication is successful, this method is not called. Implement OnJoinedLobby() or OnConnectedToMaster() (as usual).
    /// 
    /// During development of a game, it might also fail due to wrong configuration on the server side. 
    /// In those cases, logging the debugMessage is very important. 
    /// 
    /// Unless you setup a custom authentication service for your app (in the [Dashboard](https://cloud.exitgames.com/dashboard)), 
    /// this won't be called! 
    /// 
    /// Example: void OnCustomAuthenticationFailed(string debugMessage) { ... }
    /// </remarks>
    OnCustomAuthenticationFailed,

    /// <summary>
    /// Called by PUN when the response to a WebRPC is available. See PhotonNetwork.WebRPC.
    /// </summary>
    /// <remarks>
    /// Important: The response.ReturnCode is 0 if Photon was able to reach your web-service.
    /// The content of the response is what your web-service sent. You can create a WebResponse instance from it.
    /// Example: WebRpcResponse webResponse = new WebRpcResponse(operationResponse);
    ///
    /// Please note: Class OperationResponse is in a namespace which needs to be "used":
    /// using ExitGames.Client.Photon;  // includes OperationResponse (and other classes)
    ///
    /// The OperationResponse.ReturnCode by Photon is:
    ///  0 for "OK"
    /// -3 for "Web-Service not configured" (see Dashboard / WebHooks)
    /// -5 for "Web-Service does now have RPC path/name" (at least for Azure)
    /// 
    /// Example: void OnWebRpcResponse(OperationResponse response) { ... }
    /// </remarks>
    OnWebRpcResponse,
}


/// <summary>Used to define the level of logging output created by the PUN classes. Either log errors, info (some more) or full.</summary>
/// \ingroup publicApi
public enum PhotonLogLevel
{
    /// <summary>Show only errors. Minimal output. Note: Some might be "runtime errors" which you have to expect.</summary>
    ErrorsOnly,
    /// <summary>Logs some of the workflow, calls and results.</summary>
    Informational,
    /// <summary>Every available log call gets into the console/log. Only use for debugging.</summary>
    Full
}

/// <summary>Enum of "target" options for RPCs. These define which remote clients get your RPC call. </summary>
/// \ingroup publicApi
public enum PhotonTargets
{
    /// <summary>Sends the RPC to everyone else and executes it immediately on this client. Player who join later will not execute this RPC.</summary>
    All,
    /// <summary>Sends the RPC to everyone else. This client does not execute the RPC. Player who join later will not execute this RPC.</summary>
    Others,
    /// <summary>Sends the RPC to MasterClient only. Careful: The MasterClient might disconnect before it executes the RPC and that might cause dropped RPCs.</summary>
    MasterClient,
    /// <summary>Sends the RPC to everyone else and executes it immediately on this client. New players get the RPC when they join as it's buffered (until this client leaves).</summary>
    AllBuffered,
    /// <summary>Sends the RPC to everyone. This client does not execute the RPC. New players get the RPC when they join as it's buffered (until this client leaves).</summary>
    OthersBuffered,
    /// <summary>Sends the RPC to everyone (including this client) through the server.</summary>
    /// <remarks>
    /// This client executes the RPC like any other when it received it from the server.
    /// Benefit: The server's order of sending the RPCs is the same on all clients.
    /// </remarks>
    AllViaServer,
    /// <summary>Sends the RPC to everyone (including this client) through the server and buffers it for players joining later.</summary>
    /// <remarks>
    /// This client executes the RPC like any other when it received it from the server.
    /// Benefit: The server's order of sending the RPCs is the same on all clients.
    /// </remarks>
    AllBufferedViaServer
}

/// <summary>
/// Options of lobby types available. Lobby types might be implemented in certain Photon versions and won't be available on older servers.
/// </summary>
public enum LobbyType :byte
{
    /// <summary>This lobby is used unless another is defined by game or JoinRandom. Room-lists will be sent and JoinRandomRoom can filter by matching properties.</summary>
    Default = 0,
    /// <summary>This lobby type lists rooms like Default but JoinRandom has a parameter for SQL-like "where" clauses for filtering. This allows bigger, less, or and and combinations.</summary>
    SqlLobby = 2
}

/// <summary>Currently available cloud regions as enum.</summary>
/// <remarks>
/// Must match order in CloudServerRegionNames and CloudServerRegionPrefixes.
/// To keep things compatible with older ServerSettings, "none" is the final value, not the first.
/// </remarks>
public enum CloudRegionCode { eu, us, asia, jp, none };

/// <summary>Available server (types) for internally used field: server.</summary>
public enum ServerConnection
{
    MasterServer,
    GameServer,
    NameServer
}

/// <summary>
/// High level connection state of the client. Better use the more detailed <see cref="PeerState"/>.
/// </summary>
public enum ConnectionState
{
    Disconnected,
    Connecting,
    Connected,
    Disconnecting,
    InitializingApplication
}

/// <summary>
/// Detailed connection / networking peer state.
/// PUN implements a loadbalancing and authentication workflow "behind the scenes", so
/// some states will automatically advance to some follow up state. Those states are
/// commented with "(will-change)".
/// </summary>
/// \ingroup publicApi
public enum PeerState
{
    /// <summary>Not running. Only set before initialization and first use.</summary>
    Uninitialized,

    /// <summary>Created and available to connect.</summary>
    PeerCreated,

    /// <summary>Not used at the moment.</summary>
    Queued,

    /// <summary>The application is authenticated. PUN usually joins the lobby now.</summary>
    /// <remarks>(will-change) Unless AutoJoinLobby is false.</remarks>
    Authenticated,

    /// <summary>Client is in the lobby of the Master Server and gets room listings.</summary>
    /// <remarks>Use Join, Create or JoinRandom to get into a room to play.</remarks>
    JoinedLobby,

    /// <summary>Disconnecting.</summary>
    /// <remarks>(will-change)</remarks>
    DisconnectingFromMasterserver,

    /// <summary>Connecting to game server (to join/create a room and play).</summary>
    /// <remarks>(will-change)</remarks>
    ConnectingToGameserver,

    /// <summary>Similar to Connected state but on game server. Still in process to join/create room.</summary>
    /// <remarks>(will-change)</remarks>
    ConnectedToGameserver,

    /// <summary>In process to join/create room (on game server).</summary>
    /// <remarks>(will-change)</remarks>
    Joining,

    /// <summary>Final state of a room join/create sequence. This client can now exchange events / call RPCs with other clients.</summary>
    Joined,

    /// <summary>Leaving a room.</summary>
    /// <remarks>(will-change)</remarks>
    Leaving,

    /// <summary>Workflow is leaving the game server and will re-connect to the master server.</summary>
    /// <remarks>(will-change)</remarks>
    DisconnectingFromGameserver,

    /// <summary>Workflow is connected to master server and will establish encryption and authenticate your app.</summary>
    /// <remarks>(will-change)</remarks>
    ConnectingToMasterserver,

    /// <summary>Same Queued but coming from game server.</summary>
    /// <remarks>(will-change)</remarks>
    QueuedComingFromGameserver,

    /// <summary>PUN is disconnecting. This leads to Disconnected.</summary>
    /// <remarks>(will-change)</remarks>
    Disconnecting,

    /// <summary>No connection is setup, ready to connect. Similar to PeerCreated.</summary>
    Disconnected,

    /// <summary>Final state for connecting to master without joining the lobby (AutoJoinLobby is false).</summary>
    ConnectedToMaster,

    /// <summary>Client connects to the NameServer. This process includes low level connecting and setting up encryption. When done, state becomes ConnectedToNameServer.</summary>
    ConnectingToNameServer,

    /// <summary>Client is connected to the NameServer and established enctryption already. You should call OpGetRegions or ConnectToRegionMaster.</summary>
    ConnectedToNameServer,

    /// <summary>When disconnecting from a Photon NameServer.</summary>
    /// <remarks>(will-change)</remarks>
    DisconnectingFromNameServer,

    /// <summary>When connecting to a Photon Server, this state is intermediate before you can call any operations.</summary>
    /// <remarks>(will-change)</remarks>
    Authenticating
}


// Photon properties, internally set by PhotonNetwork (PhotonNetwork builtin properties)


/// <summary>
/// Summarizes the cause for a disconnect. Used in: OnConnectionFail and OnFailedToConnectToPhoton.
/// </summary>
/// <remarks>Extracted from the status codes from ExitGames.Client.Photon.StatusCode.</remarks>
/// <seealso cref="PhotonNetworkingMessage"/>
/// \ingroup publicApi
public enum DisconnectCause
{
    /// <summary>Connection could not be established.
    /// Possible cause: Local server not running.</summary>
    ExceptionOnConnect = StatusCode.ExceptionOnConnect,

    /// <summary>The security settings for client or server don't allow a connection (see remarks).</summary>
    /// <remarks>
    /// A common cause for this is that browser clients read a "crossdomain" file from the server.
    /// If that file is unavailable or not configured to let the client connect, this exception is thrown.
    /// Photon usually provides this crossdomain file for Unity.
    /// If it fails, read:
    /// http://doc.exitgames.com/photon-server/PolicyApp
    /// </remarks>
    SecurityExceptionOnConnect = StatusCode.SecurityExceptionOnConnect,

    /// <summary>Connection timed out.
    /// Possible cause: Remote server not running or required ports blocked (due to router or firewall).</summary>
    [System.Obsolete("Replaced by clearer: DisconnectByClientTimeout")]
    TimeoutDisconnect = StatusCode.TimeoutDisconnect,

    /// <summary>Timeout disconnect by client (which decided an ACK was missing for too long).</summary>
    DisconnectByClientTimeout = StatusCode.TimeoutDisconnect,

    /// <summary>Exception in the receive-loop.
    /// Possible cause: Socket failure.</summary>
    InternalReceiveException = StatusCode.ExceptionOnReceive,

    /// <summary>Server actively disconnected this client.</summary>
    [System.Obsolete("Replaced by clearer: DisconnectByServerTimeout")]
    DisconnectByServer = StatusCode.DisconnectByServer,

    /// <summary>Timeout disconnect by server (which decided an ACK was missing for too long).</summary>
    DisconnectByServerTimeout = StatusCode.DisconnectByServer,

    /// <summary>Server actively disconnected this client.
    /// Possible cause: Server's send buffer full (too much data for client).</summary>
    DisconnectByServerLogic = StatusCode.DisconnectByServerLogic,

    /// <summary>Server actively disconnected this client.
    /// Possible cause: The server's user limit was hit and client was forced to disconnect (on connect).</summary>
    DisconnectByServerUserLimit = StatusCode.DisconnectByServerUserLimit,

    /// <summary>Some exception caused the connection to close.</summary>
    Exception = StatusCode.Exception,

    /// <summary>(32756) Authorization on the Photon Cloud failed because the app's subscription does not allow to use a particular region's server.</summary>
    InvalidRegion = ErrorCode.InvalidRegion,

    /// <summary>(32757) Authorization on the Photon Cloud failed because the concurrent users (CCU) limit of the app's subscription is reached.</summary>
    MaxCcuReached = ErrorCode.MaxCcuReached,

    /// <summary>(32767) The Photon Cloud rejected the sent AppId. Check your Dashboard and make sure the AppId you use is complete and correct.</summary>
    InvalidAuthentication = ErrorCode.InvalidAuthentication,
}

/// <summary>
/// Internal state how this peer gets into a particular room (joining it or creating it).
/// </summary>
internal enum JoinType
{
    CreateGame,
    JoinGame,
    JoinRandomGame,
    JoinOrCreateOnDemand
}