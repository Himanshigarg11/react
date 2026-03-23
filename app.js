
// const heading=React.createElement(
//     'h1',
//     {id:"heading", xyz:"abc"}
//     ,"hello world in react") 

// const root=ReactDOM.createRoot(document.querySelector('#root'))

// root.render(heading)

// console.log(heading) // object

//{}---> this object is place where u give attribute to the task 


const parent=React.createElement(
    "div",
    {id:"parent"},
   [ React.createElement("div",{id:"child"},
    [
    React.createElement("h1",{id:"sibling1"},"hey, i am h1 tag of child1"),
    React.createElement("h1",{id:"sibling2"},"hey, i am h1 tag sibling"),
    ]
    ),

    React.createElement("div",
        {id:"child2"},
    [
    React.createElement("h1",{id:"sibling3"},"hey, i am h1 tag of child 2"),
    React.createElement("h1",{id:"sibling4"},"hey, i am h1 tag sibling"),
    ]
)
]
)

console.log(parent)
 const root=ReactDOM.createRoot(document.querySelector('#root'))
 root.render(parent)


