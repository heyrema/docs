---
sidebar_position: 2
---

# Template API
The template API is used to create, manage, update, extend, and remove templates.
As of now, it isn't authenticated. It functions as a REST API, supporting a variety of routes and methods.

All APIs are mounted on the `/api` route, including the template API.
Unless states otherwise, all non-empty request bodies are expected to be be JSON.

The following routes and methods are supported in the template API.

## `/api/template`
This route supports 3 methods: `GET`, `POST`, and `DELETE`.

### `GET`
Retrieves the names of all templates.

<details>
<summary>Request</summary>

```http
GET /api/template
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "3 template(s) found!",
	"count": 1,
	"data": [
		"empty-curly-borders",
		...
	]
}
```

</details>

### `POST`
Creates a new template.

<details>
<summary>Request</summary>

```http
POST http://localhost:8080/api/template
Content-Type: application/json

{
	"name": "empty-curly-borders",
	"title": "Empty, Curly Borders",
	"background": "stock/empty/curly-borders.png",
	"dimensions": {
		"x": 990,
		"y": 765
	},
	"fields": [
		{ ... },
		{ ... }
	]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
	"data": {
		"name": "empty-curly-borders",
		"title": "Empty, Curly Borders",
		"background": "stock/empty/curly-borders.png",
		"dimensions": {
			"x": 990,
			"y": 765
		},
		"fields": [
			{ ... },
			{ ... }
		],
		"date": "2021-07-11T12:47:31.771Z"
	},
	"msg": "Template created!"
}
```

</details>

### `DELETE`
Deletes all/multiple templates.
-	If no query parameters are provided,
	- If there are no existing certificates, it deletes all templates.
	- If there are existing certificates, it returns a failure message.
-	If the parameter `unused` is provided with any value, it deletes all
	unused templates i. e. Those not used by any certificate.
-	If the parameter `force` is provided with any value, it deletes
	all certificates and templates.

<details>
<summary>Request</summary>

```http
DELETE /api/template
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "All templates deleted!",
	"data": [
		"empty-curly-borders",
		...
	],
	"count": 3
}
```

</details>

## `/api/template/{name}`
This route is used for operations pertaining to the template identified by `{name}`.
It supports the `GET`, `PATCH`, and `DELETE` methods.

### `GET`
Retrieves a particular template.

<details>
<summary>Request</summary>

```http
GET /api/template/empty-curly-borders
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Template found!",
	"data": {
		"name": "empty-curly-borders",
		"title": "Empty, Curly Borders",
		"background": "stock/empty/curly-borders.png",
		"dimensions": {
			"x": 990,
			"y": 765
		},
		"fields": [
			{ ... },
			{ ... }
		],
		"date": "2021-07-11T12:53:36.294Z"
	}
}
```

</details>

### `PATCH`
Update a particular template.

The request body is supposed to have an updated version
of the same template. The untouched global properties
of the template and the unchanged fields may be omitted.

-	Fields that are supposed to be deleted should have the
	property `delete` set to `true`.

	<details>
	<summary>Example</summary>

	```json
	{
		"fields": [
			{ ... },
			{
				"name": "unwantedField",
				"delete": true
			},
			{ ... }
		]
	}
	```

	</details>

-	Fields that have the property `fixed` set to true in the
	template cannot be updated unless `"force": true` is
	present in the field's body.

	<details>
	<summary>Example</summary>

	```json
	{
		"fields": [
			{ ... },
			{
				"name": "thisFieldFailsToGetUpdated",
				"position": {
					"x": 20,
					"y": 30
				}
			},
			{
				"name": "thisFieldGetsUpdatedSuccessfully",
				"position": {
					"x": 20,
					"y": 30
				},
				"force": true
			},
			{ ... }
		]
	}
	```

	</details>

-	If no query parameters are provided,
	- If there are no existing certificates associated with the template, it updates the template.
	- If there are existing certificates associated with the template, it returns a failure message.
-	If the parameter `force` is provided with any value, it deletes all
	the associated certificates are deleted and the template is updated.
-	If both the `force` and `keep` parameters are provided with any values,
	the associated certificates are retained and the template is updated.

<details>
<summary>Request</summary>

