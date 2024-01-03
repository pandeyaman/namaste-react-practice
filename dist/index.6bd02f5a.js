// const Title = () =>{
//     return (
//         <div>
//             <span>Sample Title</span>
//         </div>
//     )
// }
// const App = () =>{
//     return (
//         <div className="app">
//             <Title/>
//         </div>
//     )
// }
const heading = React.createElement("h1", {
    id: "heading",
    class: "heading",
    xyz: "abc"
}, "Hello World From React");
const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
