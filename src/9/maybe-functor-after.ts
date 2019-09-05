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

function getSegmentName(segment: Maybe<ISegmentGroup>): Maybe<string> {
  return segment.map((segment) => segment.name + segment.provider)
}

function getSegmentGroupCost(segment: Maybe<ISegmentGroup>): number {
  const getSingleSegmentCost = ({effectiveSize, dataVendorCost})=>effectiveSize*dataVendorCost
  return segment.map(getSingleSegmentCost).reduce(identity, 0)
}

function identity(...args) {
  return args[args.length - 1]
}
