import { toAst } from './processors';
import interpolate from './interpolate';

export default (text, props) => toAst(interpolate(text, props));
