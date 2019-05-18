package br.com.mackenzie.psiiproject.time.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.mackenzie.psiiproject.time.model.Time;

@Repository
public interface TimeRepository extends JpaRepository<Time, Long>  {

}
