# Swagger UI Demo

## Installation

After checkout repository, please run:

```sh
npm i
```
When all packages are installed, please make sure you install ngrok in your local

```sh
brew install --cask ngrok
```

Please register your account and get token from [Ngrok Authenticate](https://breakdance.github.io/breakdance/)

```sh
ngrok authtoken <YOUR_NGROK_TOKEN>
```

## Running

For publish the application example, please run

```sh
nodemon -L app.js
```
After you see "Server is running on port XXXX". Please open another terminal and run

```sh
ngrok http <PORT_LOCAL_RUNNING>
```
You will see this line in terminal. For example:
```sh
Forwarding   http://dbc9-2405-9800-b620-2bf2-9d5c-5719-1b8a-4182.ngrok.io -> http://localhost:8080
```

Please copy <URL_forwarding + /api-docs/> and paste to browser to see Swagger UI

## Note :
Please do not close any terminal during using this Swagger UI