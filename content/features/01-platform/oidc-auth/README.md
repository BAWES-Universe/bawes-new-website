# OIDC Auth

Authentication via OpenID Connect. Provides user login, session management, and tag-based access control.

## How It Works

- **Production:** External OIDC provider handles login
- **Development:** Keycloak mock server (user: "User1" / pass: "pwd"), auto-enabled in `docker compose up`
- **Anonymous mode:** Use `docker-compose-no-oidc.yaml` to disable OIDC for testing

## Related

- [Self-hosting](./self-hosting/) — OIDC env vars
- [Area zones](../02-spatial-world/area-zones/) — tag-gated access to rooms
- [Avatar platform](../02-spatial-world/avatar-platform/) — membership-gated sets