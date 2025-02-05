import { useState } from "react"
import {
  generateTossResult,
  generateYao,
  generateOriginalHexagramCode,
  generateChangedHexagramCode,
  getHexagram
} from "../utils"

export function useHexagram() {
  const [yaos, setYaos] = useState<Yao[]>([])
  const [originalHexagram, setOriginalHexagram] = useState<Hexagram | null>(
    null
  )
  const [changedHexagram, setChangedHexagram] = useState<Hexagram | null>(null)

  const performToss = () => {
    if (yaos.length >= 6) return

    const tossResult = generateTossResult()
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
    isComplete: yaos.length === 6
  }
}
