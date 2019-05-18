package br.com.mackenzie.psiiproject.cidade.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.mackenzie.psiiproject.cidade.model.Cidade;

public interface CidadeRepository  extends JpaRepository<Cidade, Long> {
    
    List<Cidade> findByNomeIgnoreCaseContaining(String nome);

    List<Cidade> findByPaisIgnoreCaseContaining(String pais);
    
    List<Cidade> findByEstadoIgnoreCaseContaining(String estado);

    /**
     * Foi necessário utilizar ao menos uma query personalizada devido a requisito do professor.
     * O metodo abaixo daria para fazer utilizando Spring Data Proxies.
     * 
     * @param placa
     * @return Lista de cidade fitrado pela populacao
     */
    @Query("Select c from Cidade c where c.populacao like %:populacao%")
    List<Cidade> findByPopulacaoIgnoreCaseContaining(@Param("populacao") String populacao);

}
