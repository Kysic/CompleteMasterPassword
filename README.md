# CompleteMasterPassword
Mozilla extension to automatically complete master password at application startup.

This extension is not self-sufficient and can lead to security problem.

I create it for personnal use on firefox and thunderbird, and in conjonction of a script which get my master password
from a secure storage (gnome-keyring) which is unlocked when I open my gnome session
(see https://github.com/mvhaen/node-xkeychain/blob/master/platforms/gkeyring.py for more information on how to extract a password
from gnome-keyring).

Then the script launch the mozilla program with a command like :
    masterPassword=[The password] firefox

Thus my password are supposed to be secure when my computer is shutdown and I have to re-enter my password
when I start Firefox or Thunderbird.

Tested on firefox and thunderbird for personnal used.
