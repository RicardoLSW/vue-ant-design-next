#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
