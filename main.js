var ghostery = false;
var uBlock = false;

if ($('#projectwonderful').width() === 1) ghostery = true;
if ($('#projectwonderful').width() === 0) uBlock = true;

alert('using ghostery: ' + ghostery + ', using uBlock: ' + uBlock)
