package br.com.mackenzie.psiiproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.mackenzie.psiiproject.model.Cidade;

public interface CidadeRepository  extends JpaRepository<Cidade, Long>{

}
