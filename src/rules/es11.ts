import ESRulesType from './type';

class ES11Rules implements ESRulesType {
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
      const promiseMethods = ['allSettled']

      if (object.type === 'Identifier' && object.name === 'Promise' && promiseMethods.includes(property?.name)) {
        return true
      }
    }

    return false;
  }
}

export const es11RulesCheck = new ES11Rules();

