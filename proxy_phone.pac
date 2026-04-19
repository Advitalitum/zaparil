const domainsList = [
  'youtube.com','googlevideo.com', 'ytimg.com', 'youtu.be', 'ggpht.com', 'youtubei.googleapis.com'
];

const domains = new Set(domainsList);

const domainsWithDotPrefix = domainsList.map(domain => '.' + domain);


function FindProxyForURL(_, host) {

  const useProxy = domains.has(host) || domainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useProxy) {
    // alert('zaparil_proxy');
    
    return 'HTTPS 127.0.0.1:8055';
  }

  // alert('zaparil_direct');
  
  return 'DIRECT';
}
