psyduck-utils

# psyduck-utils

## Table of contents

### Type Aliases

- [NumberParseable](README.md#numberparseable)

### Variables

- [holidays](README.md#holidays)

### Functions

- [calculateDuration](README.md#calculateduration)
- [formatDate](README.md#formatdate)
- [formatDate2HHmm](README.md#formatdate2hhmm)
- [formatDate2yyyyMMdd](README.md#formatdate2yyyymmdd)
- [getCurrentYearMonth](README.md#getcurrentyearmonth)
- [getRandomTime](README.md#getrandomtime)
- [isNumberParseable](README.md#isnumberparseable)

## Type Aliases

### NumberParseable

Ƭ **NumberParseable**: `number` \| `string` \| `boolean` & { `isNumberParseble`: unique `symbol`  }

A Branded Type for values parseable to number.

#### Defined in

[index.ts:4](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L4)

## Variables

### holidays

• `Const` **holidays**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[index.ts:27](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L27)

## Functions

### calculateDuration

▸ **calculateDuration**(`startTime`, `endTime`): `number`

Calculate the duration between two time strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `startTime` | `string` |
| `endTime` | `string` |

#### Returns

`number`

#### Defined in

[index.ts:71](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L71)

___

### formatDate

▸ **formatDate**(`date`): `string`

Convert Date objects to strings in yyyy-MM-dd format

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

[index.ts:92](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L92)

___

### formatDate2HHmm

▸ **formatDate2HHmm**(`date`): `string`

Convert Date objects to strings in HH:mm format

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

[index.ts:114](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L114)

___

### formatDate2yyyyMMdd

▸ **formatDate2yyyyMMdd**(`date`): `string`

Convert Date objects to strings in yyyy-MM-dd format

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |

#### Returns

`string`

#### Defined in

[index.ts:104](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L104)

___

### getCurrentYearMonth

▸ **getCurrentYearMonth**(): `Object`

Get current year and month

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `currentMonth` | `string` |
| `currentYear` | `string` |

#### Defined in

[index.ts:126](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L126)

___

### getRandomTime

▸ **getRandomTime**(`date`, `start`, `end`, `timeZoneOffset?`): `Date`

Get the random time between start and end time

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `date` | `Date` | `undefined` |
| `start` | `string` | `undefined` |
| `end` | `string` | `undefined` |
| `timeZoneOffset` | `number` | `480` |

#### Returns

`Date`

#### Defined in

[index.ts:145](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L145)

___

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

[index.ts:24](https://github.com/victorfu/psyduck-utils/blob/786e969/src/index.ts#L24)
