# Setup steps

1. Clone this directory to your disk `git clone https://github.com/sami616/todos-backend.git`
2. Install dependancies in cloned repo `cd json-server && npm install`
3. Run `npm start` - if all's good a local dev server should start on `http://localhost:4000`
4. Cancel the dev server `ctrl + c`
5. Open the `now.json` file in the project and append your name to the `alias` field, eg - `todos-backend-janchi` this will make up your production endpoint.
6. Create a free account on `https://zeit.co`
7. Install the zeit now cli globally `npm i -G now`
8. Run `now login` to login to your account via the command line
9. Run `npm run deploy` inside the repo, when complete you should have a remote version of your server live on now
