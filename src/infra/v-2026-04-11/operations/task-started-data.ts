export type TaskStartedData = {
  /**
   * Server-generated UUID representing the background task record.
   */
  taskId: string;
  /**
   * Echoed verbatim from the originating TaskRunData so the client can match
   * the response back to the call.
   */
  correlationId: string;
};
