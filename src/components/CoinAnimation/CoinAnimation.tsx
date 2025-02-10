import { useEffect, useState } from "react"
import "./CoinAnimation.css"

type Props = {
  isAnimating: boolean
  results: ("正" | "反")[]
}

export const CoinAnimation = ({ isAnimating, results }: Props) => {
  const [showResults, setShowResults] = useState(false)

  // 監聽 isAnimating 的變化
  useEffect(() => {
    if (isAnimating) {
      // 開始動畫時，重置顯示狀態
      setShowResults(false)
    } else {
      // 動畫結束時，顯示結果
      setShowResults(true)
    }
  }, [isAnimating])

  return (
    <div className="coins-container">
      {[0, 1, 2].map((index) => (
        <div key={index} className={`coin ${isAnimating ? "tossing" : ""}`}>
          <div
            className="front"
            style={{
              transform:
                !isAnimating && results[index] === "反"
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              transition: isAnimating ? "none" : "transform 0.5s ease-out"
            }}
          />
          <div
            className="back"
            style={{
              transform:
                !isAnimating && results[index] === "反"
                  ? "rotateY(0deg)"
                  : "rotateY(180deg)",
              transition: isAnimating ? "none" : "transform 0.5s ease-out"
            }}
          />
        </div>
      ))}
    </div>
  )
}
