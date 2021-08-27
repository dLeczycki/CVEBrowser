# CVEBrowser
It is an FrontEnd application for browsing Common Vulnerabilities and Exposures. Its goal is to make better UX for browsing CVE than https://nvd.nist.gov/vuln/search. I want it also to allow generate periodic bulletins based on teams interests so that it could raise awarness about new vulnerabilities in used software and technologies.

API is delivered by NIST (National Institute of Standards and Technology).
API: https://services.nvd.nist.gov/rest/json/cves/1.0 

Application is powered by React and runs via Docker Compose.

For now application is being developed and is not in its final form.

# Prerequisities
To run application you need to have installed:
 - Node
 - Docker
 - Docker Compose
For now installation of these is not covered. If you need to setup these please visit vendors sites to find out more about it.

# Running application in development
...
yarn run dev
...

# Running application in production
At first you need to build production image
...
yarn run build-docker
...

And at last run it with
...
yarn run prod
...