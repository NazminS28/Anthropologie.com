function loadData (key){
    try{
        let data = localStorage.getItem(key);
        data = JSON.parse(data);
        return data
    }
    catch(err){
        return undefined
    }
}

function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}



function present(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (value.name === arr[i].name) {
        return true;
      }
    }
    return false;
  }
  
  const storeData = (key, value) => {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    console.log(data);
    // if (!present(data, value)) {
      localStorage.setItem(key, JSON.stringify([...data, value]));
    // }
  };
  
  const getData = (key) => {
    let cart = JSON.parse(localStorage.getItem(key)) || [];
    return cart;
  };
  
  
  const deleteData=(name,key)=>{
    let data= JSON.parse(localStorage.getItem(key));
      if(data.length===1){
          localStorage.removeItem(key);
          return [] 
      }
    data=data.filter((e)=>{
      return e.name!==name;
    });
    localStorage.setItem(key,JSON.stringify(data));
    return data;
  }
  
  
  
  const Success=(key)=>{
      localStorage.removeItem(key);
      return [];
  }
  
  export {loadData,saveData, storeData, getData,deleteData,Success };
  
