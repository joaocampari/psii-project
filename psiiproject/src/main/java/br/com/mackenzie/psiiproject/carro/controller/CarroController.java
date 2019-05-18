package br.com.mackenzie.psiiproject.carro.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.carro.enums.FilterEnum;
import br.com.mackenzie.psiiproject.carro.model.Carro;
import br.com.mackenzie.psiiproject.carro.service.CarroService;

@RestController
@RequestMapping("/rest/carros")
@CrossOrigin
public class CarroController extends AbstractController<Carro, Long>{
    
    @Autowired
    private CarroService carroService;

    @Override
    public CarroService getService() {
        return carroService;
    }
    
    @GetMapping("/{filter}/{query}")
    public List<Carro> getAllByFilter(@PathVariable(value = "filter") FilterEnum filter, @PathVariable(value = "query") String query) {
        return getService().findAllByFilter(filter, query);
    }
    
    

}
