import { useHexagram } from "../hooks/useHexagram"
import { CoinToss } from "../components/CoinToss/CoinToss"
import { Hexagram } from "../components/Hexagram/Hexagram"
import { YaoDisplay } from "../components/YaoDisplay/YaoDisplay"
import { YAO_POSITIONS } from "../utils"
import "./Popup.css"
import coinFront from "../assets/images/coin_front.png"
import coinBack from "../assets/images/coin_back.png"
import { useState } from "react"
import { CoinAnimation } from "../components/CoinAnimation/CoinAnimation"

export default function Popup() {
  const {
    yaos,
    originalHexagram,
    changedHexagram,
    performToss,
    reset,
    isComplete,
    isAnimating,
    coinResults
  } = useHexagram()

  return (
    <div className="popup">
      <h1>易經筮法</h1>

      <CoinToss
        onToss={performToss}
        disabled={isComplete}
        tossCount={yaos.length}
      />

      <CoinAnimation isAnimating={isAnimating} results={coinResults} />

      <div className="yaos-region">
        {/* 本卦 */}
        <div className="yaos-display">
          {YAO_POSITIONS.map((position) => {
            const yao = yaos.find((y) => y.position === position)
            return <YaoDisplay key={position} yao={yao} position={position} />
          })}
        </div>

        {/* 變卦 */}
        {changedHexagram && (
          <div className="yaos-display">
            {YAO_POSITIONS.map((position) => {
              const yao = yaos.find((y) => y.position === position)

              switch (yao?.changesTo) {
                case "⚊":
                  return (
                    <YaoDisplay
                      key={position}
                      yao={{ ...yao, type: "陽" }}
                      position={position}
                    />
                  )
                case "⚋":
                  return (
                    <YaoDisplay
                      key={position}
                      yao={{ ...yao, type: "陰" }}
                      position={position}
                    />
                  )
                default:
                  return (
                    <YaoDisplay key={position} yao={yao} position={position} />
                  )
              }
            })}
          </div>
        )}
      </div>

      {isComplete && (
        <>
          <div className="results">
            {originalHexagram && (
              <Hexagram hexagram={originalHexagram} title="本卦" />
            )}
            {changedHexagram && (
              <Hexagram hexagram={changedHexagram} title="變卦" />
            )}
          </div>
          <button className="reset-button" onClick={reset}>
            重新開始
          </button>
        </>
      )}
    </div>
  )
}
