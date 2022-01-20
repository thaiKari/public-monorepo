

# KariNx

This project was generated using [Nx](https://nx.dev).

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

## Generate a library (publishable)

Run `nx g @nrwl/react:lib my-lib --publishable --importPath  @kari-nx/my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@kari-nx/mylib`.

## Publishing library

The __--publishable__ tag makes it possible to run `nx build my-lib`. One particularity when generating a library with --publishable is that it requires you to also provide an __--importPath__. Your import path is the actual scope of your distributable package (e.g.: @myorg/mylib) - which needs to be a valid npm package name. See [Publishable and Buildable Nx Libraries](https://nx.dev/structure/buildable-and-publishable-libraries).

Publishing of affected libraries and incrementing the package version is automated in main.yml. This is done with a custom nx command ([Running Custom Commands](https://nx.dev/executors/run-commands-builder))

This command must be created per library. In __libs/my-lib/project.json__ add this custom command:

```json
    "publish": {
      "executor": "@nrwl/workspace:run-commands",
      "outputs": ["publish/libs/my-lib"],
      "options": {
        "command": "npm publish  --access public",
        "cwd": "libs/my-lib"
      }
    }
```

This enables us to use the `npx nx affected --target=publish` command in our automation script. This will automatically publish affected libs to the npm registry.

__NB. Remember to update lib/my-lib/package.json version number if the package has been updated. Otherwise publishing will fail.__




## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.