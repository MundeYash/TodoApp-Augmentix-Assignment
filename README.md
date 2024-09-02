Objective: Create a to-do list application where users can add, edit, and delete
tasks.
• Details: Use MongoDB to store tasks, Express.js for server-side operations,
React.js for the user interface, and Node.js for backend logic.

This is a simple To-Do List application built with the MERN (MongoDB, Express, React, Node.js) stack. The application allows users to add, edit, delete, and mark tasks as completed. It also includes pagination to manage a large number of tasks, as per the requirements given in the Augmentix assignment.

Objective: Create a to-do list application where users can add, edit, and delete tasks.
Details: Use MongoDB to store tasks, Express.js for server-side operations, React.js for the user interface, and Node.js for backend logic.

Created and Developed by Yash Munde. All rights reserved to MundeYash Github Account.

STEPS to Run the Project on the local Machine

1. Clone the Repository via the respository

git clone https://github.com/MundeYash/TodoApp-Augmentix-Assignment.git
cd todo-app

2. Set Up the Server
   Navigate to the server directory:

cd backend

3.Install server dependencies:

npm install

4.Create a .env file in the server directory and add your MongoDB URI:

MONGO_URI=your_mongodb_uri // this is sample uri , add your mongouri

5. start the server

npm start

Start the Frontend (client side )

1.Navigate to the frontend directory:
cd ../frontend

2.Install client dependencies:
npm install

3.Start the client:

npm start

The client will run on http://localhost:3000.

. Access the Application
Open your browser and navigate to http://localhost:3000 to access the To-Do List application.
