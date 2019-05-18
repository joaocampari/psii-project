package br.com.mackenzie.psiiproject.controller;

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

import br.com.mackenzie.psiiproject.model.Carro;
import br.com.mackenzie.psiiproject.repository.CarroRepository;

@RestController
@RequestMapping("/rest")
@CrossOrigin
public class CarroController {

    @Autowired
    CarroRepository carroRepository;
    
    @GetMapping("/carros")
    public List<Carro> getAll() {
        return carroRepository.findAll();
    }
    
    @GetMapping("/carros/{id}")
    public Optional<Carro> getById(@PathVariable(value = "id") Long id) {
        return carroRepository.findById(id);
    }
    
    @PostMapping("/carros")
    public Carro create(@Valid @RequestBody Carro entity) {
        return carroRepository.save(entity);
    }
    
    @PutMapping("/carros/{id}")
    public Carro update(@PathVariable(value = "id") Long noteId,
                                            @Valid @RequestBody Carro entity) {
        return carroRepository.save(entity);
    }
    
    @DeleteMapping("/carros/{id}")
    public ResponseEntity<?> delete(@PathVariable(value = "id") Long id) {

        carroRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
