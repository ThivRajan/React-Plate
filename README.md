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

2. Copy `services/userService.ts` and update the `COLLECTION` constant to use for own firestore collections.
3. The auth services only support email and sign in but you can copy and extend them for any of firebase's auth options.
4. Change the `<title>` tag in `index.html` to the desired title.
5. Change the description `<meta>` tag in `index.html` to the desired description.
6. Change the `name` key in both `package.json` & `package-lock.json` to the desired project name.
7. Change the `short_name` and `name` keys in `manifest.json` to the desired name.
8. [Optional] Update the `tsconfig.json` & `.eslintrc.json` to your needs.

You're good to go, enjoy!
