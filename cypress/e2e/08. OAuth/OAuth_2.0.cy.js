//* OAuth 2.0 : First Look At the screenshot Attached with the name 'OAuth 2.0.png'

//* There are 3 components in OAuth 2 Authentication.   [Client APP, Resource Server, Auth Server]
//! 1. Client App: First we need to create a client App. 
//* Github, Facebook etc support OAuth 2. As a first step we have to login to these site & create our client app.
//* after creation we will get 'Client ID', 'Client Secret'.

//! Now we will use 'client ID' & 'Client Secret' to send request to 'Auth Server'.
//* In Response it will give us 'Auth code'.
//* We need these 3 things 'Client ID', 'Client Secret' & 'Auth code' from Client App. to hit 'Auth Server' for 'OAuth 2.0 token'.

//! 2. Now as we have the token from 'Auth server'. we will hit the resource server.
//* The resource server will not give us response immediately. 
//* first it will verify the 'token' we have sent in request from 'Auth server'. after verification it will give the response.

