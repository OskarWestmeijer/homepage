# homepage

My homepage, including deployment of other services.

````
docker-compose up -d



server {
    listen 443 default_server ssl http2;
    listen [::]:443 ssl http2;

    root /usr/share/nginx/html;
    index index.html index.htm;

    server_name oskarwestmeijer.com;

    ssl_certificate /etc/nginx/ssl/live/example.org/fullchain.pem;
    ssl_certificate_key /etc/nginx/ssl/live/example.org/privkey.pem;

    location / {
        try_files $uri $uri/ =404;
    }

    location /api {
        proxy_pass http://app:8080;
        proxy_set_header Host $host:$server_port;
        proxy_set_header X-Forwarded-Host $server_name;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
````
