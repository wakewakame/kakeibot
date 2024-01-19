#!/bin/sh -eu

# 参考: https://pptr.dev/guides/docker
docker run \
	-i --init --cap-add=SYS_ADMIN --rm \
	--mount type=bind,source="$(pwd)/screenshot",target=/home/pptruser/screenshot \
	ghcr.io/puppeteer/puppeteer:21.7.0 \
	node -e "$(cat ./main.js)"
