import { useHexagram } from "../hooks/useHexagram"
import { CoinToss } from "../components/CoinToss/CoinToss"
import { Hexagram } from "../components/Hexagram/Hexagram"
import "./Popup.css"

export default function Popup() {
  const {
    yaos,
    originalHexagram,
    changedHexagram,
    performToss,
    reset,
    isComplete
  } = useHexagram()

  return (
    <div className="popup">
      <h1>易經筮法</h1>

      <CoinToss
        onToss={performToss}
        disabled={isComplete}
        tossCount={yaos.length}
      />

      <div className="yaos-display">
        {yaos.map((yao, index) => (
          <div key={index} className="yao">
            {yao.type}
            {yao.changesTo && (
              <span className="changes-to">→ {yao.changesTo}</span>
            )}
          </div>
        ))}
      </div>

      {isComplete && (
        <div className="results">
          {originalHexagram && (
            <Hexagram hexagram={originalHexagram} title="本卦" />
          )}
          {changedHexagram && (
            <Hexagram hexagram={changedHexagram} title="變卦" />
          )}
          <button className="reset-button" onClick={reset}>
            重新開始
          </button>
        </div>
      )}
    </div>
  )
}
