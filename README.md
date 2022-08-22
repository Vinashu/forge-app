# FORGE App
This website is an educational application designed for the classroom. In it, the student finds a list of activities (Figure 1-a) released sequentially after interacting with each of them (Figure 1-b). It was created to show a possible use of the FORGE framework.

FORGE is a framework created to manage rewards in gamified environments. Registering the rewards and defining how they will be released is possible. The framework has an API that receives messages, processes them, and sends rewards back. More about the [FORGE framework can be learned from its repository](https://github.com/Vinashu/forge-server).

In the case of the FORGE App, each activity is a reward created in the FORGE framework. In addition to basic functionality, such as user control and content display, the site prepares messages, sends them to the framework, and applies changes that reflect the responses received.

![Figure 1](docs/images/figure1.png) 

## Live Demo
It is possible to test the FORGE App directly online. It is hosted on a free service that goes offline after 10 minutes of inactivity. The server works again as soon as a request is made to it.

The Forge App: [https://forge-app-example.herokuapp.com/](https://forge-app-example.herokuapp.com/)

There is also an online version of the FORGE framework available for testing. All rewards created in it will be visible in the FORGE App.

The FORGE Framework: [https://forge-server-example.herokuapp.com/](https://forge-server-example.herokuapp.com/)

## Features
- Frontend responsible for the single-page application.
- Backend with protected routes that serve as an intermediary between the Frontend and the Framework.
- Full integration with the FORGE framework.
- Simplified user creation.
- List of activities that can include texts, videos (hosted on YouTube) and quizzes (via Google Form).

## Installation
The application can be installed locally or on a remote server. Installation details of the [FORGE framework](https://github.com/Vinashu/forge-server) can be found in its repository.

### Cloning or Downloading the source code
The first step is to clone or download the source code. To clone it, open a terminal on your computer and use the command:

```bash
git clone https://github.com/Vinashu/forge-app.git
```

Alternatively, you can visit the repository, click the "code" button and then click Download ZIP.

<img src="docs/images/download.png" style="display: block; margin-left: auto; margin-right: auto; width: 50%;" />

After downloading it, you must unzip the file before using it. You don't need this step if you have cloned the repository.

```bash
unzip forge-app-main.zip
```

### Local Installation
The application is divided into two parts, the Backend, where all the communication and connection logic with the framework is located, and the Frontend, which is the application itself. To install the FORGE App, it is necessary to install the Backend, install the Frontend, generate the static pages and create the config file.

#### Installing the Backend
In the root of the application directory, use the command:
```bash
npm install
```
Esse processo irá efetuar o download de todas as bibliotecas e demais dependências necessárias. O processo poderá levar alguns minutos.

#### Installing the Frontend
Enter the frontend directory and use two commands, one to install the dependencies and the other to generate the static pages:
```
cd frontend
npm install
npm build
```

#### Creating the .env File
The application needs a configuration file called **.env**. As this file contains sensitive content, it is unavailable in the repository. You can create your file using the Mac terminal:
```bash
touch .env
```

or on Windows:
```dos
copy con .env
```

The **.env** file must have the following pairs of variables and values:
```
NODE_ENV = production
PORT = 5001
JWT_SECRET = SEQUENCE_OF_NUMBERS_AND_CHARACTERS
MONGO_URI = mongodb+srv://YOUR_LOGIN:YOUR_PASSWORD@merncluster.gdqnr.mongodb.net/forgeApp?retryWrites=true&w=majority
FORGE_URI = http://localhost:4500
```

- **NOD_ENV** can have two values: **production** or **development**. The backend is ready to run if the value is set to **production**. You can run the application for tests if it is set to **development**.

- **PORT** accepts a numeric value and sets the port for which the server will be listening for requests. In this example, the port is set to **5001**.

- **JWT_SECRET** is used to encrypt the token to validate the communication between the Frontend and the Backend. Use a long sequence of numbers and letters without blank spaces.

- **MONGO_URI** is the address of the database. The FORGE App connects to a MongoDB database. This example is connected to a database on the cloud hosted by MongoDB. You can change this variable to point to your local server. You must add your login (**YOUR_LOGIN**) and password (**YOUR_PASSWORD**) to URI.

- **FORGE_URI** is the address of the FORGE framework. It can be on your local machine, for example, or on the internet.

#### Run the Server
The last step is to start the server:
```bash
npm run start
```


### Online Deployment
You can alternatively run the FORGE App in the cloud. If you want to create a free MongoDB Atlas account, read this article:
[https://www.mongodb.com/docs/atlas/getting-started/](https://www.mongodb.com/docs/atlas/getting-started/)

If you want to deploy the FORGE App directly from your git repository, follow the steps in this article:
[https://devcenter.heroku.com/articles/github-integration](https://devcenter.heroku.com/articles/github-integration)

You can also edit config vars from your app’s Settings tab in the Heroku Dashboard:
[https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard](https://devcenter.heroku.com/articles/config-vars#using-the-heroku-dashboard)
