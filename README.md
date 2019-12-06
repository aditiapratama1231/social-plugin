[![CircleCI](https://circleci.com/gh/aditiapratama1231/social-plugin.svg?style=svg)](https://circleci.com/gh/aditiapratama1231/social-plugin)
# social-plugin

App for streaming facebook feeds


# Setup

Copy .env file

```
cp .env.example .env
```

Fill .env below with your own credentials

```
FACEBOOK_HOST=https://graph.facebook.com/
FACEBOOK_CLIENT_ID=
FACEBOOK_CLIENT_SECRET=
FACEBOOK_USER_ID=
```

# How to Run

You need node v10.x or later to run this project

```
npm install
npm run dev
```

## Run App via :

Docker
```
docker run -p [PORT]:8080 aditiapratamagg/social-plugin
```

Docker-Compose
```
docker-compose up --build
```

## Run Test!

running test with `jest`
```
npm run test
```
