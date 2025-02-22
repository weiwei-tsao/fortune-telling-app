import { memo } from "react"
import "./Hexagram.css"

type Props = {
  hexagram: Hexagram
  title: string
}

export const Hexagram = memo(({ hexagram, title }: Props) => {
  return (
    <div className="hexagram">
      <h3 className="hexagram-title">
        {title}：{hexagram.name}
      </h3>
      <div className="hexagram-description">
        <h5 className="hexagram-description-title">卦辭</h5>
        {hexagram.description.yijing.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  )
})
