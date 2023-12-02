const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi i am h1 tag"),
    React.createElement("h2", {}, "hi i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hi i am h1 tag 2"),
    React.createElement("h2", {}, "hi i am h2 tag 2"),
  ]),
]);
const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "hello world"
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
