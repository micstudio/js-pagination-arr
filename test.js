const paginateArray = (dataEntries, actualPageIdx, entriesOnPage) => {

    
    if(actualPageIdx === 1 ) {
        let arr2 = dataEntries.slice(0,entriesOnPage)
        return console.log(arr2);
    }
   let sum = actualPageIdx*entriesOnPage

   if(sum > dataEntries.length ) {
       return console.log('false settings:  actualPageIdx || entriesOnPage');
   }



    let l1 = dataEntries[sum]-entriesOnPage-1
    let l2 = dataEntries[sum]-1

    let arr3 = dataEntries.slice(l1,l2)
   
    console.log(l1,l2);
    console.log(arr3);
}
arr = [1,2,3,4,5,6,7,8,9,10,11,12,10,11,12,10,11,12,10,11,12,13,14,15,16,17,18,19,20]
paginateArray(arr,2,41) 

