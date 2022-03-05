---
sidebar_position: 2
---

# Certificate API
The certificate API is used to create, manage, update, and remove certificate.
As of now, it isn't authenticated. It functions as a REST API, supporting a variety of routes and methods.

All APIs are mounted on the `/api` route, including the certificate API.
Unless states otherwise, all non-empty request bodies are expected to be be JSON.

The following routes and methods are supported in the certificate API.

## `/api/certificate`
This route supports 3 methods: `GET`, `POST`, and `DELETE`.

### `GET`
Retrieves the credential IDs of all certificates.

<details>
<summary>Request</summary>

```http
GET /api/certificate
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "11 certificate(s) found!",
	"count": 11,
	"data": [
		"e03a698d-e7a4-4a49-af72-7c90c8966a90",
		"78966f20-0a4a-4f98-8634-bb2019d5dc94",
		...,
		"6b7ede30-6924-47f1-92cb-8f974d5f2dc3"
	]
}
```

</details>

### `POST`
Generates a new certificate.

<details>
<summary>Request</summary>

```http
POST /api/certificate
Content-Type: application/json

{
	"title": "My Certificate",
	"template": "stock-best-award",
	"values": [
		{
			"name": "name",
			"value": "Param Siddharth"
		},
		{
			"name": "Description",
			"value": "This is a sample victory!"
		},
		{
			"name": "signature",
			"value": "Param"
		}
	]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Certificate created!",
	"data": {
		"title": "My Certificate",
		"template": "stock-best-award",
		"values": [
			{
				"value": "Param Siddharth",
				"visible": true,
				"name": "name"
			},
			{
				"value": "Param",
				"visible": true,
				"name": "signature"
			}
		],
		"date": "2021-07-22T15:55:11.094Z",
		"uid": "126b8636-ccf9-4f78-b795-5a830c48a54e"
	}
}
```

</details>

### `DELETE`
Delete all/multiple certificates.
Currently, this method only supports deleting ALL
certificates.

<details>
<summary>Request</summary>

```http
DETELE /api/certificate
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "All certificates deleted!",
	"data": [
		"e03a698d-e7a4-4a49-af72-7c90c8966a90",
		"78966f20-0a4a-4f98-8634-bb2019d5dc94",
		...,
		"126b8636-ccf9-4f78-b795-5a830c48a54e"
	],
	"count": 12
}
```

</details>

## `/api/certificate/{uid}`
This route is used for operations pertaining to the certificate identified by `{uid}`.
It supports the `GET`, `PATCH`, and `DELETE` methods.

### `GET`
Retrieves a particular certificate.

<details>
<summary>Request</summary>

```http
GET /api/certificate/126b8636-ccf9-4f78-b795-5a830c48a54e
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Certificate found!",
	"data": {
		"title": "My Certificate",
		"template": "stock-best-award",
		"values": [
			{
				"value": "Param Siddharth",
				"visible": true,
				"name": "name"
			},
			{
				"value": "Param",
				"visible": true,
				"name": "signature"
			}
		],
		"date": "2021-07-22T16:25:47.113Z",
		"uid": "126b8636-ccf9-4f78-b795-5a830c48a54e"
	}
}
```

</details>

### `PATCH`
Update a particular certificate.

The request body is supposed to have an updated version
of the same certificate. The untouched global properties
of the certificate and the unchanged values may be omitted.

<details>
<summary>Request</summary>

```http
PATCH /api/certificate/126b8636-ccf9-4f78-b795-5a830c48a54e
Content-Type: application/json

{
	"title": "Your Certificate"
}
```

</details>
<details>
<summary>Response</summary>

```json
{
	"data": {
		"title": "Your Certificate",
		"template": "stock-best-award",
		"values": [
			{
				"value": "Param Siddharth",
				"visible": true,
				"name": "name"
			},
			{
				"value": "Param",
				"visible": true,
				"name": "signature"
			}
		],
		"date": "2021-07-22T16:25:47.113Z",
		"uid": "126b8636-ccf9-4f78-b795-5a830c48a54e"
	},
	"msg": "Certificate updated!"
}
```

</details>

### `DELETE`
Deletes a particular certificate.

<details>
<summary>Request</summary>

```http
DELETE /api/certificate/126b8636-ccf9-4f78-b795-5a830c48a54e
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Certificate deleted!",
	"data": {
		"title": "Your Certificate",
		"template": "stock-best-award",
		"values": [
			{
				"value": "Param Siddharth",
				"visible": true,
				"name": "name"
			},
			{
				"value": "Param",
				"visible": true,
				"name": "signature"
			}
		],
		"date": "2021-07-22T16:25:47.113Z",
		"uid": "126b8636-ccf9-4f78-b795-5a830c48a54e"
	}
}
```

</details>

## `/api/certificate/{uid}/view`
This route supports only `GET` requests and returns the
rendered certificate identified by `{uid}`. The format
is PNG by default. If the query parameter `pdf` is provided
with any value, the certificate is rendered and returned
as a PDF.

- PNG:
  ```http
  GET /api/certificate/126b8636-ccf9-4f78-b795-5a830c48a54e/preview
  ```
- PDF:
  ```http
  GET /api/certificate/126b8636-ccf9-4f78-b795-5a830c48a54e/preview?pdf
  ```


## `/api/certificate/bulk`
This route supports only `POST` requests and is used to create
certificates in bulk using the same template.

The incoming request body must be of the type `multipart/form-data`,
containing the template name under the `template` key,
and a CSV file under the `list` key.

<details>
<summary>Request</summary>

```http
POST /api/certificate/bulk
Content-Type: multipart/form-data; boundary=biharsehoon

--biharsehoon
Content-Disposition: form-data; name="template"

stock-best-award
--biharsehoon
Content-Disposition: form-data; name="list"; filename="list.csv"
Content-Type: text/csv

name,Description,signature
Param Siddharth,This is a sample victory!,Param
Krishna Kabir Siddharth,This is a sample victory!,Param
Hans Lata,This is a sample appreciation!,Param
Santosh Kumar,This is a sample appreciation!,Param
--biharsehoon--
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Certificates generated!",
	"certificates": [
		"3aece973-f572-40b9-8292-02d15bbf6ca0",
		"6391f246-be6f-4360-9b57-a870db6dfa65",
		"6845ce11-5545-4b01-9b6b-136710f7e632",
		"bb644daa-e1f0-42bd-9806-a260125ac684"
	],
	"errors": [],
	"template": "stock-best-award"
}
```

</details>