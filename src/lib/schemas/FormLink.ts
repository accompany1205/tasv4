export default interface FormLink {
    url: string,
    formParams: {paramName: string, paramValue: string}[]
}