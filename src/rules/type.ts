
export default interface ESRulesType {
  description: string
  grammar: (node: any) => boolean;
  api: (node: any) => boolean;
}