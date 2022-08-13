docker container run \
-d \
-p 8080:80 \
--rm \
--name mycphp \
--mount type=bind,src=$(pwd)/src,dst=/var/www/html/src \
php:apache