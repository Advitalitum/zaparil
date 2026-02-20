const domainsList = [
  'spotify.com', 'spotifycdn.com', 'scdn.co',
  'twitter.com', 'twimg.com', 't.co', 'x.com',
  'medium.com',
  'youtube.com', 'googlevideo.com', 'ytimg.com', 'youtu.be', 'ggpht.com', 'youtubei.googleapis.com', 'sponsor.ajay.app',
  'jetbrains.com'
];

const domains = new Set(domainsList);

const domainsWithDotPrefix = domainsList.map(domain => '.' + domain);


function FindProxyForURL(_, host) {

  const useProxy = domains.has(host) || domainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useProxy) {
    // alert('zaparil_proxy');
    
    return 'PROXY localhost:18080; PROXY localhost:28080; PROXY localhost:8080; DIRECT';
  }

  // alert('zaparil_direct');
  
  return 'DIRECT';
}
