package br.com.mackenzie.psiiproject.time.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.mackenzie.psiiproject.abstractcrud.AbstractController;
import br.com.mackenzie.psiiproject.time.enums.FilterEnum;
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
    
    @GetMapping("/{filter}/{query}")
    public List<Time> getAllByFilter(@PathVariable(value = "filter") FilterEnum filter, @PathVariable(value = "query") String query) {
        return getService().findAllByFilter(filter, query);
    }

}
