---
sidebar_position: 1
---

# Certificates
A certificate is an entity that extends an existing template by
specifying the values for or hiding certain individual fields.

It comprises on the following properties:
- The template it extends.
- A title for the certificate.
- Values for all mandatory and chosen optional fields.
- Whether or not some field(s) should be hidden.

A certificate is exactly what is supposed to be served to the end-user
by Rema.

## Certificate Schema
Just like templates, certificates exist as a JSON-compliant documents in the
database. Assuming them to be JavaScript objects, below is a detailed description
of the valid properties available in any certificate.

Properties:
- `uid`
- `title`
- `template`
- `values`
- `date`

### `uid`
| | |
| :---: | --- |
| Type | String (UUID v4) |
| Required | Cannot be set, always generated |
| Description | The unique identifier for each certificate. |
| Default | A unique generated identifier. |

### `title`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | The title of the certificate. |
| Default | `Certificate` |

### `template`
| | |
| :---: | --- |
| Type | String |
| Required | Yes |
| Description | The name of the corresponding template. |

### `values`
| | |
| :---: | --- |
| Type | An array of values |
| Required | Yes, at least an empty array |
| Description | A list of all values. See [value schema](#value-schema) for details. |

### `date`
| | |
| :---: | --- |
| Type | Date |
| Required | Cannot be set, always generated |
| Description | The date the certificate was created. |
| Default | The date the certificate was created as an ISO string. |

---

## Value Schema
Values are individual entries corresponding to the respective
fields in the parent template.

- Required (`required: true`) fields
  without a value or a default value (`defaultValue`) defined
  within the template must be provided in the certificate values.
- Fields whose values are provided with `visible: false` are not
  rendered in the final certificate.

Properties:
- `name`
- `value`
- `visible`

### `name`
| | |
| :---: | --- |
| Type | String |
| Required | Yes |
| Description | The unique identifier for the corresponding field in the certificate's parent template. |

### `value`
| | |
| :---: | --- |
| Type | Depends on the `type` or the corresponding field |
| Required | Depends, see [value schema](#value-schema) |
| Description | A value for the corresponding field. |
| Default | Depends on the default value or value of the corresponding field, could be empty |

### `visible`
| | |
| :---: | --- |
| Type | Boolean |
| Required | No |
| Description | If `false`, the corresponding field won't be rendered. |
| Default | `true` |