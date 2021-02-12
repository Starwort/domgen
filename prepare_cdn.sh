#!/bin/bash

for file in $(ls docs/cdn/source/styles/); do
    sass docs/cdn/source/styles/$file docs/cdn/styles/${file%.scss}.css --style=compressed --no-source-map
done
webpack
