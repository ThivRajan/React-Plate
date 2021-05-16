import { firestore } from '../config/firebase';
import User from '../models/User';

const COLLECTION = 'users';

export default class UserService {
	static getAll = async (): Promise<User[]> => {
		const usersRef = await firestore.collection(COLLECTION).get();
		const users = usersRef.docs.map(userDoc => userDoc.data() as User);
		return users;
	};

	static get = async (uid: string): Promise<User> => {
		const userRef = await firestore.collection(COLLECTION).doc(uid).get();
		const user = userRef.data() as User;
		return user;
	};

	static add = async (uid: string, newUser: User): Promise<void> => {
		return await firestore.collection(COLLECTION).doc(uid).set(newUser);
	}

	static update = async (uid: string, updatedUser: User): Promise<void> => {
		return await firestore.collection(COLLECTION).doc(uid).update(updatedUser);
	}
}