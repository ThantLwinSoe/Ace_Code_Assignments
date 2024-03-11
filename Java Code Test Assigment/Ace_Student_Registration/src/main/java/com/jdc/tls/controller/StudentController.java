package com.jdc.tls.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jdc.tls.entity.Student;
import com.jdc.tls.service.StudentService;

@CrossOrigin("*")
@RestController
@RequestMapping("api")
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	@GetMapping("student/{id}")
	public Student getStudentById(@PathVariable("id") int id) {
		return service.studentById(id);
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteStudentById(@PathVariable("id") int id) {
		return service.deleteStudent(id);
	}
	
	@PutMapping("update/{id}")
	public String updateStudentById(
				@PathVariable("id") int id,
				@RequestBody Student stu
			) {
		return service.updateStudent(id,stu);
	}
	
	@PostMapping("create")
	public String createStudent(@RequestBody Student student) {
		return service.createStudent(student);
	}
	
	@GetMapping("all-student")
	public List<Student> getAllStudents() {
		return service.getAllStudents();
	}
}
