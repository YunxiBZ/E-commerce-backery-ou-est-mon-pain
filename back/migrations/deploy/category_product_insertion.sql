-- Deploy ou-est-mon-pain:category_product_insertion to pg

BEGIN;

INSERT INTO category ("label", "image") VALUES 
    ('Patisserie', 'url bon gateau'),
    ('Viennoiserie', 'chocolatine en force'),
    ('Boulangerie', 'du bon pain de chez nous'),
    ('Bonbon', 'oui il y en a toujours');

INSERT INTO product ("title", "description", "price", "image") VALUES 
    ('Baguette', 'Le pain historique', 1, 'url baguette'),
    ('Croissant', 'La viennoiserie simple', 0.80, 'url croissant'),
    ('Chocolatine', 'La viennoiserie du Sud Ouest', 0.95, 'url chocolatine'),
    ('Fraisier', 'Idéal pour la St Valentin', 13.95, 'url fraisier');

INSERT INTO product_category ("product_id", "category_id") VALUES 
    (1,3), (2,2), (3,2), (4,1);

COMMIT;
