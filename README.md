# Fire Plate

This project is meant to be used as a template for TypeScript React apps using Firebase.

## Getting Started with Fire Plate

To use this template for your own project, you should update the following:

1. Add your project's API key and export your desired services in a file called `firebase.ts`
	located within the `config` folder:

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

2. Change the `<title>` tag in `index.html` to the desired title.
2. Change the description `<meta>` tag in `index.html` to the desired description.
3. Change the `name` key in both `package.json` & `package-lock.json` to the desired project name.
4. Change the `short_name` and `name` keys in `manifest.json` to the desired name.
5. [Optional] Update the `tsconfig.json` & `.eslintrc.json` to your needs.

You're good to go, enjoy!
