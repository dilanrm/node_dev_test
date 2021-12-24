# node_dev_test

## Installation

In the project directory, you can run:

```bash
npm install
```

For running the server file on you can use this command.

```bash
npm start
```

# Endpoint
## Login endpoint
```http
POST /login
```
This is **Required** to get `access_token`.

| body | Type | 
| :--- | :--- | 
| `username` | `string` |
| `password` | `string` | 

## Jobs endpoint
```http
GET /jobs
```
**Required** you to append `access_token` to headers.

optionally, you may append the `location=[location]`,`description=[description]`, and `full_time=[full_time]` as search parameters.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `description` | `string` | A search term, such as "ruby" or "java". |
| `location` | `string` | A city name, zip code, or other location search term. |
| `full_time` | `string` | If you want to limit results to full time positions set this parameter to 'true'. |

## Jobs detail endpoint
```http
GET /jobs/details/{id}
```
**Required** you to append `access_token` to headers.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | A search term, `id` which you want to return the data. |

## Built With

- Node.js
- NPM
- Exress.js
- Axios
