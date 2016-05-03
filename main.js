var ghostery = false;
var uBlock = false;

if ($('#projectwonderful').width() === 1) ghostery = true;
if ($('#projectwonderful').width() === 0) {
  uBlock = true;
  ghostery = undefined;
}

alert('using ghostery: ' + ghostery + ', using uBlock: ' + uBlock + ' undefined means we don\'t know')
