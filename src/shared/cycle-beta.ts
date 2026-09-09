// Test fixture: cross-import to cycle-alpha is lazy to avoid a static import cycle.

export function betaName(): string {
  return 'beta';
}

export function betaDescribe(): string {
  // Lazy import breaks the static dependency cycle with cycle-alpha.
  const { alphaName } = require('./cycle-alpha');
  return 'beta->' + alphaName();
}
