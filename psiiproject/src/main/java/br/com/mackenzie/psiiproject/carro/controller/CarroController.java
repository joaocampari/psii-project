package br.com.mackenzie.psiiproject.carro.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
import br.com.mackenzie.psiiproject.carro.model.Carro;
import br.com.mackenzie.psiiproject.carro.repository.CarroRepository;
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

}
