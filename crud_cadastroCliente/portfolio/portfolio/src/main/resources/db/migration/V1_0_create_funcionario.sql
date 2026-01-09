CREATE TABLE funcionario (
  id_funcionario BIGINT(20) NOT NULL AUTO_INCREMENT,
  tx_nome VARCHAR(100) NOT NULL,
  tx_cargo VARCHAR(100) NOT NULL,
  int_idade INT NULL,
  PRIMARY KEY (`id_funcionario`));