package com.angularProject1.myAngular1.service;

import com.angularProject1.myAngular1.entity.Person;
import com.angularProject1.myAngular1.repository.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonService {

    @Autowired
    private PersonRepository myRepo;

    public Person savePerson(Person personObj){
        return myRepo.save(personObj);
    }

    public List<Person> getPersons(){
        return myRepo.findAll();
    }

    public Person getPersonByid(int id){
        return myRepo.findById(id).orElse(null);
    }

    public Person getPersonByEmail(String email){
        return myRepo.findByEmail(email);
    }

    public String deletePerson(int id){
        myRepo.deleteById(id);
        return "Person deleted " + id;
    }

    public Person updatePersonInfo(Person updatePersonObj){
        Person findObj = myRepo.findById(updatePersonObj.getId()).orElse(null);
        findObj.setFirstName(updatePersonObj.getFirstName());
        findObj.setLastName(updatePersonObj.getLastName());
        findObj.setEmail(updatePersonObj.getEmail());
        findObj.setPassword(updatePersonObj.getPassword());
        findObj.setGender(updatePersonObj.getGender());
        return myRepo.save(findObj);
    }
}
