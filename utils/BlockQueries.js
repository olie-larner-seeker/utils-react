function getBlockDefinitions() {
  return `
  blocks {
    ... on AcfComponentNameBlock {
      componentName {
        fieldsYouWantToQuery
      }
      attributes {
        id
      }
    }
  }
    `;
}
export default getBlockDefinitions;
