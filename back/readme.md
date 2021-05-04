# usage of API ou-est-mon-pain
- products : 
  - GET /products
  - GET /products/:id
  - POST /product
  - PUT /product
  - DELETE /product

- category : 
  - GET /categories
  - POST /category
  - PUT /category
  - DELETE /category

- account : 
  - POST /signup
  - POST /login
  - GET /account
  - PUT /account
  - DELETE /account

- order :
  - POST /order
  - GET /client-orders
  - GET /daily-orders


# Deploy sur Heroku
1. Create un compte sur Heroku
2. Create un new app sur Heroku
3.  Commencer générer => `heroku login`=> pour connecter avec GitHub 
4. `git init`=> pour initial le repo pour Heroku
5.  `heroku git:remote -a nom-du-new-app`=>pour créer le remote sur Heroku
6. `git push heroku main`
7. Maintenant Deploy base de donnés (https://www.heroku.com/postgres)=> clique sur `choose a plan`
8. free=> bash ’heroku addons:create heroku-postgresql:hobby-dev’
9. Trouver mon DATABASE_URL de mon projet Heroku=> setting=>Config Vars=> copie le : (comme si de sous)
postgres://ncizdapbivsymb:84145dad6e8b523d24b8d1a47e66a1e49d91749617aac9c042fc917a590b0d83@ec2-54-155-226-153.eu-west-1.compute.amazonaws.com:5432/dejhuvu2ntlpqo
9. Coller mon DATABASE_URL dans mon terminal avec `sqitch deploy db:pg://ncizdapbivsymb:84145dad6e8b523d24b8d1a47e66a1e49d91749617aac9c042fc917a590b0d83@ec2-54-155-226-153.eu-west-1.compute.amazonaws.com:5432/dejhuvu2ntlpqo`
10. Importer le donnes => dans l’afficher de import ajouter `process.env.DATABASE_URL` dans argument de new Client.


# Sqitch
versionning de database
Sqitch gérer les évolutions de format de base de donnée, mais pas pour insérer les donnés.

(https://github.com/O-clock-NN/data-sqitch-ocolis-jpruliere/blob/master/sqitch.md)

Configuration pour la premiere fois (2eme video vers 1 h du jour 4)
- `sqitch config -l`=>lister notre configuration
y- `sqitch config --user user.name ‘yourName’`
- `sqitch config --user user.email ‘yourEmail’`
- (Où est ce fichier de config sqitch? => dans un dossier caché`cd ~/.sqitch/`=>`ls`=> pour regarder quoi il y a dedans`cat sqitch.conf`)
- `sqitch config --user engine.pg.client psql`=>Configuration pour indiquer les migration exécuter par quel voie, ici , c’est psql

Commandes pour un projet Sqitch: 
1. `sqitch init nom-du-projet --engine pg --top-dir migrations`=>Init sqitch for un projet with name of projet, engine db
2. `sqitch add init -n “Creation des table”` 
=> `sqitch add nameOfMigration`//general, le premier est `init`, ensuite c’est `-n` avec commentaire
3. Repeter plein de fois étape 2 si besoin.
5. `createdb database-name`=> créer le db
6. `sqitch deploy db:pg:database-name` => deploy avec sqitch
7. `sqitch revert db:pg:database-name`=>revert avec sqitch
8. `sqitch status db:pg:database-name`=>lister les changements de status
9. `sqitch revert db:pg:database-name serial_unique`=> revert sur un état je souhaite de retourner, avec un nom de migration indiqué comme ’serial_unique.
