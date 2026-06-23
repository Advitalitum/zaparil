const domainsList = [
  'spotify.com', 'spotifycdn.com', 'scdn.co',
  'twitter.com', 'twimg.com', 't.co', 'x.com',
  'medium.com',
  'sponsor.ajay.app',
  'telegram.org', 't.me',
  '0x0a.de', 'weg.fan', 'celestemods.com', 'maddie480.ovh'
];

const domains = new Set(domainsList);

const domainsWithDotPrefix = domainsList.map(domain => '.' + domain);


function FindProxyForURL(_, host) {

  const useProxy = domains.has(host) || domainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useProxy) {
    return 'PROXY localhost:18080;PROXY localhost:8080;DIRECT';
  }
  
  return 'DIRECT';

}
