
const dinamicImport = {
  data: () => import('./data.json').then((module) => module.default),
}
 
export const getData = async (name) => dinamicImport[name]()