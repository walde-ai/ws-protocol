/**
 * A file the tenant attached to a conversation message. Each entry names a file
 * already uploaded into the project's staging area under `_walde/staging/`; the
 * `stagingKey` is the handle the conversation-attachment caller hands to
 * `ingest`, and `fileName` and `contentType` describe the file for display and
 * classification.
 */
export type ChatAttachment = {
  stagingKey: string;
  fileName: string;
  contentType: string;
};

export type ChatSendData = {
  chatId: string;
  message: string;
  /**
   * Files the tenant attached to this message. Always present; the empty array
   * is the explicit value for a message that carries no attachments.
   */
  attachments: ChatAttachment[];
  /**
   * The stage the tenant is working in, taken from the hub's selected stage. It
   * is the live store an attachment would route to if the agent classifies it
   * as an asset, so it is required (non-empty) on a message that carries
   * attachments and the empty string on one that does not.
   */
  siteId: string;
};
