create table user_music(
id VARCHAR(255) NOT NULL PRIMARY KEY,
email VARCHAR(255) NOT NULL,
name VARCHAR(255) NOT NULL,
nickname VARCHAR(255) NOT NULL,
password VARCHAR(255) NOT NULL,
role ENUM('ADMIN','NORMAL') DEFAULT 'NORMAL'
);

create table musics_backend(
id VARCHAR(255) NOT NULL PRIMARY KEY,
 title VARCHAR(255) NOT NULL,
  author VARCHAR(255) NOT NULL,
  date  Date,
  file VARCHAR(255) NOT NULL,
  album VARCHAR(255) NOT NULL,
  id_user VARCHAR(255) NOT NULL,
  FOREIGN KEY (id_user) references user_music(id)
);

CREATE TABLE genres(
id_music VARCHAR(255) NOT NULL,
genre VARCHAR(255) NOT NULL,
FOREIGN KEY(id_music) REFERENCES musics_backend(id)
);