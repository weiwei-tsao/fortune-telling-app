import hexagramsJson from './hexagrams.json';

/**
 * Simulates a coin toss and returns the result.
 *
 * @returns {string} - Returns '反' for yin and '正' for yang.
 */
function toss() {
  return Math.random() < 0.5 ? '反' : '正';
}

/**
 * Generates the result of three coin tosses.
 *
 * The function simulates three coin tosses and counts the number of '正' (yang) results.
 * Based on the count of '正' results, it returns one of the following outcomes:
 * - '三反': All three tosses are '反' (yin).
 * - '兩反一正': Two tosses are '反' (yin) and one toss is '正' (yang).
 * - '兩正一反': Two tosses are '正' (yang) and one toss is '反' (yin).
 * - '三正': All three tosses are '正' (yang).
 *
 * @returns {TossResult} The result of the three coin tosses.
 * @throws {Error} If the number of '正' results is not between 0 and 3.
 */
function generateTossResult(): TossResult {
  const tosses = [toss(), toss(), toss()];
  const yangCount = tosses.filter(toss => toss === '正').length;
  switch (yangCount) {
    case 0:
      return '三反';
    case 1:
      return '兩反一正';
    case 2:
      return '兩正一反';
    case 3:
      return '三正';
    default:
      throw new Error('Invalid toss');
  }
}


/**
 * Generates a Yao object based on the given toss result.
 *
 * @param tossResult - The result of the toss, which determines the type of Yao.
 * @returns A Yao object with the type and optional changesTo property.
 * @throws Will throw an error if the toss result is invalid.
 *
 * @example
 * ```typescript
 * const yao = generateYao('三正');
 * console.log(yao); // { type: '老陽', changesTo: '⚋' }
 * ```
 */
function generateYao(tossResult: TossResult): Yao {
  switch (tossResult) {
    case '三正':
      return { type: '老陽', changesTo: '⚋' };
    case '兩正一反':
      return { type: '少陽' };
    case '兩反一正':
      return { type: '少陰' };
    case '三反':
      return { type: '老陰', changesTo: '⚊' };
    default:
      throw new Error('Invalid toss result');
  }
}


/**
 * Generates the original hexagram code based on the provided Yao array.
 *
 * @param {Yao[]} yaos - An array of Yao objects. Exactly 6 Yao objects are required.
 * @returns {string} The generated hexagram code as a string of '1's and '0's.
 * @throws {Error} Throws an error if the length of the yaos array is not exactly 6.
 */
function generateOrignalHexagramCode(yaos: Yao[]): string {
  if (yaos.length !== 6) {
    throw new Error('Exactly 6 Yao are required to generate a hexagram');
  }

  const code = yaos.map(yao => yao.type === '少陽' || yao.type === '老陽' ? '1' : '0').join('');

  return code
}


/**
 * Generates a changed hexagram code based on the provided array of Yao objects.
 * 
 * This function takes an array of 6 Yao objects and transforms them according to the following rules:
 * - "老陽" (old yang) changes to "少陰" (young yin)
 * - "老陰" (old yin) changes to "少陽" (young yang)
 * - "少陽" (young yang) and "少陰" (young yin) remain unchanged
 * 
 * The resulting hexagram code is a string of 6 binary digits ('1' or '0'), where:
 * - '1' represents "少陽" (young yang) or "老陽" (old yang)
 * - '0' represents "少陰" (young yin) or "老陰" (old yin)
 * 
 * @param {Yao[]} yaos - An array of 6 Yao objects.
 * @returns {string} The generated hexagram code as a string of 6 binary digits.
 * @throws {Error} If the input array does not contain exactly 6 Yao objects.
 */
function generateChangedHexagramCode(yaos: Yao[]): string {
  if (yaos.length !== 6) {
    throw new Error('Exactly 6 Yao are required to generate a hexagram');
  }

  const changedYaos = yaos.map(
    yao => {
      if (yao.type === "老陽") {
        return { type: "少陰" }; // ⚊ → ⚋
      } else if (yao.type === "老陰") {
        return { type: "少陽" }; // ⚋ → ⚊
      } else {
        return yao; // 少陽、少陰保持不變
      }
    } 
  )

  const code = changedYaos.map(yao => yao.type === '少陽' || yao.type === '老陽' ? '1' : '0').join('');
  return code;
}


/**
 * Retrieves a hexagram based on the provided code.
 *
 * @param code - The code representing the hexagram to retrieve.
 * @returns The hexagram corresponding to the provided code.
 * @throws Will throw an error if the provided code does not correspond to a valid hexagram.
 */
function getHexagram(code: string): Hexagram {
  const hexagrams = hexagramsJson as Record<string, Hexagram>;
  const hexagram = hexagrams[code];
  if (!hexagram) {
    throw new Error('Invalid hexagram code');
  }
  return hexagram;
}