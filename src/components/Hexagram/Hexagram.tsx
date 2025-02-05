import { memo } from "react"
import "./Hexagram.css"

type Props = {
  hexagram: Hexagram
  title: string
}

export const Hexagram = memo(({ hexagram, title }: Props) => {
  return (
    <div className="hexagram">
      <h3 className="hexagram-title">{title}</h3>
      <div className="hexagram-name">{hexagram.name}</div>
      <div className="hexagram-description">
        <h4>卦辭</h4>
        {hexagram.description.yijing.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
})