```http
PATCH /api/template/empty-curly-borders
Content-Type: application/json

{
	"dimensions": {
		"x": 400,
		"y": 500
	},
	"title": "Chappal",
	"fields": [
		{
			"name": "Surname",
			"delete": true
		},
		{
			"name": "DP",
			"position": {
				"x": 200,
				"y": 300
			}
		}
	]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
	"data": {
		"name": "empty-curly-borders",
		"title": "Chappal",
		"background": "stock/empty/curly-borders.png",
		"dimensions": {
			"x": 400,
			"y": 500
		},
		"fields": [
			{
				"name": "Name",
				...
			},
			{
				"name": "DP",
				"position": {
					"x": 200,
					"y": 300
				},
				...
			}
		],
		"date": "2021-07-11T13:01:32.711Z"
	},
	"msg": "Template updated!"
}
```

</details>

### `DELETE`
Deletes a particular template.

If the templates is being used by at least one certificate,
it won't be deleted and a failure message will be returned.

To force deletion of the template and its corresponding
certificates, use the `force` query parameter with any value.

<details>
<summary>Request</summary>

```http
DELETE /api/template/empty-curly-borders
```

</details>
<details>
<summary>Response</summary>

```json
{
	"msg": "Template deleted!",
	"data": {
		"name": "empty-curly-borders",
		"title": "Chappal",
		"background": "stock/empty/curly-borders.png",
		"dimensions": { ... },
		"fields": [
			{ ... },
			{ ... }
		],
		"date": "2021-07-11T13:01:32.711Z"
	}
}
```

</details>

## `/api/template/{name}/preview`
This route supports only `GET` requests and returns a
preview of the template identified by `{name}`. The format
is PNG by default. If the query parameter `pdf` is provided
with any value, the preview is rendered and returned
as a PDF.

- PNG:
  ```http
  GET /api/template/empty-curly-borders/preview
  ```
- PDF:
  ```http
  GET /api/template/empty-curly-borders/preview?pdf
  ```

## `/api/template/{name}/extend`
This route supports only `POST` requests and is used to create
new templates inheriting properties from the existing template
identified by `{name}`.

### `POST`
Creates a new template based on an existing template.

The same set of updation rules apply here as those of
`PATCH` on the `/api/template/{name}` route. See
[here](#patch) for details.

<details>
<summary>Request</summary>

```http
POST /api/template/empty-curly-borders/extend
Content-Type: application/json

{
	"name": "empty-curly-borders-new",
	"dimensions": {
		"x": 400,
		"y": 500
	},
	"title": "Kurta",
	"fields": [
		{
			"name": "Surname",
			"delete": true
		},
		{
			"name": "DP",
			"image": {
				"expectedSize": {
					"x": 30,
					"y": 34
				}
			},
			"value": "data:image/png;base64,iVBORw0KG...CYII=",
			"fixed": true
		}
	]
}
```

</details>
<details>
<summary>Response</summary>

```json
{
	"data": {
		"name": "empty-curly-borders-new",
		"title": "Kurta",
		"background": "stock/empty/curly-borders.png",
		"dimensions": { ... },
		"fields": [
			{
				"name": "Name",
				...
			},
			{
				"value": "data:image/png;base64,iVBORw0KG...CYII=",
				"name": "DP",
				"image": {
					"expectedSize": {
						"x": 30,
						"y": 34
					}
				},
				"fixed": true,
				...
			}
		],
		"date": "2021-07-11T13:14:40.685Z"
	},
	"msg": "Template created!"
}
```

</details>

## `/api/template/{name}/export`
This route supports only `GET` requests and returns and triggers
the download of the exported JSON document for the existing template
identified by `{name}`.

All images and resources used in the template are returned as a part
of the JSON in the form of Base64 encoded data URIs. If you don't want
this to happen and just want it with resource paths, use the query
parameter `plain` with any value.

The exported JSON can later be sent via a `POST` to
`/api/template` to recreate the template. All images and
resources used within the template will be embedded within the
exported JSON file.

### `GET`
Returns the template as an exported JSON.

<details>
<summary>Request</summary>

```http
GET /api/template/empty-curly-borders/export
```

</details>
<details>
<summary>Response</summary>

```json
{
	"name": "empty-curly-borders",
	"title": "Empty, Curly Borders",
	"background": "data:image/svg+xml;base64,PD94bW...iIgb2Zm=",
	"dimensions": {
		"x": 990,
		"y": 765
	},
	"fields": [
		{ ... },
		{ ... }
	]
}
```

</details>