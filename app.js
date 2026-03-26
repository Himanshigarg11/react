import React from "react";
import ReactDOM from "react-dom/client"


// React.createElement---> create react object--->after render(html element)

// const heading=React.createElement
// (
//     'h1',
//     {id: 'heading',key:"1"},
//     "hello, learning js"
// )
// const root=ReactDOM.createRoot(document.querySelector('#root'))
// root.render(heading)


//JSX

// const jsxHeading=<h1 id="himanshi" className="heyy">namste react using JSX</h1>
// const root=ReactDOM.createRoot(document.querySelector('#root'))
// root.render(jsxHeading)

// react functional component 

// const Component1=()=>{
//     return <h1> hey its component 1</h1>
// }

// const Component2=() => {
//    return <div>
//      <Component1/>
//     <h1>hey its component 2</h1>
//     </div>
// };

// const root=ReactDOM.createRoot(document.querySelector('#root'))
// root.render(<Component2/>)

//----------------------------------------
const elem = <span>react element</span>;

const Compo = () => <h1>hey its me</h1>;

const data =1000;
//const wrongData=api.getData();
const title = (
    <div>
    <h1>
      {elem}
      <br />
         {data} <br />
     namaste react react element
    </h1>
     {<Compo/>}
</div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(title);

// const Name=()=>{
//    return <div id ="himanshi">
//         <h1>hey! my name is himanshi</h1>
//     </div>
// }
// let rollnumber=2310990771;
// const Study=()=>{
//     return <div id="btech">
//         {rollnumber} <br/>
//         {100+200}
//         {console.log("i am java script")}
//         <h1> i am pursuing btech</h1>
//         <h1>studing in chitkara university</h1>
//     </div>
// }
// const Passion=()=>{
//     return <div>
//         {title}
//         <Name/>
//         <Study/>
//         <h1>love singing and music</h1>
//     </div>
// }

// //const root=ReactDOM.createRoot(document.querySelector('#root'))




// // put element inside component 

