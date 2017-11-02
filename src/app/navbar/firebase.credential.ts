import { AngularFireModule, AuthMethods, AuthProviders } from "angularfire2";

export const afConfig = {
  	apiKey: "AIzaSyCc9qIvgzEFfus79D9SwkALe8N1sPZUpSw",
	authDomain: "smart-quiz-123.firebaseapp.com",
	databaseURL: "https://smart-quiz-123.firebaseio.com",
	projectId: "smart-quiz-123",
	storageBucket: "smart-quiz-123.appspot.com",
	messagingSenderId: "1088377354283"
};

export const afAuthConfig = {
      provider: AuthProviders.Anonymous,
      method: AuthMethods.Anonymous
};