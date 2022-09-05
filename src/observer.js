function callback(mutation) {
    console.log('observed mutation');
    console.log("sending message");
    chrome.runtime.sendMessage({text: "hey"}, function(response) {
	//console.log(fetch("core/browserAction.html"));
	console.log("Response: ", response);
    });
}
var dom_observer = new MutationObserver(callback);

var container = document.body;

var config = {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
};


window.onload = function() {
    console.log("observer loaded");
    //debugger;
    if(window.location.host != 'cfe.cloud.in-business.net')
	return;

    //document.head.appendChild(s);    
    
    dom_observer.observe(container, config);
}
