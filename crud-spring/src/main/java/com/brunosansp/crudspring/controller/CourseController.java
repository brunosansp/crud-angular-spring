package com.brunosansp.crudspring.controller;

import com.brunosansp.crudspring.model.Course;
import com.brunosansp.crudspring.repository.ICourseRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/courses")
@RestController
@AllArgsConstructor
public class CourseController {

    private final ICourseRepository courseRepository;

    //public CourseController(ICourseRepository courseRepository) {
    //    this.courseRepository = courseRepository;
    //}

    // @RequestMapping(method = RequestMethod.GET)
    @GetMapping
    public @ResponseBody List<Course> list() {
        return courseRepository.findAll();
    }
}
