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

[index.ts:4](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L4)

## Variables

### holidays

• `Const` **holidays**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[index.ts:27](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L27)

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

[index.ts:77](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L77)

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

[index.ts:98](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L98)

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

[index.ts:120](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L120)

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

[index.ts:110](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L110)

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

[index.ts:132](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L132)

___

### getRandomTime

▸ **getRandomTime**(`date`, `start`, `end`): `Date`

Get the random time between start and end time

#### Parameters

| Name | Type |
| :------ | :------ |
| `date` | `Date` |
| `start` | `string` |
| `end` | `string` |

#### Returns

`Date`

#### Defined in

[index.ts:150](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L150)

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

[index.ts:24](https://github.com/victorfu/psyduck-utils/blob/905a9ec/src/index.ts#L24)
