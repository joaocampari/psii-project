package br.com.mackenzie.psiiproject.carro.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
import br.com.mackenzie.psiiproject.carro.model.Carro;
import br.com.mackenzie.psiiproject.carro.repository.CarroRepository;

@Service
public class CarroService extends AbstractService<Carro, Long>{
    
    @Autowired
    CarroRepository carroRepository;

    @Override
    public CarroRepository getRepository() {
        return carroRepository;
    }
}
