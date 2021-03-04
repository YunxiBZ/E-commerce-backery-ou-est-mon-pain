**CAHIER DES CHARGES**

**Présentation du projet :**

**Besoins/objectifs/fonctionnalités :**

Où est mon pain:
c’est une application destinée aux boulangeries leur permettant de présenter leurs produits (pains, gâteaux, sandwiches, spécialités.. etc.) en option, nous pouvons faire un tag sur la composition et les allergènes. L’application pourra aussi proposer la gestion des commandes pour les gâteaux d’anniversaire, les petits déjeuners/goûters d’entreprises, etc. L’application peut également mettre en avant les promotions et événements actuels et à venir (saint-valentin, bûches de Noël, etc.) et enfin elle peut proposer un style d’abonnement à des tarifs préférentiels, etc.
Côté client, nous ferons un site responsive, ils peuvent s’inscrire sur l’application pour avoir le droit de commander où de s’abonner aux nouvelles des boulangeries, etc. Les clients peuvent également se balader dans la “boulangerie” pour regarder ce qu’elle propose aujourd’hui, où ce week-end par exemple.

**Produit minimum viable (MVP) :**

Vitrine de produits (nom/image/prix) :
Page d’accueil
Page produits
Filtres catégories / allergènes
Page de chaque produit

Page de comptes (admin/utilisateurs) :
Page de signup
Page de login
Logout (fonctionnalité)
Page de compte
Historique de commandes

Page admin :
Ajout, suppression et modification des produits
Ajout, suppression et modification des catégories
Gestion et historique des commandes
Passage commande
Page panier
Ajout et suppression des produits avec le panier
Validation de commande
Autre
Formulaire
Page présentant les devs
Page 404 et 403

**Evolutions potentielles**

Ajout d’avis sur les produits
Barre de recherche de produit
Bannir un client
Gestion des stocks
Filtrage par jour
Ajout paiement

**Rôles :**

    Product Owner : Yunxi
    Git master : Jean-Baptiste
    Scrum Master : Antoine
    Lead front : Theo
    Lead back : Jean-Baptiste

**Technos :**

-React (nous permet une expérience utilisateur fluide et une app interactive)
-Redux (un système de gestion de state, utile pour permettre à l’application de grossir de façon ordonnée et claire)
-Axios (les query sont plus jolies que fetch)
-nodeJs/Express (Langage back end)
-postgreSQL (notre sgbd de prédilection)
-Sequelize (Gestion des requêtes SQL)
-Eslint (nous permet de suivre un ensemble de règles de développement pré-définies)
-SASS (notre langage de style)
-webpack (bundler)
-babel (transpilation en ES5)
-b-crypt (hashage password)
-email-validator (validation des emails clients)

**Définition cible du projet :**

Entreprise et Grand public

**Navigateurs disponibles :**

Google Chrome
Mozilla Firefox
Microsoft Edge
Safari
Opera
Samsung Internet

**Arborescence du site :**

img

**Views**

route accueil ( présentation du shop) ‘/’
route vitrine (listings des produits/prix...) ‘/products’
route produit (produit à l’unité) ‘/products/:id’
route équipe dev ‘/dev’
route login ‘/login’
route signup ‘/signup’
route account (modif du profil/liste des précédentes commandes) ‘/account’
route admin ‘/admin’
route formulaire ‘/contact’
route panier (checkout) ‘/cart’
route commande journalière (‘admin/current-orders’)
route toutes les commandes (‘admin/order-history’)

**User story:**

User Type/En tant que
Volonté/Je veux pouvoir
Action/Dans le but de

Visiteur
Je veux pouvoir consulter les produits
Accéder à la vitrine produits

Visiteur
pouvoir me créer un compte
de devenir un utilisateur

Visiteur
pouvoir me logger
Pour me logger

Visiteur
Je veux pouvoir consulter une unité de produit
Afin de voir les caractéristiques du produit

Visiteur
Je veux pouvoir accéder aux avis d’un produit
Afin de voir le score donné au produit

Visiteur
Je veux pouvoir accéder aux mentions légales du site
Afin de me renseigner sur les conditions du site

Visiteur
Accéder au formulaire
Afin de contacter la boutique

Utilisateur
Ajouter un produit au panier
le réserver/commander

Utilisateur
me déconnecter
afin de me déconnecter

Utilisateur
modifier mes informations persos
afin de changer mes infos persos

Utilisateur
accéder à mes infos persos
de les consulter

Utilisateur
Accéder à mon historique d’achat
dans le but de consulter mes commandes passées

Utilisateur
Accéder à mon panier
consulter mon panier

Utilisateur
Valider le panier
passer commande

Utilisateur
Donner une note
Donner une note à un produit

Admin
accéder à la page admin
gérer la partie admin

Admin
modifier un produit (quantité, nom, prix)
d’en changer le contenu

Admin
Supprimer un produit
pour l’enlever de la boutique

Admin
Ajouter un produit
le créer en boutique

Admin
Modifier une catégorie
en changer le contenu

Admin
Supprimer une catégorie
la supprimer de la boutique

Admin
Accéder à toutes les commandes
consulter les commandes effectuées

Admin
Ajouter une catégorie
la créer en boutique

