# CVEBrowser
It is FrontEnd application for browsing Common Vulnerabilities and Exposures. Its goal is to make better UX for browsing CVE than https://nvd.nist.gov/vuln/search. I want it also to allow generate periodic bulletins based on teams interests so that it could raise awarness about new vulnerabilities in used software and technologies.

API is delivered by NIST (National Institute of Standards and Technology).
API: https://services.nvd.nist.gov/rest/json/cves/1.0 

Application is powered by React and runs via Docker Compose.

For now application is being developed and is not in its final form.

## Prerequisities
To run application you need to have installed:
 - Node
 - Docker
 - Docker Compose

For now installation of these is not covered. If you need to setup these please visit vendors sites to find out more about it.

## Running application in development
Run in terminal:
```
yarn run dev
```

Run in terminal in detached mode:
```
yarn run dev -d
```

You need to remember that application uses Docker. Some issues happen due to this technology. If you are not familiar with it you may encounter problems which may be solved when you get to know more about Docker.

If you don't want to use it in development simply run below command to open application locally:
```
yarn run start
```

## Running application in production
At first you need to build production image
```
yarn run build-docker
```

And at last run it with
```
yarn run prod-docker
```

Above commands create Docker production container. If you want production build to run in a different way you need to configure application files on your own.

