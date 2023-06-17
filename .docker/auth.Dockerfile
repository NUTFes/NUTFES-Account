FROM quay.io/keycloak/keycloak:latest as builder
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build

FROM openjdk:11-jdk-slim-bullseye as runner
COPY --from=builder /opt/keycloak /opt/keycloak
RUN apt update && apt install -y jq

ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
