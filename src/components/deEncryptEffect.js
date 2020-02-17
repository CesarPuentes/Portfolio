import React, { useContext } from "react"
import { useDencrypt } from "use-dencrypt-effect"
import "./css/styles.css"

const values = ["Programmer", "Web Developer", "Fullstack"]

const Example = ({ jsonData }) => {
  const { result, dencrypt } = useDencrypt()

  React.useEffect(() => {
    let i = 0

    const action = setInterval(() => {
      dencrypt(values[i])

      i = i === values.length - 1 ? 0 : i + 1
    }, 2250)

    return () => clearInterval(action)
  }, [])

  return <h1 className="animationBody">{result}</h1>
}

export default Example
