# Fire Plate

This project is meant to be used as a template for TypeScript React apps using Firebase.See all the branches for other React boilerplates.

## Getting Started with Fire Plate

To use this template for your own project, you should update the following:

1. Create a file `firebase.ts` in the `config` folder & add your firebase project's config to it as below:

```javascript
import firebase from 'firebase';

// Replace this config object with your project's config
firebase.initializeApp({
	apiKey: '',
	authDomain: '',
	projectId: '',
	storageBucket: '',
	messagingSenderId: '',
	appId: ''
});

export const firestore = firebase.firestore();
export const auth = firebase.auth();
```

- the auth service supports email & google sign in so those must be enabled in your auth
- the user service requires you have a collection called `users` in your firestore 

2. Change the `<title>` tag in `index.html` to the desired title.
2. Change the description `<meta>` tag in `index.html` to the desired description.
3. Change the `name` key in both `package.json` & `package-lock.json` to the desired project name.
4. Change the `short_name` and `name` keys in `manifest.json` to the desired name.
5. [Optional] Update the `tsconfig.json` & `.eslintrc.json` to your needs.

You're good to go, enjoy!
