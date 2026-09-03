#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"
PORT=8000
if lsof -i :$PORT >/dev/null 2>&1; then
  osascript -e 'display notification "端口 8000 已被占用，直接打开已有服务" with title "法考电子法条"'
else
  nohup python3 -m http.server $PORT --bind 127.0.0.1 >/tmp/law-desktop.server.log 2>&1 &
  for i in 1 2 3 4 5 6 7 8 9 10; do
    sleep 0.3
    if curl -sf "http://127.0.0.1:$PORT/" >/dev/null 2>&1; then break; fi
  done
fi
open "http://127.0.0.1:$PORT/"
exit 0