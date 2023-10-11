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
export const isNumberParseable = (value: unknown): value is NumberParseable =>
  !Number.isNaN(Number(value));

export const holidays: { [key: string]: string } = {
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
export const calculateDuration = (
  startTime: string,
  endTime: string,
): number => {
  const [startHour, startMinute] = startTime.split(":").map(Number);
  const [endHour, endMinute] = endTime.split(":").map(Number);

  const startDate = new Date(2000, 0, 1, startHour, startMinute); // Date here is irrelevant
  const endDate = new Date(2000, 0, 1, endHour, endMinute); // Date here is irrelevant

  const differenceInMinutes =
    (endDate.getTime() - startDate.getTime()) / (1000 * 60);
  return differenceInMinutes;
};

/**
 * Convert Date objects to strings in yyyy-MM-dd format
 *
 * @param date
 * @returns {string}
 */
export const formatDate = (date: Date): string => {
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
};

/**
 * Convert Date objects to strings in HH:mm format
 *
 * @param date
 * @returns {string}
 */
export const formatDate2HHmm = (date: Date): string => {
  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
};

/**
 * Get current year and month
 *
 * @returns { { currentYear: string; currentMonth: string } }
 */
export const getCurrentYearMonth = (): {
  currentYear: string;
  currentMonth: string;
} => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear().toString();
  const currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  return { currentYear, currentMonth };
};
