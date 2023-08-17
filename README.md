# Specify CLI testing

## Usage

### Install dependencies
```bash
npm install
```

### Create 2 .env files within `v1` and `v2` directories.

Env file content:
```bash
SPECIFY_REPOSITORY=@specifyapp/demo
SPECIFY_PERSONAL_ACCESS_TOKEN=*****
```

### Run cases

Staging

```bash
npm run specify-staging -C v1/.specifyrc.mjs
```

Production

```bash
npm run specify -C v1/.specifyrc.mjs
```