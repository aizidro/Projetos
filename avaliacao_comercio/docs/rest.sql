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

CREATE TABLE categoria (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE restaurante (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    categoriaId INT NOT NULL ,
    endereco VARCHAR(60) NOT NULL,
    FOREIGN KEY (categoriaId) REFERENCES categoria(id)
);

CREATE TABLE cardapio (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    restauranteId INT NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    valor FLOAT(5,2) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurante(id)
);

CREATE TABLE avaliacao (
    restauranteId INT NOT NULL,
    clienteId INT NOT NULL,
    data DATE NOT NULL,
    nota DECIMAL (2,1) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    FOREIGN KEY (restauranteId) REFERENCES restaurante(id),
    FOREIGN KEY (clienteId) REFERENCES cliente(id)                                
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


INSERT INTO categoria VALUES 
(default, "doceria"),
(default, "restaurante"),
(default, "churrascaria"),
(default, "soverteria"),
(default, "hamburgueria"),
(default, "pizzaria");

INSERT INTO restaurante VALUES 
(default, "Vinici'os Restaurant",2, "Rua Pedreira, 00"),
(default, "Sodiê Doces",1, "R. Egas Bueno, 528 - Centro, Jaguariúna"),
(default, "Na Lenha Steak House",3, "Av. dos Ipês, 1690 - Estância das Flores, Jaguariúna"),
(default, "Oggi Sorvetes Jaguariúna",4, "R. Flor da Porcelana, 41 - Pedro Pina, Jaguariúna "),
(default, "Woody Burger",5, "R. Júlio Frank, 612 - Jardim Berlim, Jaguariúna"),
(default, "Dede Pizzaria ",6, " R. Júlio Frank, 813 - Centro, Jaguariúna");

INSERT INTO avaliacao VALUES
(2, 1, "2023/04/13", 10,"Mamma mia"),
(1,2, "2023/04/12", 8, "Otima Doceria"),
(3,3, "2023/03/09", 9, "Otima Churrascaria"),
(4,4, "2023/03/20",8, "Sorverteira Incrivel"),
(5,5, "2023/02/12",9, "Melhor Hamburguer da Região"),
(6,6, "2023/01/08",8, "Pizza Saborosa é aqui");

CREATE VIEW vw_restaurante AS
SELECT r.id AS id, r.nome AS restaurante, cat.nome AS categoria, AVG(a.nota) AS nota
FROM restaurante r
INNER JOIN categoria cat ON r.categoriaId = cat.id
LEFT JOIN avaliacao a ON r.id = a.restauranteId
GROUP BY r.id, cat.id;