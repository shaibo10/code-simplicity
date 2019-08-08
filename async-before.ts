const baseUrl = 'http://www.foo-cars.baz'
const logger = {
  error: (message, error)=>{}
}
const http = { 
  get: (url) => Promise.reject(new Error('bar'))
}


const getCarFactories = async (carIds: string[]) => {
  try {
    
    const cars = await http.get(baseUrl + '/cars?ids='+ carIds.join(','))
    return cars.map(({id, factory}) => ({id, factory}))
  
  } catch (error) {

    logger.error('car service got error response from car server', error)
    return null
  
  }
}

getCarFactories(['100','101', '103']).then((factories=>{
  if(factories){
    // do some staff
  }  
}))