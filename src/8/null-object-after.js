
class NullObject{
  isEmpty(){
    throw new Error('child class must implement isEmpty function')
  }
}

class SegmentGroup extends NullObject {

  constructor({  
    id,
    name = '',
    effectiveSize = 0,
    dataVendorCost = 0,
    provider = ''
  } = {}){
    this.id = id
    this.name = name
    this.effectiveSize = effectiveSize
    this.dataVendorCost = dataVendorCost
    this.provider = provider
  }

  isEmpty() {
    return !!this.id
  }

  getSegmentName() {
    return this.name + this.provider
  }

  getSegmentCost() {
      return this.effectiveSize * this.dataVendorCost
  }
}

