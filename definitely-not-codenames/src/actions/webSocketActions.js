const wsSend = (message) => ({
  type: "WS_SEND",
  message,
});

export { wsSend };
