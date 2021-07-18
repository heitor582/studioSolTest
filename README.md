# Description
This project is a test for be BackEnd developer at StudioSol and consists in resolution for Maximum subarray problem.

### Stack
- Node 16.3.0
- NestJs
- OpenApi
- Jest
- Typescript

# Clone

```bash
# Clone github project
$ git clone https://github.com/heitor582/studioSolTest.git

# Enter the folder
$ cd ./studioSolTest
```
# Instalation
## Running the app with docker
```bash
# install the dependencies
$ npm i

# Build the image
$ docker build -t studiosol .

# Run dockerfile
$ docker run -d -p 8080:8080 studiosol
```

## Running the app without Docker
### Start the app
```bash
# install node_modules
$ npm install

# run app
$ npm run start

# watch mode
$ npm run start:dev
```
# Unit Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```
# Executing OpenApi/Swagger
 In the url after run the program access for enter in the swagger and see all the routes with the respectives parameters.
 ```bash
http://localhost:8080/
```
![image](https://user-images.githubusercontent.com/58075535/126069508-025a0070-0f02-417b-8f21-34462dbb95d2.png)


# Import archive of Postman
  ### First what is it Postman?
  Postman is a program to make, organize and view the result of api requests.
  ### Running the app 
At the root of the project is a json that contains data that the postman program processes and transforms into pre-made requests.

In the postman click import -> Upload Files

![image](https://user-images.githubusercontent.com/58075535/124396541-92e1f900-dce0-11eb-9a0f-68eed8e69eb7.png)
![image](https://user-images.githubusercontent.com/58075535/124396554-9bd2ca80-dce0-11eb-9ceb-69372af6613f.png)


Import the json that is at the root of the project called 'StudioSol.postman_collection.json'

![image](https://user-images.githubusercontent.com/58075535/126069542-a375c52c-cd0f-476b-8937-1e8af2c2b018.png)

And click in Import button

![image](https://user-images.githubusercontent.com/58075535/126069548-b2f55cc4-0299-43ab-a230-f7ff56c412df.png)

Now select the project at Postman and just do some requests clicking in the request and send

![image](https://user-images.githubusercontent.com/58075535/126069577-2451d382-f66c-4a08-9113-4a475e67818f.png)

![image](https://user-images.githubusercontent.com/58075535/126069596-9d0b06f6-ed44-47bc-9d42-ec13efc053f1.png)


