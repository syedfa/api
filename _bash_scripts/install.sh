#!/bin/bash
set -x

# Import the SSH deployment key
rm deploy-key.enc
chmod 600 deploy-key
mv deploy-key ~/.ssh/id_rsa
