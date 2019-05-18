package br.com.mackenzie.psiiproject.time.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractService;
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

}
