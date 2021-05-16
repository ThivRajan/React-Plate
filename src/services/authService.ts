import User from '../models/User';
import UserService from './userService';
import { auth } from '../config/firebase';

export default class AuthService {
	static emailSignUp = async (email: string, password: string, name: string): Promise<User | void> => {
		const userCredential = await auth.createUserWithEmailAndPassword(email, password);

		if (userCredential.user != null) {
			const newUser = { name };
			await UserService.add(userCredential.user.uid, newUser);
			return newUser;
		}
	};

	static emailSignIn = async (email: string, password: string): Promise<User | void> => {
		const userCredential = await auth.signInWithEmailAndPassword(email, password);
		if (userCredential.user) {
			return UserService.get(userCredential.user?.uid);
		}
	};

	static signOutUser = async (): Promise<void> => {
		await auth.signOut();
		window.localStorage.clear();
	};
}