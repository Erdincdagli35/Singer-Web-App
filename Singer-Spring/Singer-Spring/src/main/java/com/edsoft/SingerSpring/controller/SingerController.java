package com.edsoft.SingerSpring.controller;

import com.edsoft.SingerSpring.exception.ResourceNotFoundException;
import com.edsoft.SingerSpring.model.Singer;
import com.edsoft.SingerSpring.repository.SingerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/home")
public class SingerController {

    @Autowired
    private SingerRepository singerRepository;

    //get all singers
    @GetMapping("/singers")
    public List<Singer> getAllSinger(){
        return singerRepository.findAll();
    }

    //create singer rest api
    @PostMapping("/singers")
    public Singer createSinger(@RequestBody Singer singer){
        return singerRepository.save(singer);
    }

    //get singer by id rest api
    @GetMapping("/singers/{id}")
    public ResponseEntity<Singer> getSingerById(@PathVariable Long id){
        Singer singer = singerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Singer not exist with id : "+id));
        return ResponseEntity.ok(singer);
    }
    //update employee rest api
    @PutMapping("/singers/{id}")
    public ResponseEntity<Singer> updateSinger(@PathVariable Long id,@RequestBody Singer singerDetails){
        Singer singer = singerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Singer not exist with id : "+id));
        singer.setName(singerDetails.getName());
        singer.setGenre(singerDetails.getGenre());

        Singer updatedSinger = singerRepository.save(singer);
        return  ResponseEntity.ok(updatedSinger);

    }

    //delete singer rest api
    @DeleteMapping("/singer/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteSinger(@PathVariable Long id){
        Singer singer = singerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Singer not exist with id : "+id));
        singerRepository.delete(singer);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);

    }

}
