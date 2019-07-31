package cn.sl.controller;

import cn.sl.domain.Question;
import cn.sl.dto.CommentDto;
import cn.sl.dto.QuestionDto;
import cn.sl.enums.CommentTypeEnum;
import cn.sl.mapper.CommentMapper;
import cn.sl.service.CommentService;
import cn.sl.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Collections;
import java.util.List;
@Controller
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    private CommentService commentService;
    @GetMapping("/{id}")
    public String question(@PathVariable("id") Long id,
                           Model model) {
        questionService.addViewCount(id);
        QuestionDto questionDto = questionService.getById(id);
        List<CommentDto> commentDtos = commentService.listByQuestionId(questionDto.getId(), CommentTypeEnum.QUESTION.getType());
        List<Question> questions = questionService.selectRelated(questionDto);
        model.addAttribute("questionDto",questionDto);
        model.addAttribute("comments", commentDtos);
        model.addAttribute("relatedQuestions",questions);
        return "question";
    }
}
