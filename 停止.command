#!/usr/bin/env bash
DIR="$(cd "$(dirname "$0")" && pwd)"
if lsof -i :8000 >/dev/null 2>&1; then
  PIDS=$(lsof -ti :8000 2>/dev/null)
  if [ -n "$PIDS" ]; then
    kill $PIDS 2>/dev/null
    sleep 0.5
    kill -9 $PIDS 2>/dev/null
  fi
  osascript -e 'display notification "已停止法考电子法条服务" with title "法考电子法条"'
else
  osascript -e 'display notification "端口 8000 当前没有服务在跑" with title "法考电子法条"'
fi
exit 0