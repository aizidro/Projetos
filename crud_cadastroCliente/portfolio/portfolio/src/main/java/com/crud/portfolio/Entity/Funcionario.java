package com.crud.portfolio.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity //Classe Funcionario esta associada a uma tabela
@Data // esta associada ao Lombok é responsavel por  gerar automaticamente todos os nossos metdos, getters, setters
@AllArgsConstructor // gerar os construtores com parametros
@NoArgsConstructor // gerar os construtores sem parametros
@Table (name = "funcionario")
public class Funcionario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column (name = "id_funcionario")
    private Long id;

    @Column (name = "tx_nome")
    private String name;

    @Column (name = "tx_cargo")
    private String cargo;

    @Column (name = "int_idade")
    private int idade;
}

