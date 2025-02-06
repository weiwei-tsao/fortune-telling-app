import { useEffect, useState } from "react"
import "./YaoDisplay.css"

type YaoDisplayProps = {
  yao: Yao | undefined
  position: YaoPosition
}

export function YaoDisplay({ yao, position }: YaoDisplayProps) {
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    if (yao?.changesTo) {
      // 重置狀態
      setIsChanged(false)
      // 開始動畫
      const timer = setTimeout(() => {
        setIsChanged(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [yao])

  if (!yao) {
    return (
      <div className="yao-container">
        <div className="yao-position">{position}爻：</div>
        <div className="yao-lines empty" />
      </div>
    )
  }

  const isYang = yao.type === "少陽" || yao.type === "老陽"
  const shouldBeRed = isChanged && yao.changesTo

  return (
    <div className="yao-container">
      <div className="yao-position">{position}爻：</div>
      <div
        className={`yao-lines ${yao.changesTo ? "changing" : ""} ${
          shouldBeRed ? "changed" : ""
        }`}>
        {isYang ? (
          <div className="yang-line" />
        ) : (
          <>
            <div className="yin-line" />
            <div className="yin-line" />
          </>
        )}
      </div>
    </div>
  )
}
