package br.com.mackenzie.psiiproject.cidade.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mackenzie.psiiproject.cidade.model.Cidade;

public interface CidadeRepository  extends JpaRepository<Cidade, Long>{

}
