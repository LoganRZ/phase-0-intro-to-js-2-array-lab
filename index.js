const cats = ["Milo", "Otis", "Garfield"];{
}
function destructivelyAppendCat (name) { 
    cats.push("Ralph")
}
function destructivelyPrependCat (name) { 
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat () {
    cats.pop()  
}
function destructivelyRemoveFirstCat () {  
    cats.shift()
}
function appendCat (name) {
   return [...cats, name]
}
function prependCat (name) {
    return [name, ...cats]
}
function removeLastCat () {
    const newcats = [...cats]
    newcats.pop()
    return (newcats)
}
function removeFirstCat () {
    const newcats = [...cats]
    newcats.shift()
    return (newcats)
}