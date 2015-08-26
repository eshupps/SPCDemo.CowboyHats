var hostWebUrl;
var appWebUrl;
var baseWeb = "https://binarywaveinc.sharepoint.com/";

function initializePage() {
    setChrome();
}
function setChrome() {
    try {
        hostWebUrl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
        appWebUrl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));
        var options = {
            siteUrl: hostWebUrl,
            userName: '',
            siteTitle: 'Demo Site',
            appHelpPageUrl: '',
            appIconUrl: "",
            appTitle: "Demo App"
        };

        var nav = new SP.UI.Controls.Navigation(
                                "chrome_ctrl_container",
                                options
                          );

        nav.setVisible(true);
        getListData();
    }
    catch (err) { }
}
function getQueryStringParameter(paramToRetrieve) {
    var params =
                document.URLUnencoded.split("?")[1].split("&");
    var strParams = "";
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split("=");
        if (singleParam[0] == paramToRetrieve)
            return singleParam[1];
    }
}
function getListData() {
    try {
        var executor = new SP.RequestExecutor(appWebUrl);
        var reqUrl = appWebUrl + "/_api/SP.AppContextSite(@target)/web/lists/getbytitle('Cowboy Hats')/items?$select=Title,RequiredField&@target='" + hostWebUrl + "'";
        var content;
        executor.executeAsync({
            url: reqUrl,
            method: "GET",
            headers: { "Accept": "application/json;odata=verbose" },
            success: function (result) {
                var objData = $.parseJSON(result.body);
                $.each(objData.d.results, function (i, val) {
                    content += "<li><img data-frame='" + baseWeb + val.RequiredField + "' src='" + baseWeb + val.RequiredField + "' title='" + val.Title + "' />";
                });
                $("#gallery").html(content);
                $('#gallery').galleryView({
                    easing: 'swing',
                    show_panels: true, 				
                    show_panel_nav: false, 			
                    enable_overlays: true, 			
                    panel_width: 900, 				
                    panel_height: 500, 				
                    panel_animation: 'slide', 		
                    panel_scale: 'fit', 			
                    overlay_position: 'bottom', 	
                    start_frame: 1, 				
                    show_filmstrip: true, 			
                    show_filmstrip_nav: true, 		
                    enable_slideshow: false,			
                    autoplay: false,				
                    show_captions: true, 			
                    filmstrip_size: 3, 				
                    filmstrip_style: 'scroll', 		
                    filmstrip_position: 'bottom', 	
                    frame_width: 164, 				
                    frame_height: 80, 				
                    frame_opacity: 0.5, 			
                    frame_scale: 'fit', 			
                    frame_gap: 5, 					
                    show_infobar: true,				
                    infobar_opacity: 1				
                });
            },
            error: function (result, code, message) {
                alert(message);
            }
        });
    } catch (err) {
        alert(err.message);
    }
}