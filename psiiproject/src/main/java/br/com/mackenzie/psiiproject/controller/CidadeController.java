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

import br.com.mackenzie.psiiproject.model.Cidade;
import br.com.mackenzie.psiiproject.repository.CidadeRepository;

@RequestMapping("/rest")
@RestController
@CrossOrigin
public class CidadeController {

    @Autowired
    CidadeRepository cidadeRepository;

    @GetMapping("/cidades")
    public List<Cidade> getAll() {
        return cidadeRepository.findAll();
    }

    @GetMapping("/cidades/{id}")
    public Optional<Cidade> getById(@PathVariable(value = "id") Long id) {
        return cidadeRepository.findById(id);
    }

    @PostMapping("/cidades")
    public Cidade create(@Valid @RequestBody Cidade entity) {
        return cidadeRepository.save(entity);
    }

    @PutMapping("/cidades/{id}")
    public Cidade update(@PathVariable(value = "id") Long noteId, @Valid @RequestBody Cidade entity) {
        return cidadeRepository.save(entity);
    }

    @DeleteMapping("/cidades/{id}")
    public ResponseEntity< ? > delete(@PathVariable(value = "id") Long id) {

        cidadeRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
