const openInNewTab = (url: string) => {
  window.open(url, '_self');

  // window.open(url, '', 'noopener,noreferrer');
};
export default openInNewTab;
