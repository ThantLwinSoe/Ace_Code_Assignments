package com.jdc.tls.entity;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.jdc.tls.gen.Gender;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(nullable = false)
	private String name;
	@Column(nullable = false)
	private int age;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Course course;
	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column(nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;
	@Column(nullable = false)
	private String address;
}
