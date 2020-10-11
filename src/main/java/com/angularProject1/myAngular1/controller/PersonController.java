package com.angularProject1.myAngular1.controller;

import com.angularProject1.myAngular1.entity.Person;
import com.angularProject1.myAngular1.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.List;

@RestController
public class PersonController {
    @Autowired
    private PersonService myService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/savePerson")
    public Person savePersonMethd(@RequestBody Person personObj){
        return myService.savePerson(personObj);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/GetPersons")
    public List<Person> getPersons(){
        return myService.getPersons();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/GetPerson/{id}")
    public Person getPersonById(@PathVariable int id){
        return myService.getPersonByid(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/GetPersonByEmail/{email}")
    public Person getPersonByMail(@PathVariable String email){
        return myService.getPersonByEmail(email);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @DeleteMapping("/deletePerson/{id}")
    public String deletePersonById(@PathVariable int id){
        return myService.deletePerson(id);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping("/updatePerson")
    public Person updatePerson(@RequestBody Person personObj){
        return myService.updatePersonInfo(personObj);
    }
}
