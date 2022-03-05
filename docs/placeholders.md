---
sidebar_position: 6
---

# Placeholders
A placeholder may refer to a:
-	**Field Placeholder** : An identifier representing a value to be inserted at runtime
	into a placeholder field in a template.

	E. g. The certificate date/title/UID.
-	**Bulk Placeholder** : A column in the CSV file being used for bulk certificate
	generation that doesn't correspond to any of the values
	for the fields in the template being used, but instead
	depicts a separate property to be specified for the
	certificate(s) to be generated.

	E. g. The certificates' title.

## Field Placeholders
Field placeholders are identifiers representing a
value to be used for the given placeholder field
upon rendering.

The following rules apply to placeholder properties:
-	All placeholder fields must have the property
	`placeholder` set to `true` in the template.
-	The value of the placeholder field in the template
	must represent a valid field placeholder in Rema.
-	The value may not be overridden upon certificate
	generation.
-	The value can be hidden for individual certificates
	by setting `hidden: true`. However, this isn't possible
	for bulk certificate generation; In such circumstances,
	extending the template to create a custom template is
	recommended.

The following field placeholders are available in Rema:
- `TEMPLATE_TITLE`
- `TEMPLATE_DATE`
- `CERTIFICATE_TITLE`
- `CERTIFICATE_DATE`
- `CERTIFICATE_UID`

### `TEMPLATE_TITLE`
| | |
| :---: | --- |
| Type | String |
| Description | The corresponding template's title. |

### `TEMPLATE_DATE`
| | |
| :---: | --- |
| Type | Date |
| Description | The date the corresponding template was last updated. |

### `CERTIFICATE_TITLE`
| | |
| :---: | --- |
| Type | String |
| Description | The certificate's title. |

### `CERTIFICATE_DATE`
| | |
| :---: | --- |
| Type | Date |
| Description | The date the certificate was created. |

### `CERTIFICATE_UID`
| | |
| :---: | --- |
| Type | String |
| Description | The certificate's UID. |

## Bulk Placeholder
Bulk placeholders are columns added to the CSV file during
bulk certificate generation that are used to perform
additional operations on the certificates.

Currently, Rema only supports the following bulk placeholder:
- `TITLE`

### `TITLE`
| | |
| :---: | --- |
| Type | String |
| Description | The certificate's title. |
| Default | `Certificate` (used when left empty in the CSV) |