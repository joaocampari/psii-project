package br.com.mackenzie.psiiproject.abstractcrud;

import java.io.Serializable;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


public abstract class AbstractController<T, ID> {
    
    public abstract AbstractService<T, ID> getService();
    
    @PostMapping()
    public T create(@RequestBody T entity) {
        return getService().save(entity);
    }
    
    @GetMapping("/{id}")
    public T getById(@PathVariable(value = "id") ID id) {
        return getService().findById(id);
    }
    
    @GetMapping()
    public List<T> getAll() {
        return getService().findAll();
    }
    
    @PutMapping("/{id}")
    public T update(@PathVariable(value = "id") ID id, @RequestBody T entity) {
        return getService().update(entity);
    }
    
    @DeleteMapping("{id}")
    public void delete(@PathVariable(value = "id") ID id) {
        getService().delete(id);
    }

}
