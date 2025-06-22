#!/bin/bash
cd /home/kavia/workspace/code-generation/virtudesign-66186-359eab7b/virtu_design
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

