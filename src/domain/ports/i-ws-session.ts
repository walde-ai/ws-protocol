export interface IWSSession<Operations> {
  send<K extends keyof Operations>(op: K, data: Operations[K]): Promise<void>;
  close(): void;
}
