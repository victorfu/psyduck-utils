/*!
 * psyduck-utils v0.0.1
 * (c) Victor Fu
 * Released under the MIT License.
 */

'use strict';

/**
 * Check if value is parseable to number.
 * @example
 * ```js
 * isNumberParseable('AAAA');
 * //=> false
 *
 * isNumberParseable('100');
 * //=> true
 *
 * if (!isNumberParseable(value))
 *   throw new Error('Value can\'t be parseable to `Number`.')
 * return Number(value);
 * ```
 * @param value - An `unknown` value to be checked.
 */
var isNumberParseable = function (value) {
    return !Number.isNaN(Number(value));
};
var holidays = {
    "2023-01-01": "元旦",
    "2023-01-02": "開國紀念日",
    "2023-01-20": "春節",
    "2023-01-21": "春節",
    "2023-01-22": "春節",
    "2023-01-23": "春節",
    "2023-01-24": "春節",
    "2023-01-25": "春節",
    "2023-01-26": "春節",
    "2023-01-27": "春節",
    "2023-02-27": "228",
    "2023-02-28": "228",
    "2023-04-03": "兒童節",
    "2023-04-04": "兒童節",
    "2023-04-05": "清明節",
    "2023-05-01": "勞動節",
    "2023-06-22": "端午節",
    "2023-06-23": "端午節",
    "2023-09-29": "中秋節",
    "2023-10-09": "國慶日",
    "2023-10-10": "國慶日",
    "2024-01-01": "元旦",
    "2024-02-09": "春節",
    "2024-02-10": "春節",
    "2024-02-11": "春節",
    "2024-02-12": "春節",
    "2024-02-28": "228",
    "2024-04-04": "兒童節",
    "2024-05-01": "勞動節",
    "2024-06-10": "端午節",
    "2024-09-16": "中秋節",
    "2024-09-17": "中秋節",
    "2024-10-10": "國慶日",
    "2024-10-11": "國慶日",
};

exports.holidays = holidays;
exports.isNumberParseable = isNumberParseable;
//# sourceMappingURL=index.cjs.map
