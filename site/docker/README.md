# Docker — appsx.com.br

Container nginx single-stage que serve o build estático do Angular SPA.

## Estrutura

```
site/
├── doker/
│   ├── app-dockerfile          # Imagem nginx + assets
│   ├── nginx/default.conf      # Server blocks HTTP/HTTPS para appsx.com.br
│   ├── site/wwww/              # (gerado) saída de `ng build` copiada pelo publish
│   └── README.md
├── docker-compose-app.yaml     # Serviço `app` (container appsx-site)
└── scripts/publish-site.sh     # Pipeline build → rsync → docker compose up
```

## Build local (opcional, para testar a imagem)

```bash
cd site
npm run build
mkdir -p doker/site/wwww
rsync -a --delete dist/appsx-web/browser/ doker/site/wwww/
docker build -f doker/app-dockerfile -t appsx-site:dev .
docker run --rm -p 8080:80 appsx-site:dev
```

Apenas o server block HTTP responderá sem certificado montado.

## Publicação no servidor (212.192.2.4)

```bash
# Recomendado: chave SSH
ssh-copy-id root@212.192.2.4

# Alternativa com senha (requer sshpass)
export SSHPASS='********'

./scripts/publish-site.sh
```

Variáveis suportadas:
- `APPSX_SERVER` (default `212.192.2.4`)
- `APPSX_USER`   (default `root`)
- `SSHPASS`      (ativa modo sshpass)

## Provisionamento do certificado (uma única vez)

No servidor, com a porta 80 livre:

```bash
docker stop appsx-site 2>/dev/null || true
apt-get update && apt-get install -y certbot
certbot certonly --standalone -d appsx.com.br -d www.appsx.com.br \
  --agree-tos -m admin@appsx.com.br --non-interactive
docker start appsx-site
```

Renovação automática:

```bash
echo '0 3 * * * root certbot renew --pre-hook "docker stop appsx-site" --post-hook "docker start appsx-site"' \
  > /etc/cron.d/certbot-appsx
```

## DNS

Aponte os registros A de `appsx.com.br` e `www.appsx.com.br` para `212.192.2.4` antes de emitir o certificado.
