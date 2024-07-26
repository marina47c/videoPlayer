/**
 * Extracts the time component from a timestamp string.
 *
 * This function takes a timestamp string in the format "HH:MM:SS,SSS"
 * and returns the time portion (i.e., "HH:MM:SS") without the milliseconds.
 *
 * @param {string} startTime - The timestamp string to extract the time from.
 * @returns {string} - The extracted time component in the format "HH:MM:SS".
 */
export const extractTimeFromTimestamp = (startTime: string) => {
  return startTime.split(",")[0];
};
