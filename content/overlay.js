// http://mxr.mozilla.org/comm-central/source/mozilla/toolkit/components/prompts/content/commonDialog.xul
// https://developer.mozilla.org/en/XPCOM_Interface_Reference/nsIEnvironment
// https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html#event-type-keypress
// https://developer.mozilla.org/fr/docs/Web/API/document.createEvent
// https://developer.mozilla.org/en-US/Add-ons/Code_snippets/Dialogs_and_Prompts

// To see errors msgs :
// javascript.options.showInConsole = true
function validePassword()
{
    try {
        // Form submission
        document.documentElement.getButton("accept").click();

        // Destroy environment variable "masterPassword"
        var envService = Components.classes["@mozilla.org/process/environment;1"].getService(Components.interfaces.nsIEnvironment);
        envService.set('masterPassword', '');
    } catch (e) {
        Components.utils.reportError("CompleteMasterPassword.validePassword() : " + e);
    }
}

function modifiePassword()
{
    try
    {
        // Check windows title
        if ( document.getElementById("info.body").textContent.indexOf("mot de passe principal") >= 0 
            || document.getElementById("info.body").textContent.indexOf("the master password") >= 0)
        {
            // Get environment variable "masterPassword"
            var passwordProp = 'masterPassword';
            var envService = Components.classes["@mozilla.org/process/environment;1"].getService(Components.interfaces.nsIEnvironment);
            if ( envService.exists(passwordProp) && envService.get(passwordProp) != "" )
            {  
                // Complete password field with environment variable
                document.getElementById("password1Textbox").value=envService.get(passwordProp);
                setTimeout('validePassword()', 100);
            }
        }
    }
    catch (e)
    {
        Components.utils.reportError("CompleteMasterPassword.modifiePassword() : " + e);
    }
}
document.getElementById("info.body").addEventListener('DOMNodeInserted', modifiePassword, false);

