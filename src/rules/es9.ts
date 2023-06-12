import ESRulesType from './type';

class ES9Rules implements ESRulesType {
  description = 'es6 rules'

  grammar(node: any) {
    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // Promise methods
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const promiseMethods = ['finally']

      if (object.type === 'Identifier' && object.name === 'Promise' && promiseMethods.includes(property?.name)) {
        return true
      }
    }



    return false;
  }
}

export const es9RulesCheck = new ES9Rules();

