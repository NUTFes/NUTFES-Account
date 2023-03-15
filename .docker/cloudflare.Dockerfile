# use a builder image for building cloudflare
ARG TARGET_GOOS
ARG TARGET_GOARCH
FROM golang:1.19 as builder
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    TARGET_GOOS=${TARGET_GOOS} \
    TARGET_GOARCH=${TARGET_GOARCH}
    
WORKDIR /go/src/github.com/cloudflare/cloudflared/

# clone our sources into the builder image
RUN apt update && apt install -y git
RUN git clone https://github.com/cloudflare/cloudflared.git .

# compile cloudflared
RUN make cloudflared

# use a distroless base image with glibc
FROM gcr.io/distroless/base-debian11

LABEL org.opencontainers.image.source="https://github.com/cloudflare/cloudflared"

# copy our compiled binary
COPY --from=builder /go/src/github.com/cloudflare/cloudflared/cloudflared /usr/local/bin/

# command / entrypoint of container
ENTRYPOINT ["cloudflared", "--no-autoupdate"]
CMD ["version"]