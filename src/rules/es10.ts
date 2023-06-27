import ESRulesType from './type';

class ES10Rules implements ESRulesType {
  description = 'es6 rules'

  grammar(node: any) {
    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // Object.fromEntries
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const methods = ['fromEntries'];

      if (object.type === 'Identifier' && object.name === 'Object' && methods.includes(property?.name)) {
        return true
      }
    }

    // String.trimStart trimEnd matchAll
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const methods = ['trimStart', 'trimEnd', 'matchAll'];

      if (object.type === 'Identifier' && object.name === 'StringLiteral' && methods.includes(property?.name)) {
        return true
      }
    }

    // Array.flat flatMap methods
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;

      const methods = ['flat', 'flatMap'];
      if (object.type === 'Identifier' && object.name === 'ArrayExpression' &&  methods.includes(property?.name)) {
        return true
      }
    }




    return false;
  }
}

export const es10RulesCheck = new ES10Rules();

