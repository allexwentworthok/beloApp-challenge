export interface PropsNavigation {
  navigation?: any;
  route?: any;
}
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export interface dataRedux {
  coins?: Coins;
  initialBalance?: any;
}
export interface Coins {
  coins?: Coin;
}
export interface Coin {
  key: number;
  name: string;
  price: Price;
}

export interface Price {
  usd: number;
}
