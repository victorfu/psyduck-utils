psyduck-utils

# psyduck-utils

## Table of contents

### Type Aliases

- [NumberParseable](README.md#numberparseable)

### Variables

- [holidays](README.md#holidays)

### Functions

- [isNumberParseable](README.md#isnumberparseable)

## Type Aliases

### NumberParseable

Ƭ **NumberParseable**: `number` \| `string` \| `boolean` & { `isNumberParseble`: unique `symbol`  }

A Branded Type for values parseable to number.

#### Defined in

index.ts:4

## Variables

### holidays

• `Const` **holidays**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `2023-01-01` | `string` |
| `2023-01-02` | `string` |
| `2023-01-20` | `string` |
| `2023-01-21` | `string` |
| `2023-01-22` | `string` |
| `2023-01-23` | `string` |
| `2023-01-24` | `string` |
| `2023-01-25` | `string` |
| `2023-01-26` | `string` |
| `2023-01-27` | `string` |
| `2023-02-27` | `string` |
| `2023-02-28` | `string` |
| `2023-04-03` | `string` |
| `2023-04-04` | `string` |
| `2023-04-05` | `string` |
| `2023-05-01` | `string` |
| `2023-06-22` | `string` |
| `2023-06-23` | `string` |
| `2023-09-29` | `string` |
| `2023-10-09` | `string` |
| `2023-10-10` | `string` |
| `2024-01-01` | `string` |
| `2024-02-09` | `string` |
| `2024-02-10` | `string` |
| `2024-02-11` | `string` |
| `2024-02-12` | `string` |
| `2024-02-28` | `string` |
| `2024-04-04` | `string` |
| `2024-05-01` | `string` |
| `2024-06-10` | `string` |
| `2024-09-16` | `string` |
| `2024-09-17` | `string` |
| `2024-10-10` | `string` |
| `2024-10-11` | `string` |

#### Defined in

index.ts:27

## Functions

### isNumberParseable

▸ **isNumberParseable**(`value`): value is NumberParseable

Check if value is parseable to number.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | An `unknown` value to be checked. |

#### Returns

value is NumberParseable

**`Example`**

```js
isNumberParseable('AAAA');
//=> false

isNumberParseable('100');
//=> true

if (!isNumberParseable(value))
  throw new Error('Value can\'t be parseable to `Number`.')
return Number(value);
```

#### Defined in

index.ts:24
