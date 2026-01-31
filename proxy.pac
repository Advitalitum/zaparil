function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".x.com")) {
	alert("zaparil");
	return "PROXY 127.0.0.1:18080";
  }
  
  return "DIRECT";
}
