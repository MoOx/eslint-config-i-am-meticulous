import something from "eslint-plugin-flowtype";
import somethingElse from "eslint-plugin-react";

if (typeof window !== "undefined") {
  console.log(somethingElse);
  something(Promise.resolve(() => {
    console.log("this is a test", BigInt(42), 42n);
  }));
}
