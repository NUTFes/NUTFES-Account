FROM quay.io/keycloak/keycloak:latest as builder
ENV KC_DB=postgres
RUN /opt/keycloak/bin/kc.sh build

FROM quay.io/keycloak/keycloak:latest as runner
COPY --from=builder /opt/keycloak /opt/keycloak
ENTRYPOINT ["/opt/keycloak/bin/kc.sh"]
