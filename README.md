# CloudScend Foresight by SAIC

CloudScend Foresight Documentation site powered by Docusaurus and published to GitHub Pages. Contains a User Guide, Installation Guide, and an Operations Guide for using CloudScend Foresight.

See the [webapp](./webapp) directory for the Docusaurus code

## Prerequisites

- [go-task](https://taskfile.dev)
- [pre-commit](https://pre-commit.com/)
- Current version of Node/NPM

## Getting Started

1. Fork/Import this repository
1. (SAICers) Change [LICENSE](./LICENSE) to whichever license that needs to be applied here
   1. If you are providing documentation for something that is being published as open source, the license of this project should match the license of the software
   1. If you are publishing the documentation of a proprietary/commercial product, use [Createive Commons Attribution NonCommercial ShareAlike (CC-NC-SA)](<https://tldrlegal.com/license/creative-commons-attribution-noncommercial-sharealike-(cc-nc-sa)>)
1. Edit [./webapp/docusaurus.config.js](./webapp/docusaurus.config.js)
   1. `title:` - Title of your site
   1. `tagline:` - Tagline of your site
   1. `url:` - URL of the base website (SAICers: You shouldn't need to change this)
   1. `baseUrl:` - Base path that your site lives on. Should be the same as the github repo name
   1. `organizationName:` - GitHub org name (SAICers: You shouldn't need to change this)
   1. `projectName:` - Name of the GitHub repo
   1. other - make whatever other changes you need to customize your site
1. Get the project wired up with a compliant CI/CD pipeline. SAIC uses CodeFresh for this. Please contact the admins.

## Usage

```sh
# Validate project
task validate

# Run tests
task test

# Run security scans (there aren't any yet)
task secure

# Run the site locally, have it watch for changes and automatically rebuild
task start

# Build the Docusaurus static content
task build

# Deliver/Deploy the specified branch to GitHub Pages
GIT_USER="bobbytables" \
GIT_PASS="abc123abc123abc123abc123abc123abc123" \
DEPLOYMENT_BRANCH="gh-pages" \
CURRENT_BRANCH="main" \
GIT_CONFIG_USR="Robert Tables" \
GIT_CONFIG_EMAIL="bobbytables@example.com" \
task deliver
```

See more Docusaurus-centric instructions in [./webapp/README.md](./webapp/README.md) or at [https://v2.docusaurus.io/](https://v2.docusaurus.io/)
