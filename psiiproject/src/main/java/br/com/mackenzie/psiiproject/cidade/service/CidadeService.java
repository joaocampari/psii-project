package br.com.mackenzie.psiiproject.cidade.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
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

}