Admin
Associer un produit à une catégorie
de créer un groupe de produits

Admin
consulter les commandes du jour
d’accéder aux commandes clients du jour

Admin
Bannir un client
de lui rendre les commandes inaccessibles

**Wireframe:**

https://whimsical.com/ou-est-mon-pain-FhqnmJ5w2At3Pz7SRmhW8M

**Outil de gestion :**

trello de base :
https://trello.com/b/rcdbME6Z/o%C3%B9-est-mon-pain

trello sprint 1 :
https://trello.com/invite/b/0AGg0LN5/01e1b103bbde23413090dbad750c7f90/sprint-1

**Routes API (baseurl/api)**

GET
get all categories (/categories)
get all products (/products)
get product by id/name (/product/:id)
get commandes journalière (/daily-orders)
get historique des commandes (/orders)
get commands by client (/client-orders)

POST
post signup (/sign-up)
post login (/login)
post ajout de produit (/product)
post ajout de catégorie (/category)
post note produit (/product-score)
post commande (/order)
post formulaire contact (/contact)

PUT
post modification user (/user)
put banned user (/ban-user)
put modifier produit (/product)
put modifier catégorie (/category)

DELETE
delete produit (/product)
delete catégorie (/category)

**MCD :** img

**MLD :**

CATEGORIE (id, label, image)
PRODUIT(id, titre, description, prix, image)
ALLERGÈNE (id, nom, couleur)
AVIS (id, note, #produit_id, #compte_id)
COMMANDE (id, date_reception, date_creation, etat, #compte_id)
STOCK (id, jour_semaine, quantité, #produit_id)
COMPTE (id, email, nom, mot_de_passe, prénom, téléphone, rôle)
APPARTIENT (id, #categorie_id, #produit_id)
CONTIENT (id, #produit_id, #allergene_id)
EST SENSIBLE (id, #allergene_id, #compte_id)
EST DANS (id, #produit_id, #commande_id)

**Dictionnaire des données:**

Nom
Description
Type
Commentaire
Entité

Label
Label de la catégorie
texte
NOT NULL
Catégorie

Image
Image de la catégorie
texte
NOT NULL
Catégorie

Titre
Titre du produit
texte
NOT NULL
Produit

Description
Description du produit
texte
NOT NULL
Produit

Prix
Prix du produit
float
NOT NULL
Produit

Image
Image du produit
texte
NOT NULL
Produit

Nom
Nom de l’allergène
texte
NOT NULL
Allergène

Couleur
Couleur (hexadécimale) de la rubrique allergène
texte
NOT NULL
Allergène

Note
Nombre d’étoiles
integer

- Avis

Date_reception
Jour de récupération de la commande
date
YYYY-MM-DD
NOT NULL
Commande

Date_creation
Jour de création de la commande
date
YYYY-MM-DD
DEFAULT now()
Commande

État
État de la commande
texte
DEFAULT “enregistré”
Commande

Jour_semaine
Jour de la semaine
date
Day
NOT NULL
Stock

Quantité
Quantité de stock d’un produit
integer
NOT NULL
DEFAULT ‘0’
Stock

Email
email de l’utilisateur
texte
email NOT NULL
Compte

Nom
Nom de l’utilisateur
texte
NOT NULL
Compte

Prénom
Prénom de l’utilisateur
texte
NOT NULL
Compte

Téléphone
Téléphone de l’utilisateur
integer
téléphone
Compte

Rôle
rôle de l’utilisateur
texte
NOT NULL
DEFAULT “user”
Compte

mot_de_passe
mot de passe de l’utilisateur
texte
NOT NULL
Compte

**Mocodo :**

AVOIR, 11 COMMANDE, 0N COMPTE
COMMANDE: \_date_reception, date_creation, etat
EST_DANS, 1N COMMANDE, 0N PRODUIT
:
CATEGORIE: \_label, image
APPARTIENT, 1N CATEGORIE, 1N PRODUIT

COMPTE : \_email, nom, prenom, mot_de_passe, telephone, role
DONNE, 11 AVIS, 0N COMPTE
AVIS: \_note
DISPOSE, ON PRODUIT, 11 AVIS
PRODUIT: \_titre, description, prix, image

EST_SENSIBLE_A, 0N ALLERGENE, ON COMPTE
ALLERGENE: \_nom, couleur
CONTIENT, 0N PRODUIT, 0N ALLERGENE
:
STOCK: \_jour_semaine, quantité
A_UNE_QUANTITE, 1N PRODUIT, 11 STOCK

**Charte graphique:**

img

**Logo:**

img

**Designs possibles :**

img

**Couleur proposé:**

via Coolors : img

**Polices possibles :**
via Dafont (4 premières) puis GoogleFont pour une meilleure compatibilité avec les différents navigateurs.

https://www.dafont.com/fr/cream-cake.font
https://www.dafont.com/fr/hello-valentica.font
https://www.dafont.com/fr/rachella-script.font?l[]=1
https://www.dafont.com/fr/miama.font?l[]=1

On part sur la Ubuntu pour l’instant
https://fonts.google.com/specimen/Ubuntu?preview.text=Products&preview.text_type=custom

**Lien du repo Github:**

https://github.com/O-clock-Nemo/projet-ou-est-mon-pain/tree/theo
