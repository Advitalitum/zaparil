function FindProxyForURL(url, host) {
  const domains = ['twitter.com', 'twimg.com', 't.co', 'x.com', 'spotify.com', 'spotifycdn.com', 'scdn.co'];

  const useProxy = domains.some(element => dnsDomainIs(host, element) || dnsDomainIs(host, "." + element));

  if (useProxy) {
    // alert("zaparil_proxy");
	  return "PROXY localhost:18080;DIRECT";
    // return "HTTPS localhost:18080;HTTP localhost:18080;SOCKS5 localhost:18080;PROXY localhost:18080;DIRECT";
  }

  // alert("zaparil_direct");  
  return "DIRECT";
}