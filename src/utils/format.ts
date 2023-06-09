export declare interface instanceObject {
  [key: string]: string;
}

/**
 * JSON to URL parameter
 * @param data JSON format data
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      })
      .join('&')
    : ''
}

export default formatJsonToUrlParams
