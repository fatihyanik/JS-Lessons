function count (string) {
    // The function code should be here
     let obj = {};
    if(string.length > 0) {
      for(let l in string){
        obj[string[l]] = obj[string[l]]+1 || 1;
        }
      }
     return obj;
  }