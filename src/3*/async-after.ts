

const getCarFactories2 = async (carIds: string[]) => {
  try {
    
    const cars = await http.get(baseUrl + '/cars?ids='+ carIds.join(','))
    return cars.map(({id, factory}) => ({id, factory}))
  
  } catch (error) {
    throw new HttpResponseError('car service got error response from car server', error)
  }
}

function doSomeThingWithCarsFactories(ids){
  getCarFactories2(ids).then((factories=>{
    // do some staff  
  }))
}

// in the controller
class CarsController {
  carsService
  getFactories({carIds}, response){
    this.carsService.getCarFactories(carIds)
    .then(data => this.responseOk(response, data))
    .catch(error => this.responseCorrelatedError(response, error))
  }

  responseOk(response, data){
    response.send(data)
  }

  responseCorrelatedError(response, error){
    const errorResponse = responsesStrategy.get(error,response)
    errorResponse.send()
  }

  //..
}

