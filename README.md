MyTeamsClone
=============
### Use Agile methodology to build a Microsoft Teams Clone through which a minimum of 2 people can have video conversation, Microsoft Engage 2021 ###

Introduction
------------

The aim of this project is to build a Teams Clone through which 2 or more people can connect to have a video conversation.

To view a demo of this project, download the repository, install the dependencies and and start server.js. The demo works on Google Chrome, Microsoft Edge, 
Safari and Firefox.

You can also view the demo using the link below(This repo is hosted on Heroku).

[View Demo](https://boiling-fjord-62718.herokuapp.com/)

App Functionalities
--------------------

* Using this app, ````2 or more people```` can connect using the same roomId and have a video conversation.
* This app also gives you the ````controls of your video```` i.e., you can stop/play your video whenever required.
* This app also gives you the ````controls of your audio```` i.e., you can mute/unmute yourself whenever required.
* This app also has the ````live chat```` feature through which you can send text messages to the people in the same room.
* This app generates ````unique roomId```` everytime you use it so that you can have a new conversation any time.

Technologies and libraries used
-------------------------------
* reactjs, bootstrap
* nodejs, express
* socket.io
* peerjs
* cors 

Reactjs is used for the frontend whereas nodejs and express are used for the backend of the project.
Socket.io is used to establish real-time data connection between the users.
Peerjs (WebRTC) is used for real-time audio and video sharing.
Cors is used for handling cross origin requests.Bootstrap is used for styling.


Languages used
--------------
* EJS
* CSS
* Javascript

Future possible functionalities
-------------------------------
1. The feature through which users can chat through text messages, before and after the video call and chat being accesible to the room members.
2. The feature through which access of controls of the conversation can be handled by the organiser of the meeting.
3. A login/signUp page for authentication.
4. The feature of screen sharing.
5. The feature through which one can share pdf files, documents and gps location in the chat.

License
--------

[MIT License](http://www.opensource.org/licenses/mit-license.php)

Copyright (c) 2021 Lahari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.










