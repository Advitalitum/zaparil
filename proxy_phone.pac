const ytDomainsList = [
  'youtube.com','googlevideo.com', 'ytimg.com', 'youtu.be', 'ggpht.com', 'youtubei.googleapis.com', 'sponsor.ajay.app'
];

const otherDomainsList = [
  't.me', 'telegram.org'
];

const ytDomains = new Set(ytDomainsList);

const ytDomainsWithDotPrefix = ytDomainsList.map(domain => '.' + domain);

const otherDomains = new Set(otherDomainsList);

const otherDomainsWithDotPrefix = otherDomainsList.map(domain => '.' + domain);

function FindProxyForURL(_, host) {

  const useYtProxy = ytDomains.has(host) || ytDomainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useYtProxy) {
   return 'SOCKS 127.0.0.1:8055';
  }

  const useOtherProxy = otherDomains.has(host) || otherDomainsWithDotPrefix.some(domainWithDotPrefix => host.endsWith(domainWithDotPrefix));

  if (useOtherProxy) {
   return 'SOCKS 127.0.0.1:8055';
  }
  
  return 'DIRECT';
}
