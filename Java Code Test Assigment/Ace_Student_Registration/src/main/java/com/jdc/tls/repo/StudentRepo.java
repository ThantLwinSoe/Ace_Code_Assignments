package com.jdc.tls.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jdc.tls.entity.Student;

public interface StudentRepo extends JpaRepository<Student, Integer>{

}
