export const addCat = (cats, catToAdd) => {
    
    const existingCat = cats.find(cat => cat.id === catToAdd.id);  
if(existingCat){
   return cats.map(cat => cat.id === catToAdd.id ? {...cat, quantity: cat.quantity + 1} : cat)
}
return [...cats, {...catToAdd, quantity: 1}]
}

