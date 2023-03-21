CREATE TABLE activities (
    id BIGSERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(32) NOT NULL,
    type VARCHAR(64) NOT NULL,
    organisator VARCHAR(32) NOT NULL,
    collaborator VARCHAR(32) NOT NULL
);