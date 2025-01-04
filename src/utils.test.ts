import { describe, it, expect } from "vitest"
import {
  generateTossResult,
  generateYao,
  generateOriginalHexagramCode,
  generateChangedHexagramCode
} from "./utils"

const validResults: TossResult[] = ["三正", "兩正一反", "兩反一正", "三反"]

describe("generateTossResult", () => {
  it("should generate a toss result with 3 values in a string", () => {
    const toss = generateTossResult()
    expect(validResults).toContain(toss)
  })
})

describe("generateYao", () => {
  it("should generate a Yao object based on the given toss result", () => {
    for (const result of validResults) {
      const yao = generateYao(result)
      expect(yao).toBeDefined()
    }
  })

  // it('should throw an error if the toss result is invalid', () => {
  //   expect(() => generateYao('invalid')).toThrow('Invalid toss result');
  // });
})

describe("generateOriginalHexagramCode", () => {
  it("should throw an error if the length of the yaos array is not exactly 6", () => {
    expect(() => generateOriginalHexagramCode([])).toThrow(
      "Exactly 6 Yao are required to generate a hexagram"
    )
  })

  it("should generate the original hexagram code based on the provided Yao array", () => {
    const yaos: Yao[] = [
      { type: "老陽", changesTo: "⚋" },
      { type: "少陽" },
      { type: "少陽" },
      { type: "少陰" },
      { type: "少陰" },
      { type: "少陰" }
    ]

    const hexagramCode = generateOriginalHexagramCode(yaos)
    expect(hexagramCode).toBe("111000")

    const yaos2: Yao[] = [
      { type: "老陽", changesTo: "⚋" },
      { type: "少陽" },
      { type: "少陽" },
      { type: "少陰" },
      { type: "少陰" },
      { type: "老陰", changesTo: "⚊" }
    ]
    const hexagramCode2 = generateOriginalHexagramCode(yaos2)
    expect(hexagramCode2).toBe("111000")
  })
})

describe("generateChangedHexagramCode", () => {
  it("should throw an error if the length of the yaos array is not exactly 6", () => {
    expect(() => generateChangedHexagramCode([])).toThrow(
      "Exactly 6 Yao are required to generate a hexagram"
    )
  })

  it("should generate the changed hexagram code based on the provided Yao array", () => {
    const yaos: Yao[] = [
      { type: "老陽", changesTo: "⚋" },
      { type: "少陽" },
      { type: "少陽" },
      { type: "少陰" },
      { type: "少陰" },
      { type: "老陰", changesTo: "⚊" }
    ]

    const hexagramCode = generateChangedHexagramCode(yaos)
    expect(hexagramCode).toBe("011001")

    const yaos2: Yao[] = [
      { type: "少陽" },
      { type: "少陽" },
      { type: "少陽" },
      { type: "少陰" },
      { type: "少陰" },
      { type: "少陰" }
    ]

    const hexagramCode2 = generateChangedHexagramCode(yaos2)
    expect(hexagramCode2).toBe("111000")
  })
})
