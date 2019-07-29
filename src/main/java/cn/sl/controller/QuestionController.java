package cn.sl.controller;

import cn.sl.dto.QuestionDto;
import cn.sl.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @GetMapping("/{id}")
    public String question(@PathVariable("id") int id,
                           Model model) {
        questionService.addViewCount(id);
        QuestionDto questionDto = questionService.getById(id);
        model.addAttribute("questionDto",questionDto);
        return "question";
    }
}
