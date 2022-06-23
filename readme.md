Author: [Donovan Schaafsma](https://github.com/Ryukishi)

Instructions to build and run project

1. Go to the root directies of both libraries to download the NPM packages.

    For the angular directory run:

    `cd angular-workspace`

    `npm i`

    For the angular directory run:

    `cd stencil-library`

    `npm i`

2. Link the stencil-library as a package in the angular-workspace.
This is done with the NPM link method. First set the stencil library up for NPM link:
    
    `cd stencil-library`

    `npm link`

    Now that the stencil library is ready to be linked, we need to complete the link in the angular workspace
    directory.

    `cd angular-workspace`

    `npm link stencil-library`

3. Go to the stencil directory and run the build command
    
    `cd stencil-library`
    
    `npm run build`

    Any web component changes will now be available in the angular project.

4. Go to the angular directory and run the build command

    `cd angular-workspace`
    
    `npm run build`

5. In the angular workspace, go to the demo directory to run the project

    `cd projects`
    
    `cd demo`
    
    `ng serve`

******

Instructions to update design tokens (style dictionary)

1. Make changes in stencil-library/config.json or stencil-library/tokens/base.tokens.json

2. Run the next command in terminal on the stencil-library directory:

    `cd stencil-library`
    
    `style-dictionary build`