package br.com.mackenzie.psiiproject.carro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.carro.model.Carro;

@Repository
public interface CarroRepository  extends JpaRepository<Carro, Long> {

    
    List<Carro> findByModelo(String modelo);
    
    List<Carro> findByMarca(String marca);
    
    List<Carro> findById(String id);
    
    List<Carro> findByPlaca(String placa);
}
