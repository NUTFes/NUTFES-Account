# ベースイメージの作成
FROM node:18.16.0

ARG CRYPT_NAME="git-crypt"
ARG CRYPT_PATH="/opt/homebrew/bin/git-crypt"

# コンテナ内で作業するディレクトリを指定
WORKDIR /repo/frontend
RUN apt update
RUN apt install -y git git-crypt

# git-cryptがインストールされているディレクトリにシンボリックリンク作成
RUN mkdir -p ${CRYPT_PATH%/${CRYPT_NAME}}
RUN ln -s /bin/git-crypt ${CRYPT_PATH}
