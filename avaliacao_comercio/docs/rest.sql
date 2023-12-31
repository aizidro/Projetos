DROP DATABASE IF EXISTS restaurantes;
CREATE DATABASE restaurantes CHARSET=UTF8 COLLATE utf8_general_ci;
USE restaurantes;

CREATE TABLE cliente (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    email VARCHAR(40) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    categoria VARCHAR(50) NOT NULL ,
    endereco VARCHAR(60) NOT NULL,
    telefone varchar(15) NOT NULL
);

CREATE TABLE avaliacao (
    restauranteId INT NOT NULL,
    data DATE NOT NULL,
    nota DECIMAL (2,1) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurante(id) ON DELETE CASCADE                                
);

INSERT INTO cliente VALUES 
(default,"andre izidro", "(11) 5555-1234", "usuario1@teste.com", "senha123"),
(default,"Vinicius Fechado", "(21) 5555-5678", "usuario2@teste.com", "senha456"),
(default,"Gustavo Png", "(47) 5555-9012", "usuario3@teste.com", "senha789"),
(default,"Samuel Profeta", "(83) 5555-3456", "usuario4@teste.com", "senhaabc"),
(default,"Camacho Guerreiro", "(92) 5555-7890", "usuario5@teste.com", "senhadef"),
(default,"Joao Bartolomeu", "(16) 5555-2345", "usuario6@teste.com", "senha1234"),
(default,"Fred Pedreiro", "(75) 5555-6789", "usuario7@teste.com", "senha5678"),
(default,"Paulo Ferraz", "(81) 5555-0123", "usuario8@teste.com", "senha90ab"),
(default,"Rordolfo marquinhos", "(54) 5555-4567", "usuario9@teste.com", "senhacdef"),
(default,"Relampago Marquinhos", "(27) 5555-8901", "usuario10@teste.com", "senhaghi");

INSERT INTO restaurante VALUES 
(default, "Vinici'os Restaurant","Restaurante", "Rua Pedreira, 00", "19993897665"),
(default, "Sodiê Doces","Doceria", "R. Egas Bueno, 528 - Centro, Jaguariúna", "19776264678"),
(default, "Na Lenha Steak House","Lanchonete", "Av. dos Ipês, 1690 - Estância das Flores, Jaguariúna", "19223465786"),
(default, "Oggi Sorvetes Jaguariúna","Sorveteria", "R. Flor da Porcelana, 41 - Pedro Pina, Jaguariúna", "19547658765 "),
(default, "Woody Burger","Hamburgueria", "R. Júlio Frank, 612 - Jardim Berlim, Jaguariúna", "19445336754"),
(default, "Dede Pizzaria ","Pizzaria", " R. Júlio Frank, 813 - Centro, Jaguariúna", "19776587689");

INSERT INTO avaliacao VALUES
(2, 1, "2023/04/13", "Mamma mia"),
(1,2, "2023/04/12", "Otima Doceria"),
(3,3, "2023/03/09", "Otima Churrascaria"),
(4,4, "2023/03/20", "Sorverteira Incrivel"),
(5,5, "2023/02/12", "Melhor Hamburguer da Região"),
(6,6, "2023/01/08", "Pizza Saborosa é aqui"),
(2,2, "2023/01/08", "Segunda vez foi melhor"),
(4,2, "2023/01/08", "Oh restaurante ruim");

CREATE VIEW vw_restaurante AS
SELECT r.id AS id, r.nome AS restaurante, AVG(a.nota) AS nota
FROM restaurante r
LEFT JOIN avaliacao a ON r.id = a.restauranteId
GROUP BY r.id

