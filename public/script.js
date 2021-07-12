const socket = io('/');
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
myVideo.muted = true;

//peer configuration

var myPeer = new Peer( undefined, {
  host: "peer-js-server-by-akki.herokuapp.com",
  port: 443,
  secure: true,
}); 

let myVideoStream;
let peers = {};

var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then((stream) => {
    myVideoStream = stream
    addVideoStream(myVideo,stream)

    //localstream
      myPeer.on('call', call => {
        call.answer(stream)
        const video = document.createElement('video')

        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
            console.log(peers);
        });
        });
                socket.on('user-connected', userId => {
                    connecToNewUser(userId, stream);
                }) ;
          
    //Messaging  

    let text = $('input')

    $('html').keydown((e) => {
        if(e.which == 13 && text.val().length !== 0){
            console.log(text.val())
            socket.emit('message', text.val()) ;
            text.val('')
        }
    });

    socket.on('createMessage', (message)  => {
      $('.messages').append(`<li class = "message"><b>User</b><br/>${message}</li>`);
      scrollToBottom()
    })

    socket.on('user-disconnected', userId => {
      if (peers[userId]) peers[userId].close();
      speakText(`user ${userId} leaved`);
    });  
} );

//peerconnection

myPeer.on("call",function(call){
  getUserMedia(
    {video:true, audio:true },
    function(stream){
      call.answer(stream);
      const video = document.createElement("video");
      call.on("stream", function(remoteStream){
        addVideoStream(video, remoteStream);
      });
    },
    function(err){
      console.log("Failed to get local stream", err);
    }
  );
});

myPeer.on("open",(id)=>{
  currentUserId = id;
  socket.emit("join-room", ROOM_ID, id);
});



socket.on("disconnect", function(){
  socket.emit("leave-room", ROOM_ID, currentUserId);
});

//To connect streams

function addVideoStream (video,stream) {
  video.srcObject = stream
  video.addEventListener('loadedmetadata',() => {
      video.play()
  })
  videoGrid.append(video);
}

//To connect users

function connecToNewUser(userId, stream) {
    var call = myPeer.call(userId, stream);
     console.log(call);
    var video = document.createElement('video')
    call.on('stream', userVideoStream => {
       console.log(userVideoStream);
        addVideoStream(video, userVideoStream);
    });
    
    call.on('close', () => {
        video.remove();
      });
    
      peers[userId] = call
    };


//To Scroll the chat

const scrollToBottom = () => {
    let d = $('.main__chat_window');
    d.scrollTop(d.prop("scrollHeight"));
}

//main controls panel buttons

//Mute button

const muteUnmute = () => {
    const enabled = myVideoStream.getAudioTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getAudioTracks()[0].enabled = false;
      setUnmuteButton();
    } else {
      setMuteButton();
      myVideoStream.getAudioTracks()[0].enabled = true;
    }
  }

  const setMuteButton = () => {
    const html = `
      <i class="fas fa-microphone"></i>
      <span>Mute</span>
    `
    document.querySelector('.main__mute_button').innerHTML = html;
  }
  
  const setUnmuteButton = () => {
    const html = `
      <i class="unmute fas fa-microphone-slash"></i>
      <span>Unmute</span>
    `
    document.querySelector('.main__mute_button').innerHTML = html;
  }

  //Turning off/on video

  const playStop = () => {
    console.log('object')
    let enabled = myVideoStream.getVideoTracks()[0].enabled;
    if (enabled) {
      myVideoStream.getVideoTracks()[0].enabled = false;
      setPlayVideo()
    } else {
      setStopVideo()
      myVideoStream.getVideoTracks()[0].enabled = true;
    }
  }

  const setStopVideo = () => {
    const html = `
      <i class="fas fa-video"></i>
      <span>Stop Video</span>
    `
    document.querySelector('.main__video_button').innerHTML = html;
  }
  
  const setPlayVideo = () => {
    const html = `
    <i class="stop fas fa-video-slash"></i>
      <span>Play Video</span>
    `
    document.querySelector('.main__video_button').innerHTML = html;
  }

  //Security button
  const security= () => {
    alert("All participants have access to controls");
  };


  //Chat button
const prevChat = () => {
   alert("You have no access to previous chat");
};

  //Participants button

  //To Leave the call
  
      
  
