const obj = { prop: null };
const value = obj.prop ?? 'default value';
const obj2 = { prop: { nestedProp: 'hello' } };
const nestedValue = obj2.prop?.nestedProp?.toUpperCase();
const bigNum = 123456789012345678901234567890n;