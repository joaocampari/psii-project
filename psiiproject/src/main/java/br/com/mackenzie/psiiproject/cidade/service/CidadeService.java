package br.com.mackenzie.psiiproject.cidade.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
import br.com.mackenzie.psiiproject.cidade.enums.FilterEnum;
import br.com.mackenzie.psiiproject.cidade.model.Cidade;
import br.com.mackenzie.psiiproject.cidade.repository.CidadeRepository;

@Service
public class CidadeService extends AbstractService<Cidade, Long> {
    
    @Autowired
    CidadeRepository cidadeRepository;

    @Override
    public CidadeRepository getRepository() {
        return cidadeRepository;
    }
    
    public List<Cidade> findAllByFilter(FilterEnum filter, String query) {
        switch (filter) {
            case NOME:
                return getRepository().findByNomeIgnoreCaseContaining(query);
            case ESTADO:
                return getRepository().findByEstadoIgnoreCaseContaining(query);
            case ID:
                return Arrays.asList(getRepository().findById(Long.parseLong(query)).get());
            case PAIS:
                return getRepository().findByPaisIgnoreCaseContaining(query);
            case POPULACAO:
                return getRepository().findByPopulacao(Long.parseLong(query));
        }

        return new ArrayList<>();
    }

}
