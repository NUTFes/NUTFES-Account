# ベースイメージの作成
FROM node:18.16.0

# コンテナ内で作業するディレクトリを指定
WORKDIR /repo/frontend
RUN apt install git
