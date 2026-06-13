export type WSOperation<Operations> = {
  [K in keyof Operations]: {
    op: K;
    data: Operations[K];
  };
}[keyof Operations];
