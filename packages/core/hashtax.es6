import toAst from './text-to-ast';
import interpolate from './interpolate';

export default (text, props) => toAst(interpolate(text, props));
