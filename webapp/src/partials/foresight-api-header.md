---
id: foresight-api-guide
title: CloudScend Foresight API Guide
hide_title: CloudScend Foresight API Guide
sidebar_label: CloudScend Foresight API Guide
---

<!-- Run npm run build-api-doc after modifying this header -->

import ApiRequest from "@site/src/components/api-request";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import useBaseUrl from "@docusaurus/useBaseUrl";

# CloudScend Foresight API Guide

## Introduction

The CloudScend Foresight API provides access to endpoints you can use to integrate into your own tools.

The most important endpoints of the CloudScend Foresight API have been organized below into feature areas.

## Base URL

All URLs referenced in the documentation start with a base URL variable which represents the protocol and host name of the applicable CloudScend Foresight API service. For example `https://foresight-api-backend.example.com`.

The default `baseURL` variable should point to the CloudScend Foresight backend API service. `sourceCodeUploaderBaseUrl` should point to the CloudScend Foresight Source Code Uploader API service.

## Authentication

All endpoints require authentication and are secured using [Keycloak](https://www.keycloak.org/). CloudScend Foresight uses OAuth2 for authentication and authorization of the API.
OAuth2 is a protocol designed to let third-party applications authenticate to perform actions as a user, without getting the user's password.
There are several libraries available that implement the protocol, and a good list can be found at the [OAuth2](https://oauth.net/2/) home page.
Through the use of OAuth2, you'll go through the process of obtaining a token and then you'll use that token in every request made to the CloudScend Foresight API to verify your identity.

CloudScend Foresight API servers accept Bearer tokens through the HTTP Authorization header in requests. Bearer tokens allow requests to authenticate using an access key, such as a JSON Web Token (JWT).

The example below shows how to automate processes by requesting a token from Keycloak, extracting the token, and passing the token to the CloudScend Foresight backend,
which would be suitable for a CI/CD pipeline.

```bash
#!/bin/bash

echo "Requesting authentication"

RESULT=`curl -s --location --request POST \
"$KEYCLOAK_BASE_URL/auth/realms/appmod/protocol/openid-connect/token" \
--data-urlencode 'grant_type=password' \
--data-urlencode "username=$FORESIGHT_USERNAME" \
--data-urlencode "password=$FORESIGHT_PASSWORD" \
--data-urlencode 'grant_type=password' \
--data-urlencode 'client_id=sage'`
echo $RESULT

TOKEN=`echo $RESULT | sed 's/.*access_token":"//g' | sed 's/".*//g'`
echo "Extracted token"
echo $TOKEN

curl $FORESIGHT_API_BASE_URL/sage/application/ -H "Authorization: bearer $TOKEN"
```

## Postman Collection

The quickest way to get started is to use our Postman request collection. The following steps will help you get up and running.

1. **Import the CloudScend Foresight Postman Collection**

   - <a
     href={useBaseUrl("/data/foresight-api.postman_collection.json")}
     download
     className="button button--primary"
     > Download Postman Collection
     > </a>
   - From Postman, Import -> Select downloaded Foresight postman collection

2. **Configure Postman Environment**

   - Setup a new environment in Postman. Click New -> Environment.
   - Name the new environment _Foresight API_
   - Add the following variables:
     - baseUrl: _enter the CloudScend Foresight Backend API URL_
     - sourceCodeUploaderBaseUrl: _enter the CloudScend Foresight Source Code Uploader Base URL_
     - loginBaseUrl: _enter the Keycloak service base url_
   - Click Add to create

3. **Authenticate**

   - In the Authorization tab for the collection, select OAuth 2.0 from the Type dropdown list. By default Postman will append the access token to Bearer in the Authorization header for your request.
   - To request an access token, fill out the fields in the Configure New Token section. There are several ways to configure based on the Grant Type you want to use. For the Password Credentials grant type enter the following details:
     - Access Token URL: {{loginBaseUrl}}/auth/realms/appmod/protocol/openid-connect/token
     - Client ID: sage
     - Username: {{FORESIGHT_USERNAME}}
     - Password: {{FORESIGHT_PASSWORD}}
     - Scope: openid email profile
     - Client Authentication: Send as Basic Auth header
   - Click Get New Access Token
   - Click Use Token
   - Click Update to save the Authorization details. You can save both the token and the details to generate a token with your request or collection.
   - View [Postman Documentation on OAuth2 Authentication](https://learning.postman.com/docs/sending-requests/authorization/#oauth-20) for more info.

4. **Explore the API**

   - Execute any of the requests within the collection
   - Refer to this documentation for the requirements of each request

<!-- End MD Header. Warning: Content after this point is autogenerated -->