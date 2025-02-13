import { useState } from "react"
import {
  generateTossResult,
  generateYao,
  generateOriginalHexagramCode,
  generateChangedHexagramCode,
  getHexagram,
  COIN_RESULTS
} from "../utils"

export function useHexagram() {
  const [yaos, setYaos] = useState<Yao[]>([])
  const [originalHexagram, setOriginalHexagram] = useState<Hexagram | null>(
    null
  )
  const [changedHexagram, setChangedHexagram] = useState<Hexagram | null>(null)

  const [isAnimating, setIsAnimating] = useState(false)
  const [coinResults, setCoinResults] = useState<("正" | "反")[]>([
    "正",
    "正",
    "正"
  ])

  const performToss = () => {
    if (yaos.length >= 6) return

    // 先設置動畫狀態
    setIsAnimating(true)
    const tossResult = generateTossResult()

    // 設置硬幣結果
    setCoinResults(COIN_RESULTS[tossResult])

    // 延遲生成卦象，等待動畫完成
    setTimeout(() => {
      setTimeout(() => {
        const newYao = generateYao(tossResult, yaos.length)
        const newYaos = [...yaos, newYao]
        setYaos(newYaos)

        if (newYaos.length === 6) {
          const originalCode = generateOriginalHexagramCode(newYaos)
          const changedCode = generateChangedHexagramCode(newYaos)

          setOriginalHexagram(getHexagram(originalCode))
          if (originalCode !== changedCode) {
            setChangedHexagram(getHexagram(changedCode))
          }
        }
      }, 1000)

      setIsAnimating(false) // 動畫完成後重置狀態
    }, 3000)
  }

  const reset = () => {
    setYaos([])
    setOriginalHexagram(null)
    setChangedHexagram(null)
  }

  return {
    yaos,
    originalHexagram,
    changedHexagram,
    performToss,
    reset,
    isComplete: yaos.length === 6,
    isAnimating,
    coinResults
  }
}
