import { es6RulesCheck } from './es6'
import ESRulesType from './type';

const rules: Record<string, ESRulesType> = {
  '6': es6RulesCheck,
}

export default rules;