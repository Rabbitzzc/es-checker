import ESRulesType from './type';

class ES12Rules implements ESRulesType {
  description = 'es6 rules'

  grammar(node: any) {
    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // Promise.allSettled methods
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const promiseMethods = ['any']

      if (object.type === 'Identifier' && object.name === 'Promise' && promiseMethods.includes(property?.name)) {
        return true
      }
    }

     // String.replaceAll
     if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const methods = ['replaceAll'];

      if (object.type === 'Identifier' && object.name === 'StringLiteral' && methods.includes(property?.name)) {
        return true
      }
    }

    return false;
  }
}

export const es12RulesCheck = new ES12Rules();

