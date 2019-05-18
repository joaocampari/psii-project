package br.com.mackenzie.psiiproject.time.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.time.model.Time;

@Repository
public interface TimeRepository extends JpaRepository<Time, Long> {

    List<Time> findByNomeIgnoreCaseContaining(String modelo);

    List<Time> findByAnoIgnoreCaseContaining(String marca);
    
    List<Time> findByEstadoIgnoreCaseContaining(String marca);

    /**
     * Foi necessário utilizar ao menos uma query personalizada devido a requisito do professor.
     * O metodo abaixo daria para fazer utilizando Spring Data Proxies.
     * 
     * @param placa
     * @return  Lista de Time fitrado pela cidade
     */
    @Query("Select c from Time c where c.cidade like %:cidade%")
    List<Time> findByCidadeIgnoreCaseContaining(@Param("cidade") String cidade);
}
