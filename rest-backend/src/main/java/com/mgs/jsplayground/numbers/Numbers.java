package com.mgs.jsplayground.numbers;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@RestController
@EnableAutoConfiguration
public class Numbers {

    @RequestMapping("/numbers")
    public Collection<Integer> numbers() {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(12);
        numbers.add(3);
        numbers.add(55);
        return numbers;
    }

}
