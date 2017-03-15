function removeXFrame(requestDetails) {
  const newHeaders = requestDetails.responseHeaders.filter((header) => {
    return header.name !== 'x-frame-options';
  });

  return {
    responseHeaders: newHeaders
  };
}

browser.webRequest.onHeadersReceived.addListener(
  removeXFrame,
  {urls: ["<all_urls>"]},
  ["blocking", "responseHeaders"]
);
