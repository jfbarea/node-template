# Guía de instalación #

Para instalar este repositorio en Ubuntu hay que seguir los siguientes pasos

### Instalar Git ###
Git es el software de control de versiones que se usa para el desarrollo de la herramienta. Para instalarlo, seguir [ésta guía](https://git-scm.com/book/es/v1/Empezando-Instalando-Git#Instalando-en-Linux).

### Instalar NodeJS ###
Se va a usar NodeJS como servidor. Para instalar esta herramienta, se puede seguir [este artículo](https://carlosazaustre.es/blog/como-instalar-node-js-en-ubuntu/).

## Instalar MongoDB

Como base de datos MongoDB, se puede instalar siguiendo [este artículo](https://docs.mongodb.com/v3.2/tutorial/install-mongodb-on-ubuntu/).

### Instalar Nginx ###
Simplemente instalar vía gestor de paquetes:

```
sudo apt-get update
sudo apt-get install nginx
```
### Configurar Nginx
Cambiar el contenido de `/etc/nginx/sites-available/default` por lo siguiente:
```
server {
        listen 80;
        listen [::]:80 default_server ipv6only=on;
        return 301 https://$host$request_uri;
}

server {  
  listen 0.0.0.0:443;

  server_name localhost;
  ssl on;
  # Use certificate and key provided
  ssl_certificate /home/certs/cert.pem;
  ssl_certificate_key /home/certs/key.pem;
  ssl_session_timeout 5m;
  location / {
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-NginX-Proxy true;
                proxy_pass http://localhost:3000/;
                proxy_ssl_session_reuse off;
                proxy_set_header Host $http_host;
                proxy_cache_bypass $http_upgrade;
		proxy_redirect off;
  }
}

```
Además, también querremos bloquear el puerto donde corre el generador, así que, para ello introduciremos el siguiente comando en la terminal

`sudo iptables -A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT && sudo iptables -A INPUT -p tcp --destination-port 3000 -j DROP`

### Rotación de logs
Para que los logs roten correctamente hay que añadir al archivo `/etc/logrotate.conf`
```
/var/log/cydecan/*.log {
    rotate 5
    size 100M
}
```
### Software adicional

La máquina necesitará tener instalado el compresor de zip
`sudo apt-get install zip`


### Directorios adicionales adicionales
`sudo mkdir /home/temp && sudo chmod -R 777 /home/temp`
`sudo mkdir /var/log/cydecan && sudo chmod -R 777 /var/log/cydecan`
### Descargar código fuente ###
Para descargar el código fuente del paquete, se usará el sistema de control de versiones Git. Para ello se ejecuta el siguiente comando en el directorio donde se quiera descargar.

`git clone git@bitbucket.org:jfcobarea/scene-generator-back.git back`

### Instalar posibles dependencias ###
Para ello se usa el instalador de paquetes de node de la siguiente manera:

`npm install`

### Arrancar el servidor ###
Simplemente usando el comando:

`npm start`

Para arrancarlo 

### NOTA ###

Es importante que el directorio que aloja este proyecto se encuentre en el mismo nivel que el del proyecto de [front-end](https://bitbucket.org/jfcobarea/scene-generator-back)

### CERTIFICADO HTTPS ###
Hay que colocar un certificado HTTPS válido en el directorio `/home/certs`. Para crear los certificados, en linux se ha usado el siguiente comando en consola:

```
$ sudo mkdir /home/certs
$ cd /home/certs
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days XXX
```

Para evitar que el servidor de nginx falle al reiniciar la máquina, habría que convertir la clave en una rsa con los siguientes comandos:

```
$ sudo cat key.pem
$ sudo openssl rsa -in key.pem -out newkey.pem
$ rm key.pem
$ mv newkey.pem key.pem
```
