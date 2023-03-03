const openInNewTab = (url: string) => {
  console.log(url);
  window.open(url, '_blank', 'noopener,noreferrer');
};
export default openInNewTab;
