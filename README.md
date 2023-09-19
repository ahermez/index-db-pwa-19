# Text Editor Starter Code


### Offline Notes and Code Snippets Web Application
Table of Contents
Introduction
Features
Getting Started
Prerequisites
Installation
Usage
Technologies Used
Contributing
License

### Introduction
As a developer, you often need to take notes or store code snippets for future reference. However, internet connectivity is not always guaranteed. This web application aims to solve this problem by allowing you to create and manage notes or code snippets both online and offline. You can write and store your content, and it will be reliably saved using IndexedDB, ensuring you can retrieve it later, even without an internet connection.

### Features
This web application provides the following features:

# Client-Server Folder Structure: 
When you open the application in your code editor, you will see a client-server folder structure.

# Easy Setup: 
Running npm run start from the root directory will start the backend and serve the client, making it easy to run the application locally.

# Webpack Integration: 
JavaScript files are bundled using Webpack, generating an HTML file, service worker, and a manifest file for a seamless web experience.

# Compatibility with Next-Gen JavaScript: 
The application supports next-gen JavaScript features, ensuring it functions correctly in modern browsers without errors.

# IndexedDB Integration: 
IndexedDB immediately creates a database storage when you open the text editor. Content is automatically saved when you enter it, and it is retrieved when you reopen the application.

# Download as Desktop Application: 
You can install the web application as an icon on your desktop, making it easily accessible.

# Service Worker: 
The application registers a service worker using Workbox, pre-caching static assets for a faster and more reliable experience.

# Heroku Deployment: 
Proper build scripts are provided for deploying the application to Heroku.

### Getting Started
## Prerequisites
Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your development machine.

## Installation
To set up the application, follow these steps:

# Clone this repository to your local machine: 
git clone https://github.com/your-username/notes-web-app.git

# Change to the project's root directory:
cd notes-web-app

# Install the dependencies:
npm install

### Usage
Start the application locally:
npm run start

This will launch the backend and serve the client.
Access the application in your web browser at http://localhost:3000.
Create, edit, and save your notes or code snippets both online and offline.

### Technologies Used
Node.js
Express.js
Webpack
IndexedDB
Workbox
HTML/CSS
JavaScript (ES6+)
Contributing
We welcome contributions from the community. If you'd like to contribute to this project, please follow our Contributing Guidelines.

### License
This project is licensed under the MIT License - see the LICENSE file for details.
