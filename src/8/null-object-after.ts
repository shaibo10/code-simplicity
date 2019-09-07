interface ISegmentGroup {
  id: string
  name?: string
  description?: string
  size?: number
  reachEstimationCount?: number
  effectiveSize?: number
  dataVendorCost?: number
  provider?: string
}

interface INullObject {
  isEmpty: () => boolean
}


class SegmentGroup implements ISegmentGroup, INullObject {
  id: string
  name: string
  effectiveSize: number
  dataVendorCost: number
  provider: string

  constructor({
    id = '',
    name = '',
    effectiveSize = 0,
    dataVendorCost = 0,
    provider = '',
  } : ISegmentGroup = {} as ISegmentGroup) {
    this.id = id
    this.name = name
    this.effectiveSize = effectiveSize
    this.dataVendorCost = dataVendorCost
    this.provider = provider
  }

  isEmpty() {
    return !!this.id
  }

  getSegmentName(): string {
    return this.name + this.provider
  }

  getSegmentCost(): number {
    return this.effectiveSize * this.dataVendorCost
  }
}

// function getSegmentName(segment: SegmentGroup): string {
//   return segment.getSegmentName()
// }
//
// function getSegmentCost(segment: SegmentGroup): number {
//   return segment.getSegmentCost()
// }

