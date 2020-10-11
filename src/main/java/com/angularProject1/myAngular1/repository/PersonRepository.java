package com.angularProject1.myAngular1.repository;

import com.angularProject1.myAngular1.entity.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Integer> {

    Person findByEmail(String email);
}
