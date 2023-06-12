// es6 rules, includes Grammar & API
import ESRulesType from './type';

class ES6Rules implements ESRulesType {
  description = 'es6 rules'

  grammar(node: any) {
    // const & let
    if (node.kind === 'let' || node.kind === 'const') {
      return true
    }

    // for of
    if (node.type === 'ForOfStatement') {
      return true;
    }

    // const hello = `hello, ${1}`
    if (node.type === 'TemplateLiteral') {
      return true
    }

    // func(args) ===> func`args`
    if (node.type === 'TaggedTemplateExpression') {
      return true;
    }

    // arrow function
    if (node.type === 'ArrowFunctionExpression') {
      return true;
    }

    // rest [a, ...rest] = [1,2,3]
    if (node.type === 'RestElement') {
      return true;
    }

    // const arr1 = [1, 2, 3]; const arr2 = [...arr1, 4, 5, 6];
    if (node.type === 'SpreadElement') {
      return true
    }

    // const { name, age } = { name: 'John', age: 30 }
    if (node.type === 'ObjectPattern') {
      return true;
    }

    // function foo(param = defaultValue) {}
    if (node.type === 'AssignmentPattern') {
      return true;
    }


    if (node.type === 'FunctionDeclaration') {
      // function* generatorFunction() {}
      if (node.generator) {
        return true;
      }
    }

    // yield expression;
    if (node.type === 'YieldExpression') {
      return true;
    }

    // new target
    if (node.type === 'MetaProperty') {
      return true;
    }


    // class body, like constructor or methods
    if (node.type === 'ClassBody') {
      return true;
    }

    // use class or extends ... includes relation
    if (node.type === 'ClassDeclaration') {
      return true;
    }

    // const A = class {}
    if (node.type === 'ClassExpression') {
      return true;
    }

    // import
    if (node.type === 'ImportDeclaration') {
      return true;
    }

    // export
    if (node.type === 'ExportNamedDeclaration') {
      return true;
    }

    // export default 
    if (node.type === 'ExportDefaultDeclaration') {
      return true;
    }

    // export * from 
    if (node.type === 'ExportAllDeclaration') {
      return true;
    }


    return false;
  }

  api(node: any) {
    const callee = node.callee;

    if(!callee) return false;

    // use Promise --- new Promise
    if (node.type === 'Identifier' && callee.name === 'Promise') {
      return true;
    }

    // Promise methods
    if (callee.type === 'MemberExpression') {
      const object = callee.object;
      const property = callee.property;
      const promiseMethods = ['all', 'reject', 'all', 'race', 'any']

      if (object.type === 'Identifier' && object.name === 'Promise' && promiseMethods.includes(property?.name)) {
        return true
      }
    }

    // use Promise --- new Proxy
    if (node.type === 'Identifier' && callee.name === 'Proxy') {
      return true;
    }

    // use Promise --- new Reflect
    if (node.type === 'Identifier' && callee.name === 'Reflect') {
      return true;
    }


    return false;
  }
}

export const es6RulesCheck = new ES6Rules();

