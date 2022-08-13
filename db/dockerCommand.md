$ docker image build            \
    --tag my_mysql    \
    --mount type=volume,src=mysql-db-volume,dst=/var/lib/mysql
    --network docker-practice-network \
    --network-alias db  \
    .


$ docker volume create \
    --name mysql-db-volume

$ docker network create \
    docker-practice-network
