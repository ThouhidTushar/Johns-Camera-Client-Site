// const firebaseConfig = {
// 	apiKey: "AIzaSyB4a-A7QI8KbfxcwgC0THbwApgZwEzXwPI",
// 	authDomain: "johns-camera.firebaseapp.com",
// 	projectId: "johns-camera",
// 	storageBucket: "johns-camera.appspot.com",
// 	messagingSenderId: "654575600984",
// 	appId: "1:654575600984:web:bf8ec2bc4567360765512d"
// };


const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;