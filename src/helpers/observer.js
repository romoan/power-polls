Subject.prototype = {  
  subscribe: function (fn)  
  {    
    this.observers.push(fn)  
  },  
  unsubscribe: function (fnToRemove)  
  {    
     this.observers = this.observers.filter( fn => {      
        return fn != fnToRemove
     })  
  },  
  fire: function ()  
  {    
     this.observers.forEach( fn => {
        fn.call()    
   })  
  },
}
