# Student Manager Portal for School Academy Institute 

### Scenario
New Generation High School is a newly established institution that aims to create a student portal for administrators to manage student information effectively. The web application allows the administrator to view and modify a list of students, including adding new students to the database.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Table of Contents
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)


## Technologies Used
- Node.js
- Next.js

## Installation
To set up the project, follow these steps:

1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/).

2. **Create a new Next.js project**:
   ```bash
   npx create-next-app School Academy Institute Student Manager
   cd School Academy Institute Student Manager
3. **npm install json-server
    npx json-server --watch db.json --port 3001

## Features

- **Custom Navbar:** A static navbar for easy navigation throughout the application.
- **Student List:** A display of students with detailed information.
- **Footer:** Contains essential information about New Generation High School.
- **Student Information:** Each student entry includes:
  - First name and last name
  - Date of birth
  - Current grade
- **Add New Student Form:** A form that allows the addition of new student entries to the list, complete with data validation
- **Pages:** Static About/Services/Contact pages


## Usage

To use the Student Manager Portal, follow these steps:

## Accessing the Application
1. Open your web browser and navigate to `http://localhost:3000` to view the student portal.

## Interacting with the Application
- **View Students:** You will see a list of students displayed on the main page.
- **Add New Students:** 
  - Use the form provided on the page to add new students. 
  - Ensure that you fill out all required fields and that the data is valid before submitting.
- **Modify Student List:** As an administrator, you can modify the student list as needed using the available functionality in the portal.

### Example of Adding a New Student
Here is an example of how to add a new student:

- **First Name:** John
- **Last Name:** Doe
- **Date of Birth:** 2005-08-15
- **Current Grade:** 10

Fill in the above details in the form and click "Add Student" to save the information.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
