import something from "eslint-plugin-ava"
import somethingElse from "eslint-plugin-react"

import Compo from "./react-class.js"

if (typeof window !== "undefined") {
  console.log(somethingElse, Compo)
  something(() => {
    console.log("this is a test")
  })
}
