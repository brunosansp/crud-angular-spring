package com.brunosansp.crudspring.controller;

import com.brunosansp.crudspring.model.Course;
import com.brunosansp.crudspring.repository.ICourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/courses")
@RestController
@AllArgsConstructor
public class CourseController {

    private final ICourseRepository courseRepository;

    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course create(@RequestBody Course course) {
        return courseRepository.save(course);
    }
}
