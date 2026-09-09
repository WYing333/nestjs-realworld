// Test fixture: standalone module with no cross-dependency (cycle broken).

export function betaName(): string {
  return 'beta';
}

export function betaDescribe(): string {
  return 'beta->alpha';
}
