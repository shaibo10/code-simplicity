interface ISegmentGroup {
  id: string;
  name: string;
  description: string;
  size: number;
  reachEstimationCount: number;
  effectiveSize: number;
  dataVendorCost: number;
  provider: string;
}

function getSegmentName(segment: Promise<ISegmentGroup>): Promise<string> {
  return segment.then(segment => segment.name + segment.provider);
}

function getSegmentCost(segment: Promise<ISegmentGroup>): Promise<number> {
  return segment
    .then(segment => segment.effectiveSize * segment.dataVendorCost)
    .catch(() => 0);
}
