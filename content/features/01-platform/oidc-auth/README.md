# OIDC Auth

> Authentication via OpenID Connect.

**Status:** 🟢 LIVE

### How It Works
- OIDC provider integration for user authentication
- Keycloak mock server in development environments
- Production OIDC provider for live deployment
- Tag-based access control for role management

### Development
- OIDC mock server enabled by default in docker compose up
- Can be disabled with docker-compose-no-oidc.yaml for anonymous access
- Test user: "User1" / password: "pwd"
