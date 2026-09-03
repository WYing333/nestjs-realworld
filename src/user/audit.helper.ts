// Test fixture: a util/data-level helper that reaches UP into the api layer
// (backward crossing). One-way: nothing imports this file, controller doesn't
// import it, so no cycle — isolates the BC crossing.
import { UserController } from './user.controller';

export function auditProbe(): string {
  return UserController.auditTag();
}
