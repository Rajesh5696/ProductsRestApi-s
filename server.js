server {
    listen 80;

    server_name ec2-52-66-166-185.ap-south-1.compute.amazonaws.com;

    location / {
        proxy_pass http://ec2-52-66-166-185.ap-south-1.compute.amazonaws.com:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
