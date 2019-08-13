function travelToTexas(vehicle) {
    if (vehicle instanceof Bicycle) {
      vehicle.pedal(this.currentLocation, new Location("texas"));
    } else if (vehicle instanceof Car) {
      vehicle.drive(this.currentLocation, new Location("texas"));
    }
  }

  //  https://github.com/ryanmcdermott/clean-code-javascript