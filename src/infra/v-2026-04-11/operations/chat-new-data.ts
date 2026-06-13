export type ChatNewData = {
  message: string;
  agent: string;
  projectId: string;
  /**
   * Brief identifier the conversation is scoped to. The hub backfills
   * this field with the empty string when starting a chat that is not
   * bound to a Brief; the empty string is the unambiguous sentinel for
   * "no Brief".
   */
  briefId: string;
};
