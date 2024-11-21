const list = [
    {id: 1, nom: "a"},
    {id: 2, nom: "b"},
    {id: 3, nom: "c"},
    {id: 4, nom: "d"}
]

let newId = 2;

let newList = [...list];

newList.map((item)=>{
    if(item.id == newId) {
        return item.nom = "m"
    }
})

console.log(newList)