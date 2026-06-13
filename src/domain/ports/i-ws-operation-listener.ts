import { IWSSession } from './i-ws-session';

export interface IWSOperationListener<T, Operations> {
  handle(params: { session: IWSSession<Operations>; data: T }): Promise<void>;
}
