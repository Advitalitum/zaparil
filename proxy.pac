function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".x.com") || dnsDomainIs(host, "x.com")) {
	alert("zaparil");
	return "HTTP localhost:18080";
  }
  
  return "DIRECT";
}
