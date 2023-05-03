#!/bin/sh

# Copyright (c) 2016-present Sven Greb <development@svengreb.de>
# This source code is licensed under the Creative Commons Attribution-ShareAlike 4.0 International license found in the license file.

# Git "pre-commit" hook for husky.
# References:
#   1. https://github.com/typicode/husky
#   2. https://git-scm.com/docs/githooks#_pre_commit

. "$(dirname "$0")/_/husky.sh"

npm exec lint-staged
