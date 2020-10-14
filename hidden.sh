#!bin/bash
mkdir ./info
wget --mirror -A  README -P ./info -e robots=off 10.0.0.147/.hidden/
find ./info -name README | xargs grep [0-9] | cut -d : -f2
rm -rf ./info