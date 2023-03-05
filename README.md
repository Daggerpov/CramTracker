# Description

This web application helps students with their stressful cramming sessions by alleviating the stress of scheduling their tasks. Users can simply input their tasks into a todolist, along with optional preferences, to then generate a schedule based on estimated completion time and prioritization. 

Additionally, we aim to integrate many studying resources and plug-ins into one platform, along with our own formatted learning content. 

Our most exciting feature to sprout from having authenticated users is the ability to add friends, which will enable users to see what their friends are currently studying, and invite them to virtual or in-person studying sessions. 

# Development

[Project Kanban Board of Tasks](https://github.com/users/Daggerpov/projects/4)

1. For now, ***make sure you are using the `back-to-firebase` git branch*** rather than the main one
    - This is because authentication is being refactored in the main branch to switch from Firebase Authentication to nextAuth.js. 
  
2. Within this branch, you'll need to ***paste the private `.env` file found on our project's discord server***

## Commands to work with a project that uses yarn (instead of npm):
- `yarn` (similar to npm init)installs the package versions defined in the package.json file to your machine, generating a yarn.lock file. You'll need to do this after cloning the repo on your computer. 
-  `yarn add [package name]` (similar to npm install [package name] adds a package, in case some tutorial or something necessitates it, which you then import into the file
- `yarn dev` runs the project in your local browser at [http://localhost:3000/](http://localhost:3000/)
