/*!
 * psyduck-utils v0.0.2
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
/**
 * Calculate the duration between two time strings.
 *
 * @param startTime
 * @param endTime
 * @returns {number}
 */
var calculateDuration = function (startTime, endTime) {
    var _a = startTime.split(":").map(Number), startHour = _a[0], startMinute = _a[1];
    var _b = endTime.split(":").map(Number), endHour = _b[0], endMinute = _b[1];
    var startDate = new Date(2000, 0, 1, startHour, startMinute); // Date here is irrelevant
    var endDate = new Date(2000, 0, 1, endHour, endMinute); // Date here is irrelevant
    var differenceInMinutes = (endDate.getTime() - startDate.getTime()) / (1000 * 60);
    return differenceInMinutes;
};
/**
 * Convert Date objects to strings in yyyy-MM-dd format
 *
 * @param date
 * @returns {string}
 */
var formatDate = function (date) {
    return "".concat(date.getFullYear(), "-").concat((date.getMonth() + 1)
        .toString()
        .padStart(2, "0"), "-").concat(date.getDate().toString().padStart(2, "0"));
};
/**
 * Convert Date objects to strings in HH:mm format
 *
 * @param date
 * @returns {string}
 */
var formatDate2HHmm = function (date) {
    return "".concat(date.getHours().toString().padStart(2, "0"), ":").concat(date
        .getMinutes()
        .toString()
        .padStart(2, "0"));
};
/**
 * Get current year and month
 *
 * @returns { { currentYear: string; currentMonth: string } }
 */
var getCurrentYearMonth = function () {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear().toString();
    var currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    return { currentYear: currentYear, currentMonth: currentMonth };
};

exports.calculateDuration = calculateDuration;
exports.formatDate = formatDate;
exports.formatDate2HHmm = formatDate2HHmm;
exports.getCurrentYearMonth = getCurrentYearMonth;
exports.holidays = holidays;
exports.isNumberParseable = isNumberParseable;
//# sourceMappingURL=index.cjs.map
