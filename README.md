A web application mirrored after the board game, codenames.

Link - [definitely-not-codenames](http://not-codenames.herokuapp.com)

definitely-not-codenames was a side project designed for me to be able to learn new technologies.  Specifically, websockets and node/express were used in this build.  

The frontend is a react, redux, and SCSS app which centers around the [browser's websocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).  Redux thunk middleware is used to dispatch asyncronous WS actions to the backend.  

The backend is an express, node, ws websockets API. "Rooms" hold a group of users (identified by their open connection). A user can have one of four roles inside a room (blue/red team and hint giver/reciever). Upon reciept of an update to the game state, the change is saved and pushed out to users to all users in a "room". All game states are maintained in memory.
