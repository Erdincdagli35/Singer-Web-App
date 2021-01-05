package com.edsoft.SingerSpring.repository;

import com.edsoft.SingerSpring.model.Singer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SingerRepository extends JpaRepository<Singer,Long> {

}
