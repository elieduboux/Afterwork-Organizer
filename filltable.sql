--remplissage teble type loisirs
INSERT INTO type_loisir (nom) 
VALUES ('sport'),
('bar'),
('restaurant'),
('escape game');

--rempl collab

INSERT INTO collaborateur (nom,prénom,adresse) 
VALUES ('jeanne','do','12 unknown street city'),
('xname','yprénom','zcity'),
('nico','jojo','vincennes');

--rempl jours
INSERT INTO jours (lundi,mardi,mercredi,jeudi,vendredi,samedi,dimanche)
VALUES('TRUE','FALSE','FALSE','FALSE','FALSE','FALSE','FALSE'),
('False','TRUE','FALSE','FALSE','FALSE','FALSE','FALSE'),
('False','FALSE','TRUE','FALSE','FALSE','FALSE','FALSE'),
('False','FALSE','FALSE','FALSE','TRUE','FALSE','FALSE');


--rempl orga
insert into organisateur (id_collab) values (2);

--rempl activités
insert into activité(adresse,prix,nombre_de_place,quand,description,id_jours,id_organisateur)
values ('12 rue esiee 93140 noisychamp',40,10,DATE '2023-03-12','1er activité',4,1);

insert into asso_4 (id_activité,id_type) values(1,2);
insert into préfèreS (id_collab,id_jours) values (1,4),(1,3),(2,2);

insert into préfèreT (id_collab,id_type) values (1,4),(1,3),(2,2);

insert into Participe (id_collab,id_activité) 
values(1,1),(2,1);