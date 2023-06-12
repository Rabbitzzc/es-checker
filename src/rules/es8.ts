import ESRulesType from './type';

class ES8Rules implements ESRulesType {
  description = 'es8 rules'

  grammar(node: any) {

    // async function a(){}
    if(node.type === 'FunctionDeclaration' && node.async === true) {
      return true;
    }

    // await 1
    if(node.type === 'AwaitExpression') {
      return true;
    }
    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // Object.values  Object.entries
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const methods = ['values', 'entries']

      if (object.type === 'Identifier' && object.name === 'Object' && methods.includes(property?.name)) {
        return true
      }
    }

    // Object.getOwnPropertyDescriptors
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;

      if (object.type === 'Identifier' && object.name === 'Object' && property?.name === 'getOwnPropertyDescriptors') {
        return true
      }
    }

    // String.padEnd(Start)
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const methods = ['padStart', 'padEnd']

      if (object.type === 'Identifier' && object.name === 'StringLiteral' && methods.includes(property?.name)) {
        return true
      }
    }

    

    return false;
  }
}

export const es8RulesCheck = new ES8Rules();

