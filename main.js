//keep track of product components here
const products = []

//Rearrange rows according to sort
function sort (colname, descending)
{
const tbody = document.querySelector('tbody')

//construct array of items to be sorted
let sorted = products.sort(cmpfun(colname))

if (descending) sorted = sorted.reverse()

//using product.root, can rearrange table rows
sorted.
forEach
(
component => 
{
tbody.insertBefore(component.root, null)
}
)

}

function cmpfun (prop)
{
return (a,b) =>
{
if (typeof a.state[prop] == 'string') return a.state[prop].localeCompare(b.state[prop])
else if (typeof a.state[prop] == 'number') return a.state[prop] - b.state[prop]
}
}