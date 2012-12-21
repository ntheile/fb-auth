//////////////////////////
//
// Config
// Set your app id here.
//
//////////////////////////

if (window.location.host == 'fbauth.apphb.com' || window.location.host == 'www.fbauth.apphb.com') {
    var gAppID = '343925279040057';
}
else { //Add your Application ID here
    var gAppID = '343925279040057';
}


//Initialize the Facebook SDK
//See https://developers.facebook.com/docs/reference/javascript/
window.fbAsyncInit = function() {
  FB.init({ 
    appId: gAppID,
    status: true,
    cookie: true,
    xfbml: true,
    frictionlessRequests: true,
    useCachedDialogs: true,
    oauth: true
  });
  
  authUser();
  //checkForCredits();
  updateAuthElements();
};

// Load the SDK Asynchronously
(function(d){
 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement('script'); js.id = id; js.async = true;
 js.src = "//connect.facebook.net/en_US/all.js";
 ref.parentNode.insertBefore(js, ref);
}(document));