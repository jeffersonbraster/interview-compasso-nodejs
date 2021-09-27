# Interview Compasso NodeJS 

nodejs challenge for compasso uol.


## API Reference

### Cliente

#### Register Cliente

```http
  POST /api/cliente
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. name of client|
| `sexo` | `string` | **Required**. sexo of client|
| `data_nascimento` | `string` | **Required**. birth date of client|
| `idade` | `number` | **Required**. age of client|
| `cidade` | `string` | **Required**. city of client|

#### Get cliente

```http
  GET /api/cliente/${param}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the client|

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. Name of the client|


#### Update cliente

```https
  GET /api/cliente/${param}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name to update|


#### Delete cliente

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. ID of the client|

### Cidade

#### Register Cidade

```http
  POST /api/cidade
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. name of city|
| `estado` | `string` | **Required**. name of state|

#### Get cidade

```http
  GET /api/cidade/${param}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`      | `string` | **Required**. name of city|


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `estado`      | `string` | **Required**. name of state|

## Environment Variables

To run this project, you will need to add the following environment variable to your .env file

`MONGODB_URL=`
  
## Run Locally

Clone the project

```bash
  git clone git@github.com:jeffersonbraster/interview-compasso-nodejs.git
```

Go to the project directory

```bash
  cd interview-compasso-nodejs
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn dev
```

  