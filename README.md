# HisbCommonUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.
The project contains UI libraries used by HISB

## Install the project.

1. As with all angular projects, run `npm -install`
2. Build all libraries. You can use `npm run build:all`, or use `ng build library_name`
3. Reinstall all dependencies using `npm -install` (remember that the libraries are dependencies)
4. For the library you are currently working on run [ng build library_name --watch]. This will insure that the library you are working on will update every time you make changes.
5. Run the main project using `npm start`

## Create new library

1. Run [ng generate library my-lib]. Remember to follow proper naming conventions.
2. Follow the [Angular guidance](https://angular.io/guide/creating-libraries) for creating new libraries. 
3. In the main project, create a test module for the library. All modules are located in `src/app/test-modules`
4. Make sure to import the library in `my_test_module.module.ts` file.
5. Make sure to add a path in the `app-routing.module.ts` to access your library
