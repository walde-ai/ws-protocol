export type TaskCompletedData = {
  /**
   * The Brief whose background agent has successfully finalised its work — that
   * is, whose state transitioned to `TECH_SPEC_DEFINED` (Architect finished) or
   * `IMPLEMENTED` (Coder finished).
   */
  briefId: string;
};
