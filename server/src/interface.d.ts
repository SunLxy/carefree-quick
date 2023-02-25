export interface RouteItemType<T> {
  method: 'get' | 'post' | 'put' | 'delete'
  route: string
  action: string
  controller: T
}
