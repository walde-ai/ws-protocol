export type TaskFailedData = {
  /**
   * The Brief whose background agent finalised with a failure outcome — that
   * is, whose state transitioned to `FAILED`.
   */
  briefId: string;
};
