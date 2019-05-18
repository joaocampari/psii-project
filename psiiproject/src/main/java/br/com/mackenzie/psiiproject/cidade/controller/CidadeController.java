package br.com.mackenzie.psiiproject.cidade.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.cidade.model.Cidade;
import br.com.mackenzie.psiiproject.cidade.service.CidadeService;

@RequestMapping("/rest/cidades")
@RestController
@CrossOrigin
public class CidadeController extends AbstractController<Cidade, Long> {
    
    @Autowired
    private CidadeService cidadeService;

    @Override
    public CidadeService getService() {
        return cidadeService;
    }

}
