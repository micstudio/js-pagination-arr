const paginateArray = (dataEntries, actualPageIdx, entriesOnPage) => {

    if(actualPageIdx === 1 ) {
        let arr2 = dataEntries.slice(0,entriesOnPage)
        return console.log(arr2);
    }
   let sum = actualPageIdx*entriesOnPage

   if(sum > dataEntries.length ) {
       return console.log('false settings:  actualPageIdx || entriesOnPage');
   }


    let l1 = sum-entriesOnPage

    let entriesOnSelectedPage = dataEntries.slice(l1,sum)
   
    console.log(entriesOnSelectedPage);

    return entriesOnSelectedPage
}

