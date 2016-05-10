import something from "eslint-plugin-ava"

if (typeof window !== "undefined") {
  something(() => {
    console.log("this is a test")
  })
}
