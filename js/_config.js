//////////////////////////
//
// Config
// Set your app id here.
//
//////////////////////////

if (window.location.host == 'fbauth.apphb.com' || window.location.host == 'www.fbauth.apphb.com') {
    var gAppID = '321109034670289';
}
//Add your Application ID here
else {
    var gAppID = '321109034670289';
}

if (gAppID == 'enter_your_appid_here') {
  alert('You need to enter your App ID in js/_config.js on line 13.');
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