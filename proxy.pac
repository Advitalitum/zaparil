const domains = ['twitter.com', 'twimg.com', 't.co', 'x.com', 'spotify.com', 'spotifycdn.com', 'scdn.co'];
const domainsWithDotPrefix = domains.map(domain => '.' + domain);

function FindProxyForURL(url, host) {
  const useProxy = domains.some((domain, index) => host == domain  || dnsDomainIs(host, domainsWithDotPrefix[index])
);

  if (useProxy) {
    // alert("zaparil_proxy");
    
    return "PROXY localhost:18080;DIRECT";
  }

  // alert("zaWparil_direct");  
  return "DIRECT";
}