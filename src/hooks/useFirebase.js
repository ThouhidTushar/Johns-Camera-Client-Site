import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init'

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);

	const auth = getAuth();

	const signInUsingGoogle = () => {
		setIsLoading(true);
		const googleProvider = new GoogleAuthProvider();

		return signInWithPopup(auth, googleProvider)

			.finally(() => setIsLoading(false));
	}

	// observe user state change
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, user => {
			if (user) {
				setUser(user);
			}
			else {
				setUser({})
			}
			setIsLoading(false);
		});


		return () => unsubscribed;
	}, [])

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => { })
			.finally(() => setIsLoading(false));
	}


	const handleUserRegister = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				console.log(result.user);
				hanldeUserInfoRegister(result.user.email);
			})
			.catch((error) => {
				const errorMessage = error.message;
			});
	};


	const hanldeUserInfoRegister = (email) => {
		fetch("http://localhost:5000/addUserInfo", {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ email }),
		})
			.then((res) => res.json())
			.then((result) => console.log(result));
	};

	return {
		user,
		isLoading,
		handleUserRegister,
		signInUsingGoogle,
		logOut
	}
}

export default useFirebase;