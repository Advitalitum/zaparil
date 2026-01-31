function FindProxyForURL(url, host) {
  if (dnsDomainIs(host, ".x.com") || dnsDomainIs(host, "x.com")) {
	    alert("zaparil_proxy");
	return "HTTPS localhost:18080";
  }

  alert("zaparil_direct");  
  return "DIRECT";
}
