var uBlockBlocked = false;

if ($('.adsbygoogle').css('display') === "none") uBlockBlocked = true;

alert('uBlock blocked? ' + uBlockBlocked)
