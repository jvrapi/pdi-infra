```sh

# Criando os containers
docker compose up -d
# Criando as tabelas
docker exec -it collections bash -c "yarn prisma migrate deploy";

docker exec -it cards bash -c "yarn prisma migrate deploy";

```