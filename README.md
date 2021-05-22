# Boiling Plate

This project branch is meant to be used as a template for TypeScript React apps using Firebase, routing & state management (via hooks). This branch is the combination of the boilerplates of all the other branches (state, firebase & routing). Note that for the state, because there's only one reducer, it will be hard to manage state if your state gets too complex. See all the branches for other React boilerplates.

## Getting Started with Boiling Plate

To use this template for your own project, you should update the following:

1. Update the `state/state.ts` and `state/reducer.ts` files to meet the needs of your state. 
2. Create a file at path `config/firebase.ts` & add your firebase project's config to it as below:

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

2. Enable firestore & create your collections. Turn off security rules for initial testing purposes. Copy & update `services/userService.ts` to match your collections (you will also need the appropriate models to go with the services).
3. Enable authentication with email sign in to use the auth service.
4. Change the `<title>` tag in `index.html` to the desired title.
5. Change the description `<meta>` tag in `index.html` to the desired description.
6. Change the `name` key in both `package.json` & `package-lock.json` to the desired project name.
7. Change the `short_name` and `name` keys in `manifest.json` to the desired name.
8. [Optional] Update the `tsconfig.json` & `.eslintrc.json` to your needs.

You're good to go, enjoy!
