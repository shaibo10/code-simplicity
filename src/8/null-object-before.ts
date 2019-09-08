interface ISegmentGroup {
  id?: string
  name?: string
  description?: string
  size?: number
  reachEstimationCount?: number
  effectiveSize?: number
  dataVendorCost?: number
  provider?: string
}

function getSegmentName(segment: ISegmentGroup): string {
  if (segment) {
    if (segment.name && segment.provider) {
      return segment.name + segment.provider
    } else {
      return null
    }
  } else {
    return null
  }
}

function getSegmentCost(segment: ISegmentGroup): number {
  if (segment !== null) {
    if (segment.effectiveSize && segment.dataVendorCost) {
      return segment.effectiveSize * segment.dataVendorCost
    } else {
      return 0
    }
  } else {
    return 0
  }
}
