package br.com.mackenzie.psiiproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.model.Time;

@Repository
public interface TimeRepository extends JpaRepository<Time, Long>  {

}
