#!/usr/bin/env bash
# 部署「KidsIsland · 熊猫学堂」最新版到阿里云服务器
# 域名: https://kids.yuzikong.love/

set -euo pipefail

SERVER_IP="${SERVER_IP:?请显式设置 SERVER_IP}"
SSH_USER="${SSH_USER:?请显式设置低权限 SSH_USER}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/kkpg.pem}"
SSH_KNOWN_HOSTS="${SSH_KNOWN_HOSTS:-$HOME/.ssh/known_hosts}"
[[ -f "$SSH_KEY" ]] || SSH_KEY="/mnt/c/Users/zlh/Desktop/kkpg.pem"
LOCAL_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="${TARGET_DIR:-/www/wwwroot/kids.yuzikong.love}"

if [[ "$SSH_USER" == "root" ]]; then
  echo "请使用专用的低权限部署账户，而不是 root。"
  exit 1
fi

if [[ ! -f "$SSH_KEY" ]]; then
  echo "找不到密钥: $SSH_KEY"
  exit 1
fi

chmod 600 "$SSH_KEY" 2>/dev/null || true

if ! ssh-keygen -F "$SERVER_IP" -f "$SSH_KNOWN_HOSTS" >/dev/null 2>&1; then
  echo "未在 $SSH_KNOWN_HOSTS 中找到 ${SERVER_IP} 的已验证主机密钥。请先由受信任渠道添加主机密钥。"
  exit 1
fi

RSYNC_SSH="ssh -i ${SSH_KEY} -o UserKnownHostsFile=${SSH_KNOWN_HOSTS} -o StrictHostKeyChecking=yes -o IdentitiesOnly=yes -p 22"
SSH=(ssh -i "$SSH_KEY" -o UserKnownHostsFile="$SSH_KNOWN_HOSTS" -o StrictHostKeyChecking=yes -o IdentitiesOnly=yes -p 22 "${SSH_USER}@${SERVER_IP}")
RSYNC_ARGS=(-avz --itemize-changes)
if [[ "${ALLOW_DELETE:-0}" == "1" ]]; then
  RSYNC_ARGS+=(--delete)
else
  echo "提示：默认不删除远程文件。确认需要镜像删除时，请设置 ALLOW_DELETE=1。"
fi

echo "==> 同步最新的 KidsIsland (移动端) 到 ${TARGET_DIR}..."
rsync "${RSYNC_ARGS[@]}" \
  -e "$RSYNC_SSH" \
  --exclude '.git' \
  --exclude '.trae' \
  --exclude '.trae-html-share-packages' \
  --exclude '.trash' \
  --exclude 'kidsisland-app' \
  --exclude 'KidsIsland-GitHub' \
  --exclude 'ffmpeg-full' \
  --exclude 'ffmpeg.zip' \
  --exclude '*.zip' \
  --exclude '*.sql' \
  --exclude '*.bak' \
  --exclude 'deploy-kids.sh' \
  "${LOCAL_DIR}/" "${SSH_USER}@${SERVER_IP}:${TARGET_DIR}/"

echo "==> 设置文件权限 www:www..."
"${SSH[@]}" "chown -R www:www '${TARGET_DIR}' && find '${TARGET_DIR}' -type d -exec chmod 755 {} \; && find '${TARGET_DIR}' -type f -exec chmod 644 {} \;"

echo ""
echo "✅ 部署完成！"
echo "🌐 访问线上页面: https://kids.yuzikong.love/"
echo ""
