package br.com.mackenzie.psiiproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.model.Carro;

@Repository
public interface CarroRepository  extends JpaRepository<Carro, Long> {

}
