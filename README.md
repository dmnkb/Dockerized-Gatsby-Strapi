![example workflow](https://github.com/dmnkb/Dockerized-Gatsby-Strapi/actions/workflows/docker-image.yml/badge.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=round)

# Dockerized-Gatsby-Strapi
*✍️ WiP*

This repository aims to serve as a starter kit for a self-hosted [Jamstack](https://jamstack.org/) website using [Gatsby](https://www.gatsbyjs.com/) and [Strapi](https://strapi.io/) bootstrapped as Docker containers ready to be deployed.

I'm open to suggestions and contributions! 🚀

### Motivation

I wanted to create a modern web environment that is *convenience-first* (similar to WordPress with the [ACF](https://www.advancedcustomfields.com/) plugin installed, but less monolithic), uses a modern tech stack under the hood (Node.JS), is cheap to host (Any Docker host, really), and SEO-friendly ([SSG](https://www.gatsbyjs.com/blog/choosing-the-best-page-rendering-modes-for-your-gatsby-site/#gatsby-skip-here)).

### Getting started

1. Clone the repository
2. Install the gatsby CLI globally on your system `npm install -g gatsby-cli` or `yarn global add gatsby-cli`
3. `cd` into the *gatsby* folder and install the dependencies `npm install` or `yarn`
4. `cd` into the *strapi* folder and add a *.env* file with the following contents:
```
HOST=0.0.0.0
PORT=1337
APP_KEYS=<YOUR_APP_KEYS>
API_TOKEN_SALT=<YOUR_API_TOKEN_SALT>
ADMIN_JWT_SECRET=<ADMIN_JWT_SECRET>
JWT_SECRET=<JWT_SECRET>
```
To generate *.env* contents you could install a separate Strapi instance using `npx create-strapi-app@latest my-project --quickstart
` which can be deleted afterward.

5. Run `make dev` in order to run Strapi and a Postgres database dockerized and Gatsby in development mode.
6. Locate Gatsby under `localhost:8000` and Strapi under `localhost:1337`
7. In order to make Strapi expose the preconfigured *Pages* collection type, navigate to Settings -> Roles -> Public and make sure "find" under *Pages* and everything under *Content type builders* is checked. If gatsby is throwing an error please rebuild the data layer or refer to the Gatsby documentation.

### Architecture

<img width="50%" alt="image" src="https://user-images.githubusercontent.com/44138768/164094359-af127846-d24b-4af7-a145-f81a7be5d011.png">
<img width="50%" alt="image" src="https://user-images.githubusercontent.com/44138768/164094421-acf5cbaa-a139-45b8-92b3-1115e597aaee.png">

### Production / Deployment

Test the setup in production mode running `make prod`. It should run on any Docker host with docker-compose installed using `docker-compose -f docker-compose.prod.yml up`.
