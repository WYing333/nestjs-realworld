// Test fixture: forms a 2-node dependency cycle with cycle-beta (same dir).
import { betaName } from './cycle-beta';

export function alphaName(): string {
  return 'alpha';
}

export function alphaDescribe(): string {
  return 'alpha->' + betaName();
}
