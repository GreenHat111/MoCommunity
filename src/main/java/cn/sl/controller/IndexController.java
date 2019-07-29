package cn.sl.controller;

import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.PaginationDto;
import cn.sl.dto.QuestionDto;
import cn.sl.mapper.QuestionMapper;
import cn.sl.mapper.UserMapper;
import cn.sl.service.QuestionService;
import cn.sl.utils.LoginUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import java.util.List;

@Controller
public class IndexController {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private QuestionService questionService;


    @GetMapping("/")
    public String index(HttpServletRequest request, Model model,
                        @RequestParam(name = "page",defaultValue = "1") int page,
                        @RequestParam(name = "size",defaultValue = "5") int size) {
//        LoginUtils.checkLogin(request,userMapper);
//        User user = (User) request.getSession().getAttribute("user");
//        if (user == null) {
//            return "redirect:/";
//        }
        PaginationDto paginationDto = questionService.list(page,size);
        model.addAttribute("paginationDto", paginationDto);
        return "index";
    }


}

