# App Overview

This app is made with two components, App and Overview. The app renders an input field and a submit button. With the submit button, you can add the content from your input to a “tasks array” that is managed in state. (Class components were used for this project). Finally, for each task in the tasks array, an HTML list element is rendered.

## Step-by-Step Outline

1) Run npx create-react-app task-app, cd into your project and open it. You can delete everything in the return statement of the App component and just return an empty div. You can also delete all of the boilerplate create-react-app provides and just leave index.js and App.js in the src directory. Just make sure to clean up the import statements and the serviceWorker in the two remaining files. If you aren’t familiar with what code or files we are referring to, go back to the first lesson of this section.

1) Create a components folder in your src directory and create a file for your component called Overview.js. Overview.js should just render our tasks, while App.js is going to handle the input field with the logic.

1) With the intended functionality explained, it’s your turn to implement this React app. You can do it. You are not required to style this assignment unless you wish to, the focus is on using event handlers and dealing with forms with state.

1) Quick tip: Use the JavaScript function map to map over your tasks array. You will need to provide a unique key to each item (read the warning, you’ll know it when you see it in the console!). And there is a difference between handling input fields in plain JavaScript and in React. If you face a problem with it, attempt to figure it out on your own using tools like the documentation, StackOverflow, Google, or experimenting. But fear not, we will again provide an overview of our solution below.

### See the Instructions Online

Click [here](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/handle-inputs-and-render-lists)