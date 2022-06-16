# Special Services

## Node version

Currently using Node 14.19.0 due to restriction from dependencies.
`nvm use 14.19.0`

## Running DynamoDB locally

`docker run -d -p 8000:8000 amazon/dynamodb-local`

## Development server

Run all lambda's `yarn run start:all`

Run individual lambda `yarn nx run <app>:serve`. e.g. `yarn nx run tenants:serve`

Run certain list of api's `yarn nx run-many --target=serve --projects=api1,api2...`

## Running unit tests

Run `yarn run test:all` to execute the unit tests via [Jest](https://jestjs.io).

Run individual project test by using `yarn nx run-many --target=test --projects=tenants`

## Understand your workspace

Run `yarn nx graph` to see a diagram of the dependencies of your projects or `yarn nx dep-graph`
