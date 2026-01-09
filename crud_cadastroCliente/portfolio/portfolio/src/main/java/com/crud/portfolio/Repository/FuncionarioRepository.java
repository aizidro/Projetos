package com.crud.portfolio.Repository;

import com.crud.portfolio.Entity.Funcionario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FuncionarioRepository extends JpaRepository <Funcionario, Long> {

}
