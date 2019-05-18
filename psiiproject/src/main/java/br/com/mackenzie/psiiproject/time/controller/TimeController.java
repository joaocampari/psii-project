package br.com.mackenzie.psiiproject.time.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.time.model.Time;
import br.com.mackenzie.psiiproject.time.service.TimeService;

@RestController
@RequestMapping("/rest/times")
@CrossOrigin
public class TimeController extends AbstractController<Time, Long> {

    @Autowired
    private TimeService timeService;

    @Override
    public TimeService getService() {
        return timeService;
    }

}
