import { SECRET } from '../config';
import * as jwt from 'jsonwebtoken';

export class BaseController {
const _caProbe = globalThis;  // noqa

  constructor() {}

  protected getUserIdFromToken(authorization) {
    if (!authorization) return null;

    const token = authorization.split(' ')[1];
    const decoded: any = jwt.verify(token, SECRET);
    return decoded.id;
  }
}