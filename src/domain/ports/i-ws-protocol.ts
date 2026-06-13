import { WSOperation } from '../entities/ws-operation';
import { IWSSession } from './i-ws-session';

export interface IWSProtocol<Operations> {
  readonly name: string;
  parse(raw: string): WSOperation<Operations>;
  encode<K extends keyof Operations>(op: K, data: Operations[K]): string;
  handleMessage(raw: string, session: IWSSession<Operations>): Promise<void>;
}
