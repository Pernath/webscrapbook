function callback(mutations) {
    console.log("total of of observed mutations: ", mutations.length);
    console.log('observed mutation: ', mutations);
    if(mutations.length >= 10) {
        console.log("sending message");
        setTimeout(function() {
                chrome.runtime.sendMessage({text: "hey"}, function(response) {
	            console.log("Response: ", response);
                });
        }, 3000);   
    }   
}
var dom_observer = new MutationObserver(callback);

var container = document.body;

var config = {
    attributes: false,
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
