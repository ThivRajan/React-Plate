import { firestore } from '../config/firebase';

export default class UserService {
	static getUsers = async () => {
		const usersRef = await firestore.collection('users').get();
		usersRef.docs.forEach(doc => {
			console.log(doc.data());
		});
	};

	static getUser = async (uid: string) => {
		const userRef = await firestore.collection('users').doc(uid).get();
		const result = userRef.data() as any;
		result.uid = uid;
		return result;
	};

	static addUser = async (id: string, user: User): Promise<void> => {
		await firestore.collection('users').doc(id).set(user);
	}

	static updateUser = async (id: string, update: any): Promise<void> => {
		const result = await firestore.collection('users').doc(id).update(update);
	}
}