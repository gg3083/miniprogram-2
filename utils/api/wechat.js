import $request from './request'


export function getCode(data) {
  let url = 'wx/code'
  return $request.get(url,data)
}
