package br.com.mackenzie.psiiproject.carro.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
import br.com.mackenzie.psiiproject.carro.enums.FilterEnum;
import br.com.mackenzie.psiiproject.carro.model.Carro;
import br.com.mackenzie.psiiproject.carro.repository.CarroRepository;

@Service
public class CarroService extends AbstractService<Carro, Long> {

    @Autowired
    CarroRepository carroRepository;

    @Override
    public CarroRepository getRepository() {
        return carroRepository;
    }
    
    public List<Carro> findAllByFilter(FilterEnum filter, String query) {
        switch (filter) {
            case MODELO:
                return getRepository().findByModeloIgnoreCaseContaining(query);
            case MARCA:
                return getRepository().findByMarcaIgnoreCaseContaining(query);
            case ID:
                return Arrays.asList(getRepository().findById(Long.parseLong(query)).get());
            case PLACA:
                return getRepository().findByPlacaIgnoreCaseContaining(query);
        }

        return new ArrayList<>();
    }

}
