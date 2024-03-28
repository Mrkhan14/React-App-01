const searchHandeler = (arr, term) => {
   if (term === 0){
      return arr
   }
   return arr.filter(item => {
      return item.name.toLowerCase().indexOf(term) > -1
   })
}

const filterHandeler = (arr, filter) => {
   switch (filter){
      case 'popular':
         return arr.filter(c => c.like)
      case 'mostViewrs':
         return arr.filter(c => c.viewers > 1000)
      default:
         return arr
   }
}

export{searchHandeler, filterHandeler}