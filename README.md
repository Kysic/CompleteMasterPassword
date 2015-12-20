# CompleteMasterPassword
Mozilla extension to automatically complete master password at application startup.

Mozilla repository URL : https://addons.mozilla.org/addon/complete-master-password/

This extension is not self-sufficient and can lead to security problem.

I create it for personnal use on firefox and thunderbird, and in conjonction of a script which get my master password
from a secure storage (gnome-keyring) which is unlocked when I open my gnome session
(see https://github.com/kparal/gkeyring for more information on how to extract a password from gnome-keyring).

Then the script launch the mozilla program with a command like :
    masterPassword=[The password] firefox

Thus my password are supposed to be secure when my computer is shutdown and I have to re-enter my password
when I start Firefox or Thunderbird.

The principle is very basic (and not optimized), the extension detect the window asking for the password and submit it automatically with the environnement variable "masterPassword" if it's present.
The environnement variable is then overwrite to avoid simple user to use "show password" fonctionnality (it's not a robust hack,
but it can be usefull if you just let your computer 30 seconds out of sight without locking it).

Because of this functioning, you may see a blink on the application startup at the moment the password is automatically submited.

Recommendations : 
- Do not used without a tool to store your master password ciphered and lock by another password or credentials.
- This extension is a compromised between security and ease of use. It supposed to be safer to have this extension installed and a master password than no master password. But it's certainly more secure to have a master password without this extension or better, not to store any password in firefox or thunderbird.
- Use a randomly generetad masterPassword, or at least not the same as for your personnal email account by example.
