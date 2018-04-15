# StFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## API Keys
You need to add an `api-keys.ts` file as a sibling of the `app` folder:
```
export const masterFirebaseConfig = {
  apiKey: 'xxxx',
  authDomain: 'xxxx.firebaseapp.com',
  databaseURL: 'https://xxxx.firebaseio.com',
  projectId: 'xxxx',
  storageBucket: 'xxxx.appspot.com',
  messagingSenderId: 'xxxx'
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Creating a model class
Run `ng g class profile --type=model`

## Create a service class
Run `ng g s profile`

## Firebase cli login
Run `firebase login`

## Install firebase cli
Run `npm -g install firebase-tools`

## Install toastr for notifications
Run `npm install ngx-toastr --save`
