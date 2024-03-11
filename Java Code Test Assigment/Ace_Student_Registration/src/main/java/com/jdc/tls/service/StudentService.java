package com.jdc.tls.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jdc.tls.entity.Student;
import com.jdc.tls.repo.StudentRepo;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepo repo;
	
	
	public List<Student> getAllStudents() {
		return repo.findAll();
	}
	
	public String createStudent(Student student	) {
		
		repo.save(student);
		
		return "Student Created!!!";
	}

	public Student studentById(int id) {
		
		return repo.findById(id).get();
	}

	public String updateStudent(int id, Student stu) {
		
		var student = studentById(id);
		
		student.setName(stu.getName());
		student.setGender(stu.getGender());
		student.setDate(stu.getDate());
		student.setCourse(stu.getCourse());
		student.setAge(stu.getAge());
		student.setAddress(stu.getAddress());
		
		repo.saveAndFlush(student);
		
		return "Student Updated!!!";
	}

	public String deleteStudent(int id) {
		repo.deleteById(id);
		return "Student Deleted!!!";
	}

}
