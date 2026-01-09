package com.crud.portfolio.Controller;

import com.crud.portfolio.Entity.Funcionario;
import com.crud.portfolio.Repository.FuncionarioRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // é mais usado quando o projeto possui somente o backend e vai retornar dados de formato JSON para fazer a comunicação com o nosso post
@AllArgsConstructor

public class FuncionarioController {

    FuncionarioRepository funcionarioRepository;

    //METODOS DA CLASSE FUNCIONARIO CONTROLLER
    @GetMapping("/funcionario")
    public List<Funcionario> getAllFuncionario(){
        return funcionarioRepository.findAll();
    }

    @GetMapping("/funcionario/{id}")
    public Funcionario getFuncionarioById(@PathVariable Long id){
        return funcionarioRepository.findById(id).get();
    }

    @PostMapping("/funcionario")
    public Funcionario save(@RequestBody Funcionario funcionario){ // quando eu fizer uma requisição o spring vai mapear automaticamente o corpo da solicitacao HTTP que eu estou passando para o meu objeto
        return funcionarioRepository.save(funcionario);
    }
    @DeleteMapping("/funcionario/{id}")
    public void deleteFuncionario (@PathVariable Long id){
        funcionarioRepository.deleteById(id);
    }
}
