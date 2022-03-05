---
sidebar_position: 1
---

# Templates
A template is a basic boilerplate that can be used to create certificates.

It comprises properties like:
- The background image to be used.
- Which fields to insert and where.
- What transformation and styling needs to applied to individual fields.
- What data-types must be supported by the individual fields.
- What dimensions should be used by individual fields and the resulting certificate as a whole.

In simple terms, a template is exactly what gets used to generate certificates.

## Template Schema
Templates exist as a JSON-compliant documents in the database. Assuming them to be JavaScript objects,
below is a detailed description of the valid properties available in any template.

Throughout all coming schemes, all positions are relative to the top-left of the
template box. `x` and `y` refer to numbers representing the horizontal and vertical co-ordinates respectively, in pixels.

Properties:
- `name`
- `title`
- `fields`
- `background`
- `backgroundColour`
- `dimensions`:
  - `x`
  - `y`
- `date`

### `name`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | The unique identifier for each template. |
| Default | A randomly generated value. |

### `title`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | A display title for the template. |
| Default | Same as `name`. |

### `fields`
| | |
| :---: | --- |
| Type | An array of fields |
| Required | Yes, at least one field |
| Description | A list of all fields. See [field schema](#field-schema) for details. |

### `background`
| | |
| :---: | --- |
| Type | String |
| Required | Yes |
| Description | A URL, data URI, or location (relative to the internal static directory), locating the background image. |

### `backgroundColour`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | A valid CSS colour identifier. Used as the fallback background colour for transparent regions in the `background` image. |

### `dimensions`
| | |
| :---: | --- |
| Type | Object |
| Required | Yes |
| Description | Dimensions of the template. |

Properties:
- `x`: A number representing the width in pixels.
- `y`: A number representing the height in pixels.

### `date`
| | |
| :---: | --- |
| Type | String |
| Required | Cannot be set, always generated |
| Description | An ISO date string referring to the date and time the template was last updated. |

---

## Field Schema
Fields are individual entries in the template that are
positioned at various locations in the generated certificates.

- They may or may not have a predefined value.
- They may or may not have a default value.
- Instead of a fixed value, they might have a standard placeholder determining their value upon certificate generation.
  See [[Placeholders]].

Properties:
- `name`
- `value`
- `defaultValue`
- `placeholder`
- `required`
- `rotation`
- `type`
- `textFormat`
  - `fontFamily`
  - `fontSize`
  - `stroke`
    - `colour`
    - `width`
  - `style`
    - `type`
    - `colour`
    - `gradient`
      - `start`
      - `end`
      - `stops`
  - `align`
  - `selectable`
- `image`
  - `expectedSize`
    - `x`
    - `y`
- `dateFormat`
- `position`
  - `x`
  - `y`
- `fixed`
- `date`

### `name`
| | |
| :---: | --- |
| Type | String |
| Required | Yes |
| Description | The unique identifier for each field in a template. |

### `value`
| | |
| :---: | --- |
| Type | Depends on `type` |
| Required | No |
| Description | A value for the field. Usually empty, because most fields are given a value only at the time of certificate-generation. |
| Default | Empty |

### `defaultValue`
| | |
| :---: | --- |
| Type | Depends on `type` |
| Required | No |
| Description | A default value for the field. If provided, it is used during certificate-generation when no value is provided. |
| Default | Empty |

### `placeholder`
| | |
| :---: | --- |
| Type | Boolean |
| Required | No |
| Description | If `true`, the `value` or `defaultValue` is used to dynamically generate the value based on the standard placeholder identifier. See [[Placeholders]]. |
| Default | `false` |

### `required`
| | |
| :---: | --- |
| Type | Boolean |
| Required | No |
| Description | Decides if a value for the field is required to be set during certificate-generation. If `false`, the field is not rendered in the absence of both the `value` and `defaultValue`. |
| Default | `true` |

### `rotation`
| | |
| :---: | --- |
| Type | Number |
| Required | No |
| Description | The angle in degrees to rotate the field by during rendering. A positive value means clockwise rotation, while a negative value means counter-clockwise rotation. |
| Default | `0` |

### `type`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | Defined the data-type of the field. |
| Default | `String` |

Possible values:
1. `Number`
2. `Boolean`
3. `String`
4. `Image`
5. `Date`

All field-types except `Image` are classified as text fields.
`Image` is the only non-text field.

### `textFormat`
| | |
| :---: | --- |
| Type | Object |
| Required | No |
| Description | Defines the rendering format of the text. This property is valid only if the `type` is set to a text field. |

Properties:
- `fontFamily`:
  The font to be used for the text field.  
  Default: `monospace`
- `fontSize`:
  The font size to be used for rendering.  
  This property can be set to a number (taken as pixels by default) or any valid CSS font size identifier string.

  Default: `10`
- `maxWidth`:
  A number representing the maximum allowed width of the
  rendered text in pixels. If found exceeding, the text
  will be squeezed and scaled within a width of the
  specified number of pixels.

  Default: None (No maximum limit to the width)
- `maxChars`:
  A number representing the maximum number of characters
  rendered. If provided, the rendered text is trimmed to
  a maximum of this number of characters.

  Default: None (No trimming)
- `stroke`:
  Defines the stroke format to be used, if any. See [Stroke Schema](#stroke-schema) for details.

  Default: Empty (no stroke)
- `style`:
  Defines the colour style to be used while rendering the field. See [Style Schema](#style-schema) for details.

  Default: Plain black colour
- `align`: Defines the alignment of the text with respect to
  the assigned position.

  Possible values:
  1. `start` (Default) (depends on `direction`)
  2. `end` (depends on `direction`)
  3. `left`
  4. `centre`
  5. `right`
- `direction`: The direction of the text.

  Possible values:
  1. `ltr` (Default) (left to right)
  2. `rtl` (right to left)
- `selectable`: A boolean value that defines whether the
  text is selectable or not. It has effect only in the
  generated PDFs.

  Default: `true`

### `image`
| | |
| :---: | --- |
| Type | Object |
| Required | Yes, if the `type` is set to `Image` |
| Description | Defines the rendering format of the text. This property is valid only if the `type` is set to `Image`. |

Properties (currently has only one property):
- `size`: Defines the dimensions to be used for the image.
  It is an object with the following two properties:
  - `x`: A number representing the width in pixels.
  - `y`: A number representing the height in pixels.

### `dateFormat`
| | |
| :---: | --- |
| Type | String |
| Required | No |
| Description | Defines the format to be used for date fields. The format is supposed to be a [`strftime`](https://strftime.org/)-compatible date/time format string. This property is valid only if the `type` is set to `Date`. |
| Default | `%d/%m/%Y` |

### `position`
| | |
| :---: | --- |
| Type | Object |
| Required | Yes |
| Description | The position of the field. |

Properties:
- `x`: A number representing the horizontal co-ordinate in pixels.
- `y`: A number representing the vertical co-ordinate in pixels.

### `fixed`
| | |
| :---: | --- |
| Type | Boolean |
| Required | No |
| Description | Indicates the field is not meant to be overridden while extending the template or during certificate generation. |
| Default | `false` |

### `date`
| | |
| :---: | --- |
| Type | Date |
| Required | Cannot be set, always generated |
| Description | The last date the template was modified. |
| Default | The last date the template was modified, as an ISO string. |

---

## Stroke Schema
The stroke is specified as an object with the following properties:
  - `colour`: Any valid CSS colour identifier.
  - `width`: A number representing the width in pixels.

---

## Style Schema
The style is specified as an object with the following properties:
- `type`: Either `colour` (default) or `gradient`.
- `colour`:
  Used only if the `type` is set to `colour`.
  Its value is any valid CSS colour identifier
  (`black` by default).
- `gradient`:
  Used only if the `type` is set to `gradient`.
  Can be used to set a gradient fill to the text. See [Gradient Schema](#gradient-schema) for details.

Default:
  ```json
  { "type": "colour", "colour": "black" }
  ```

---

## Gradient Schema
Gradients are always created relative to the whole template box and not just the field, though the rendering only affects the field in focus. The gradient style is specified as an object with the following properties:
- `start`: Defines the start of the gradient in the template box. It is an object with the following two properties:
  - `x`: A number representing the horizontal co-ordinate in pixels.
  - `y`: A number representing the vertical co-ordinate in pixels.
- `start`: Defines the end of the gradient in the template box. It is an object with the following two properties:
  - `x`: A number representing the horizontal co-ordinate in pixels.
  - `y`: A number representing the vertical co-ordinate in pixels.
- `stops`: An array of values, each representing a stop between the start and the end with a colour for the stop. The stops are used to generate the final gradient.

  Each stop is an object with the following properties:
  - `fraction`: A number representing the position of the stop between `start` and `end`. It can only be a value between `0` and `1`.
  - `colour`: Any valid CSS colour identifier, representing the colour for the stop.