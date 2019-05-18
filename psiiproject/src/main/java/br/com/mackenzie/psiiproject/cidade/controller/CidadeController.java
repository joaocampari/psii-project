package br.com.mackenzie.psiiproject.cidade.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.cidade.enums.FilterEnum;
import br.com.mackenzie.psiiproject.cidade.model.Cidade;
import br.com.mackenzie.psiiproject.cidade.service.CidadeService;

@RestController
@RequestMapping("/rest/cidades")
@CrossOrigin
public class CidadeController extends AbstractController<Cidade, Long> {
    
    @Autowired
    private CidadeService cidadeService;

    @Override
    public CidadeService getService() {
        return cidadeService;
    }
    
    @GetMapping("/{filter}/{query}")
    public List<Cidade> getAllByFilter(@PathVariable(value = "filter") FilterEnum filter, @PathVariable(value = "query") String query) {
        return getService().findAllByFilter(filter, query);
    }

}
