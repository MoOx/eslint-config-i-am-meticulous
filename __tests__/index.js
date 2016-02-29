import something from "something"

if (typeof window !== "undefined") {
  something(() => {
    console.log("this is a test")
  })
}
