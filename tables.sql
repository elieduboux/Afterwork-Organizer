CREATE TABLE Collaborateur(
   id_collab SERIAL,
   nom VARCHAR(50),
   prénom VARCHAR(50),
   adresse VARCHAR(50),
   PRIMARY KEY(id_collab)
);

CREATE TABLE Organisateur(
   id_organisateur SERIAL,
   id_collab INT NOT NULL,
   PRIMARY KEY(id_organisateur),
   FOREIGN KEY(id_collab) REFERENCES Collaborateur(id_collab)
);

CREATE TABLE Type_loisir(
   id_type SERIAL,
   nom VARCHAR(50),
   PRIMARY KEY(id_type)
);

CREATE TABLE Jours(
   id_jours SERIAL,
   lundi Boolean,
   mardi Boolean,
   mercredi Boolean,
   jeudi Boolean,
   vendredi Boolean,
   samedi Boolean,
   dimanche Boolean,
   PRIMARY KEY(id_jours)
);

CREATE TABLE Activité(
   id_activité SERIAL,
   adresse VARCHAR(50),
   prix INT,
   nombre_de_place INT,
   quand DATE,
   description TEXT,
   id_jours INT NOT NULL,
   id_organisateur INT NOT NULL,
   PRIMARY KEY(id_activité),
   FOREIGN KEY(id_jours) REFERENCES Jours(id_jours),
   FOREIGN KEY(id_organisateur) REFERENCES Organisateur(id_organisateur)
);

CREATE TABLE Participe(
   id_collab SERIAL,
   id_activité SERIAL,
   PRIMARY KEY(id_collab, id_activité),
   FOREIGN KEY(id_collab) REFERENCES Collaborateur(id_collab),
   FOREIGN KEY(id_activité) REFERENCES Activité(id_activité)
);

CREATE TABLE préfèreT(
   id_collab SERIAL,
   id_type SERIAL,
   PRIMARY KEY(id_collab, id_type),
   FOREIGN KEY(id_collab) REFERENCES Collaborateur(id_collab),
   FOREIGN KEY(id_type) REFERENCES Type_loisir(id_type)
);

CREATE TABLE Asso_4(
   id_activité SERIAL,
   id_type SERIAL,
   PRIMARY KEY(id_activité, id_type),
   FOREIGN KEY(id_activité) REFERENCES Activité(id_activité),
   FOREIGN KEY(id_type) REFERENCES Type_loisir(id_type)
);

CREATE TABLE préfèreS(
   id_collab SERIAL,
   id_jours SERIAL,
   PRIMARY KEY(id_collab, id_jours),
   FOREIGN KEY(id_collab) REFERENCES Collaborateur(id_collab),
   FOREIGN KEY(id_jours) REFERENCES Jours(id_jours)
);
