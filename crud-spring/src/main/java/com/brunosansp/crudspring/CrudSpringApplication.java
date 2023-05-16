package com.brunosansp.crudspring;

import com.brunosansp.crudspring.model.Course;
import com.brunosansp.crudspring.repository.ICourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ICourseRepository courseRepository) {
		return args -> {
			courseRepository.deleteAll();

			Course newCourse = new Course();
			newCourse.setName("Angular + Spring");
			newCourse.setCategory("FullStack");

			courseRepository.save(newCourse);
		};
	}

}
