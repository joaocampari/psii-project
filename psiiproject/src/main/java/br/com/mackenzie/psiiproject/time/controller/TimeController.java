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

import br.com.mackenzie.psiiproject.model.Time;
import br.com.mackenzie.psiiproject.repository.TimeRepository;

@RestController
@RequestMapping("/rest")
@CrossOrigin
public class TimeController {

    @Autowired
    private TimeRepository timeRepository;

    @GetMapping("/times")
    public List<Time> getAll() {
        return timeRepository.findAll();
    }

    @GetMapping("/times/{id}")
    public Optional<Time> getById(@PathVariable(value = "id") Long id) {
        return timeRepository.findById(id);
    }

    @PostMapping("/times")
    public Time create(@Valid @RequestBody Time entity) {
        return timeRepository.save(entity);
    }

    @PutMapping("/times/{id}")
    public Time update(@PathVariable(value = "id") Long id, @Valid @RequestBody Time entity) {

        return timeRepository.save(entity);
    }

    @DeleteMapping("/times/{id}")
    public ResponseEntity< ? > delete(@PathVariable(value = "id") Long id) {

        timeRepository.deleteById(id);

        return ResponseEntity.ok().build();
    }

}
