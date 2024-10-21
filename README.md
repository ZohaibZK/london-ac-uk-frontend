# How to run the project

Run the following commands in the root directory of your cloned project:
1) npm i
2) npm start

The project will run on the port 3000

## Project details

This project is developed on react js with the help of react-bootstrap bootstrap and sass on atomic structure.
Components migrated from online resources are uiverse.io.
react-router-dom is used for smooth navigation.
react-toastify is used to show error or success messages in toast.
For responsivness bootstrap and sass is used.
At the moment backend is not integrated, every action is controlled by frontend.
Private routes are implemented for authorization flow and checks.
In order to login visit the Login.jsx file and in the handleLogin function you can find the credentials for admin and user.
A JSON is saved for admin and user along side their roles.
You can change the page title and page icon in the public directory. (There is a secret in index.html)
For themeing sass variables are used.
for tooltips react-tooltip is used.

### Project structure
So how the application works? The answer is simple MAGIC. Not the real magic but a logical magic.
Initally index.html (in the public directory) runs and it uses index.js through the id 'root'.
Index.js renders the DOM elements and uses App.jsx for further implementation.
App.js maintains all the routes.
assets directory has the assets for the application (like images, icons et).
components has the building blocks for the page.
layout is used as a parent to manage childrens.
customHook is implemented for form submissions.
Not Found page is there for non registered routes (in case you can't find anything go to Not Found.)
config has the configurations for the application. (it usually includes routes path and api paths.)


#### Want to react me out
email: zohaibkhalid2198@gmail.com
