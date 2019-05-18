package br.com.mackenzie.psiiproject.abstractcrud;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Classe abstrata para os serviços
 *
 * @param <T>
 * @param <ID>
 */
public abstract class AbstractService<T, ID> {

    public abstract JpaRepository<T, ID> getRepository();

    public List<T> findAll() {
        return getRepository().findAll();
    }

    public T findById(ID id) {
        Optional<T> entityOption = getRepository().findById(id);

        if (entityOption.isPresent()) {
            return entityOption.get();
        }

        return null;
    }

    public T save(T entity) {
        return getRepository().save(entity);
    }

    public T update(T entity) {
        return getRepository().save(entity);
    }

    public void delete(ID id) {
        getRepository().deleteById(id);
    }

}
