
class Location {
  constructor(name: string){
  }
}

interface IVehicle {
  move: (to: Location) => void
}

function travelToTexas(vehicle: IVehicle) {
  vehicle.move(new Location('texas'))
}

// https://github.com/labs42io/clean-code-typescript