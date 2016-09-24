import something from "eslint-plugin-ava"
import somethingElse from "eslint-plugin-react"

if (typeof window !== "undefined") {
  console.log(somethingElse)
  something(() => {
    console.log("this is a test")
  })
}
