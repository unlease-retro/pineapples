#!/bin/shell

pgrep node && sudo killall node || echo 0
sudo supervisorctl restart all

