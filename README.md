```sh

# Criando os containers
docker compose up -d
# Criando as tabelas do serviço se coleções
docker exec -it pdi_collections_service bash -c "yarn prisma migrate deploy";
# Criando as tabelas do serviço de cartas
docker exec -it pdi_cards_service bash -c "yarn prisma migrate deploy";
# Criando as tabelas do serviço de usuários
docker exec -it pdi_users_service bash -c "yarn prisma migrate deploy";
```