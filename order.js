  const form = document.getElementById("burger-form");
  const submit = document.getElementById("order");
  const burger = new FormData();
 
    

  function getFormData(){

    //const burger = new FormData();

    var all = document.querySelectorAll("#burger-form input, #burger-form [type = 'radio'], #burger-form [type = 'checkbox'], #burger-form [type = 'range']");
  
 
    all.forEach(item => {
      if(item.checked || item.type === 'range'){
      //console.log("key: " + item.name, "value: " + item.value)
      burger.append(item.name, item.value)
      }
    })

  } 
    
  //   for(let [k, v] of burger){
  //     console.log(k,v)
  //   }

  //   for(let v of burger.values()){
  //     console.log(v)
  //   }
  // }

  // submit.addEventListener('click', event =>{
    
  //   event.preventDefault();
  //   getFormData();
  //   displayOrder();

  // })

  function displayOrder(){
    for([k,v] of burger){
      console.log(k,v);
    }
  }

  submit.addEventListener('click', event =>{
    
    event.preventDefault();
    getFormData();
    displayOrder();

  })
