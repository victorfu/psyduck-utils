/**
 * A Branded Type for values parseable to number.
 */
export type NumberParseable = (number | string | boolean) & {
    readonly isNumberParseble: unique symbol;
};
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
export declare const isNumberParseable: (value: unknown) => value is NumberParseable;
export declare const holidays: {
    [key: string]: string;
};
/**
 * Calculate the duration between two time strings.
 *
 * @param startTime
 * @param endTime
 * @returns {number}
 */
export declare const calculateDuration: (startTime: string, endTime: string) => number;
/**
 * Convert Date objects to strings in yyyy-MM-dd format
 *
 * @param date
 * @returns {string}
 */
export declare const formatDate: (date: Date) => string;
/**
 * Convert Date objects to strings in yyyy-MM-dd format
 *
 * @param date
 * @returns {string}
 */
export declare const formatDate2yyyyMMdd: (date: Date) => string;
/**
 * Convert Date objects to strings in HH:mm format
 *
 * @param date
 * @returns {string}
 */
export declare const formatDate2HHmm: (date: Date) => string;
/**
 * Get current year and month
 *
 * @returns { { currentYear: string; currentMonth: string } }
 */
export declare const getCurrentYearMonth: () => {
    currentYear: string;
    currentMonth: string;
};
/**
 * Get the random time between start and end time
 *
 * @param date
 * @param start
 * @param end
 * @returns {Date}
 */
export declare const getRandomTime: (date: Date, start: string, end: string) => Date;
//# sourceMappingURL=index.d.ts.map