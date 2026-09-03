// Test fixture: forms a 2-node dependency cycle with cycle-alpha (same dir).
import { alphaName } from './cycle-alpha';

export function betaName(): string {
  return 'beta';
}

export function betaDescribe(): string {
  return 'beta->' + alphaName();
}
