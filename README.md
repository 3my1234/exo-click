# Exo Portal (Compliant Bridge)

Mobile-first Next.js 16 bridge page with transparent consent, unlock flow, runtime config API, and safe redirect validation.

## Run

```bash
npm install
npm run dev
```

## Environment Variables

Copy `.env.example` to `.env.local` and set values:

- `NEXT_PUBLIC_MONETIZATION_URL`: Optional partner URL opened on continue.
- `NEXT_PUBLIC_INTERSTITIAL_ID`: Reserved for your own client logic.`n- `NEXT_PUBLIC_EXO_POP_HOST`: ExoClick pop script host (for example `a.pemsrv.com`).`n- `NEXT_PUBLIC_EXO_SYNDICATION_HOST`: ExoClick syndication host (for example `s.pemsrv.com`).`n- `NEXT_PUBLIC_EXO_POP_ZONE_ID`: ExoClick popunder zone ID.
- `DEFAULT_DEST_URL`: Fallback destination URL.
- `ALLOWED_DEST_HOSTS`: Comma-separated list of allowed destination hosts.

## Routes

- `/` main portal page (`?dest=https://allowed-host/path` supported)
- `/api/v1/config` runtime client config endpoint
- `/go/[id]` safe redirect endpoint that enforces allowlist

## Coolify

- Deploy as Node.js app.
- Add environment variables above.
- Enable reverse proxy caching for static assets and `/api/v1/config`.

