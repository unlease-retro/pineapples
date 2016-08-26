#!/bin/shell

cd /opt/unlease/app && npm install
pgrep node && sudo killall node || echo 0
sudo supervisorctl restart all

