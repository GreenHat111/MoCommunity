package cn.sl.controller;

import cn.sl.dto.PaginationDto;
import cn.sl.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;


@Controller
public class IndexController {


    @Autowired
    private QuestionService questionService;


    @GetMapping("/")
    public String index(HttpServletRequest request, Model model,
                        @RequestParam(name = "page",defaultValue = "1") int page,
                        @RequestParam(name = "size",defaultValue = "5") int size,
                        @RequestParam(name = "search", required = false) String search) {

        PaginationDto paginationDto = null;
        if (search==null || "".equals(search)) {
             paginationDto = questionService.list(page,size);
             model.addAttribute("search",null);
        }else {
            paginationDto = questionService.list(search,page,size);
            model.addAttribute("search",search);
        }

        model.addAttribute("paginationDto", paginationDto);
        return "index";
    }

}

