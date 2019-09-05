interface ISegmentGroup {
  id: string
  name: string
  description: string
  size: number
  reachEstimationCount: number
  effectiveSize: number
  dataVendorCost: number
  provider: string
}

function getSegmentName(segment: ISegmentGroup): string {
  if (segment) {
    return segment.name + segment.provider
  } else {
    return null
  }
}

function getSegmentCost(segment: ISegmentGroup): number {
  if (segment !== null) {
    return segment.effectiveSize * segment.dataVendorCost
  } else {
    return 0
  }
}
