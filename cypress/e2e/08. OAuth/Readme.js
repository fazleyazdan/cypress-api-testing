//* OAuth 2.0 : First Look At the screenshot Attached with the name 'OAuth 2.0.png'

//* There are 3 components in OAuth 2 Authentication.   [Client APP, Resource Server, Auth Server]
//! 1. Client App: First we need to create a client App. 
//* Github, Facebook: As a first step we have to login to these site & create our client app. I used Github.
//* when creating Client app you have to give homepage URL. which can be any. in our case it is 'https://sunnah.com/'
//* after creation we will get 'Client ID', 'Client Secret'.

//! Now we will use 'client ID' along with this url to send request for auth code. Note The query parameter
//* https://github.com/login/oauth/authorize?client_id=9aad58815d36269fe258
//* In Response it will give us 'Auth code'. redirecting us to Homepage URL "https://sunnah.com/?code=6ed27cf5389e2c6c4fb2"
//* Note : the Auth Code will expire short after its creation. use it as soon as or click on homepage URL to generate new.
//* We need these 3 things 'Client ID', 'Client Secret' & 'Auth code' from Client App. to hit 'Auth Server' for 'OAuth 2.0 token'.

//! 2. Now we will hit 'Auth server' along with cl.ID, cl.secret & Auth Code.
//* https://github.com/login/oauth/access_token?client_id=123?client_secret=243?code=qeweww
//* in response it will give is 'OAuth' token. the type of the token is "Bearer"

//! 3. after that we will hit resource server for resources.
//* The resource server will not give response immediately. 
//* first it will verify the 'token' we have sent in request from 'Auth server'. after verification it will give the response.
//* we don't need to to do anything for that. the verification will happen internally

//! We will Use Github to create Client App. [profile icon --> setting --> dev setting --> OAuth App]
//* After The creation you will get Client ID and Client Secret.

