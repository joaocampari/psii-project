package br.com.mackenzie.psiiproject.carro.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.carro.model.Carro;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

    List<Carro> findByModeloIgnoreCaseContaining(String modelo);

    List<Carro> findByMarcaIgnoreCaseContaining(String marca);
    
    List<Carro> findByAno(Long ano);

    /**
     * Foi necessário utilizar ao menos uma query personalizada devido a requisito do professor.
     * O metodo abaixo daria para fazer utilizando Spring Data Proxies.
     * 
     * @param placa
     * @return  Lista de carros
     */
    @Query("Select c from Carro c where c.placa like %:placa%")
    List<Carro> findByPlacaIgnoreCaseContaining(@Param("placa") String placa);
}
