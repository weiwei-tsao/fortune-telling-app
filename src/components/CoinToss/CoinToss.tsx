import { memo } from "react"
import "./CoinToss.css"

type Props = {
  onToss: () => void
  disabled: boolean
  tossCount: number
}

export const CoinToss = memo(({ onToss, disabled, tossCount }: Props) => {
  return (
    <div className="coin-toss">
      <button className="toss-button" onClick={onToss} disabled={disabled}>
        擲筊
      </button>
      <div className="toss-count">第 {tossCount}/6 爻</div>
    </div>
  )
})
