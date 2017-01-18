# Introduction

My-Nanny contains the parental control interface (React Webpack) for managing kids' chores and schedule, which the children can then interact with through Alexa.

[Screen shot of a nice page]

See more at https://my-nanny.org

# Setting Up Development Environment

Because this client uses AWS Login, the development environment uses https to pass the tokens securely.  See the README in /src for instructions on how to set up https on localhost.

```ssh
Set Up the Backend - my-nanny-api (link)
Enable local SSL (link)
Configure Ports
sudo npm run start (webpack)
```

# Overal Architecture

[Shared text between all 3 modules, this is a picture of the modules, and how they interact (web, api and alexa)]
