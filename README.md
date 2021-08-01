# To Do Demo

# Ionic/Angular/Cordova project
* This is a recipe for a mobile application to manage a short task list .
* Programmation langage will be ionic and angular framework, the build and the deployment will be with cordova framework

# Set up the project
* In a folder you just created, open a cmd
* Install the CLI with a package manager
```bash
npm install @ionic/cli
```
* To execute CLI from a local host
```bash
npx ionic
```
* Create your project
```bash
npx ionic start name-of-the-project
```
**The name of the project must be in lowercase and usually the same of the one of your git repository**
* Choose your framework
>Angular
* Choose your template
>blank
* Make a choice between capacitor or cordova
>No to capacitor
* Create a git repository
* Place yourself in the project
```bash
git init
git config --global user.name"your github name"
git config --global user.email"your github email"
```
# Construction of the project in your IDE
* *npx to speak to ionic*
* *ng to speak to angular*
* To make sure everything is set up correctly
```bash
npm install
```
* To start the local server and get the url to see your application in your browser
```bash
npm start
```
* Create the component
```bash
npx ng generate component component-name
```
* Create a component child
```bash
npx ng generate component component-name/component-child-name
```
* Create a module
```bash
npx ng generate module module-name
```
* Create a routing module

*To create a routing module without the entire folder*
```bash
npx ng generate module module-name --routing --flat
```
* Create a model
```bash
npx ng generate class model-name --type=model
```
* Create a service
```bash
npx ng generate service service-name
```
*You might have to move some of files in the right folder*

**Eachtime you create or change something strong stop and restart your server**
```bash
ctrl C
npm start
```
*Code your application ionic friendly*

# Build 
* If not done yet put the environment folder in .gitignore to secure your sensible data(url, key)
* If your gitignore doesn't update properly
* Save your code
* Remove the index
```bash
git rm -r --cached .
```
* Import again the index 
```bash
git add .
```
* Commit the change
```bash
git commit -m"message of success"
```

* Copy the links and the keys of the environment.ts in environment.prod.ts and put *production* as true

* First build
```bash
npx ionic build
```
* If the build is without any error carry on, else resolve all the errors
```bash
npx ionic build --prod
```
* Take the www folder just filled out of the .gitignore  
* In the file www/index.html
* Put a point before the slash in the base content
```html
<base href="./"/>
```
* Now you can check your project as it will be in production in a browser
```bash
cd www
php -S localhost:8000
```
**Before you update your git repository**
Take out your environnements folder, to make sure you don't expose your api keys or secrets keys, push to git and replace the folder in gitignore

# Deployment on a device
* Android studio will be the easiest way to get most of the pre-requirements(an emulator, gradle wich is the package manager of java, sdk tools)
* Download android studio

*Can take some time*

*If it's your first time to make sure everything works*
* Create a new project with a simple template
* Configure the project(name,location,langage)
* Activate the developpeur mode on your device
* Install the device version in the sdk manager and check it in the sdk tools

*If you are familiar with android studio just open your application in it*
* *If you choose the emulator, install it*
* *Else*  
**Plug-in your device**
* It should be recognize by android studio, make sure your authorisations are active
* Run the build in android studio

# To personalize your application in config.xml
* Add your identity and check the authorisation, add your templates préferences
* **Ionic may have put some default set up in app component, like the splashscreen and the statusbar**
*You may need to add ionic native
```bash
npm install @ionic-native/core
```
* Add the plugin for the status bar and the splashscreen
```bash
npx ionic cordova plugin add cordova-plugin-statusbar
npm install @ionic-native/status-bar
```
```bash
npx ionic cordova plugin add cordova-plugin-splashscreen
npm install @ionic-native/splash-screen
```
* Change the icon and the splashscreen
* To resize your image correctly
```bash
npm install cordova -res
```
* If you don't have cordova set up yet
```bash
npm install cordova
```
* Replace the icon.png and the splashscreen.png with your choice in the folder ressource
**The icon and the splashscreen must be .png and .jpg and respectively 1024x1024 and 2732x2732
* Validate your change
```bash
npx cordova -res
```
**This command must be done each time you change your config**

*Before you run cordova and to avoid unexplained and very cloudy errors*
* 
```bash
npx native-g native-run
```
* Make sure your Java version is 8 and not an update one

**Java 8 is the most stable version**
* In your PC-> enviromnent variables

JAVA-HOME
* Put the graddle path you've got in your project

* Run cordova
```bash
npx ionic cordova run android --device
```
* If you chose the emulator
```bash
npx ionic cordova run android --emulator
```



