##################################################
Mirror archive of community.opensourcebeehives.net
##################################################


************
Introduction
************
In July 2016, http://community.opensourcebeehives.net/ went down. In an attempt to make
the contents more easily accessible for anyone still interested, we tried to squeeze
things out of the wayback machine.

However, being driven by an ancient version of Discourse (Discourse 1.1.0.beta2),
some additional polishing was required. For details, have a look at the repository history.


***********
Restoration
***********

Fetch from archive.org
======================
::

    gem install wayback_machine_downloader
    wayback_machine_downloader --concurrency 10 http://community.opensourcebeehives.net/


Start git repository
====================
::

    cd websites
    git init
    cd community.opensourcebeehives.net

    # Clean up some weird file paths like
    cd uploads/stylesheet-cache/
    mv 291bdad5-09af-4949-b894-1b7b534564be.css\?519000ceda98fb8a6e2c53b423aa7dd9 291bdad5-09af-4949-b894-1b7b534564be.css

    # Add stuff to the repository selectively
    # git add ...

    # Add README.rst (you are currently reading this)

    git commit -m 'Initial commit of wayback machine contents of community.opensourcebeehives.net'


Massage
=======
Tweak the HTML tree into being coherent and self-contained, YMMV.

