import ESRulesType from './type';

class ES7Rules implements ESRulesType {
  description = 'es7 rules'

  // Exponentiation Operator
  grammar(node: any) {
    if(node.type === 'BinaryExpression' && node.operator === '**') {
      return true;
    }
    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // Array.includes methods
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;

      if (object.type === 'Identifier' && object.name === 'ArrayExpression' && property?.name === 'includes') {
        return true
      }
    }

    return false;
  }
}

export const es7RulesCheck = new ES7Rules();

