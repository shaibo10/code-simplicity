class Airplane {
    // ...
  }
  
  class Boeing777 extends Airplane {
    // ...
    getCruisingAltitude() {
      return this.getMaxAltitude() - this.getPassengerCount();
    }
  }
  
  class AirForceOne extends Airplane {
    // ...
    getCruisingAltitude() {
      return this.getMaxAltitude();
    }
  }
  
  class Cessna extends Airplane {
    // ...
    getCruisingAltitude() {
      return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }

  //https://github.com/labs42io/clean-code-typescript