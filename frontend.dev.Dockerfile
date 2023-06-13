# ベースイメージの作成
FROM node:18.16.0

# コンテナ内で作業するディレクトリを指定
WORKDIR /repo/frontend
COPY ./ /repo

# 初期設定
RUN apt install git
RUN npm install
