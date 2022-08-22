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

![Download](docs/images/download.png | width=50) 

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
