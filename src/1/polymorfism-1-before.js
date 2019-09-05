class Airplane {
  // ...
  // can be simplified by using strategy pattern too
  getCruisingAltitude() {
    switch (this.type) {
      case "777":
        return this.getMaxAltitude() - this.getPassengerCount();
      case "Air Force One":
        return this.getMaxAltitude();
      case "Cessna":
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
  getFuelExpenditure(){}
  getPassengerCount(){}
}

//  https://github.com/ryanmcdermott/clean-code-javascript
