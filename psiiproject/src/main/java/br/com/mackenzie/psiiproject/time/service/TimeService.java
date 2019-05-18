package br.com.mackenzie.psiiproject.time.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
import br.com.mackenzie.psiiproject.time.enums.FilterEnum;
import br.com.mackenzie.psiiproject.time.model.Time;
import br.com.mackenzie.psiiproject.time.repository.TimeRepository;

@Service
public class TimeService extends AbstractService<Time, Long> {

    @Autowired
    private TimeRepository timeRepository;

    @Override
    public TimeRepository getRepository() {
        return timeRepository;
    }

    public List<Time> findAllByFilter(FilterEnum filter, String query) {
        switch (filter) {
            case NOME:
                return getRepository().findByNomeIgnoreCaseContaining(query);
            case ESTADO:
                return getRepository().findByEstadoIgnoreCaseContaining(query);
            case ID:
                return Arrays.asList(getRepository().findById(Long.parseLong(query)).get());
            case CIDADE:
                return getRepository().findByCidadeIgnoreCaseContaining(query);
            case ANO:
                return getRepository().findByAnoIgnoreCaseContaining(query);
        }

        return new ArrayList<>();
    }

}
