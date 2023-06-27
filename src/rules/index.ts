import { es10RulesCheck } from './es10';
import { es11RulesCheck } from './es11';
import { es12RulesCheck } from './es12';
import { es6RulesCheck } from './es6'
import { es7RulesCheck } from './es7';
import { es8RulesCheck } from './es8';
import { es9RulesCheck } from './es9';
import ESRulesType from './type';

const rules: Record<string, ESRulesType> = {
  'es6': es6RulesCheck,
  'es7': es7RulesCheck,
  'es8': es8RulesCheck,
  'es9': es9RulesCheck,
  'es10': es10RulesCheck,
  'es11': es11RulesCheck,
  'es12': es12RulesCheck,
}

export default rules;