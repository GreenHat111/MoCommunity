package cn.sl.controller;

import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import cn.sl.mapper.UserMapper;
import cn.sl.service.QuestionService;
import cn.sl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 *  发布
 */

@Controller
public class PublishController {

    @Autowired
    private QuestionService questionService;
    @Autowired
    private UserService userService;

    @GetMapping("/publish/{id}")
    public String edit(@PathVariable(name = "id") Long id,
                       Model model) {
        Question question = questionService.getQuestionWithId(id);

//        model.addAttribute("title",question.getTitle());
//        model.addAttribute("description",question.getDescription());
//        model.addAttribute("tag",question.getTag());
//        model.addAttribute("id",question.getId());
        model.addAttribute("question",question);
        return "publish";
    }

    @GetMapping("/publish")
    public String publish(HttpServletRequest request,
                          Model model) {
        User user = getCurUser(request);
        if (user != null) {
            request.getSession().setAttribute("user", user);
            model.addAttribute("question",new Question());
            return "publish";
        }else{
            return "index";
        }
    }

    @PostMapping("/publish")
    public String doPublish(@RequestParam("title") String title,
                            @RequestParam("description") String description,
                            @RequestParam("tag") String tag,
                            @RequestParam(value = "id",required = false) Long id,
                            HttpServletRequest request,
                            Model model){

        if ("".equals(title) || "".equals(description) || "".equals(tag)) {
            model.addAttribute("question",new Question());
            return "publish";
        }

        User user = (User) request.getSession().getAttribute("user");
        if (user == null) return "redirect:/";
        Question question = new Question();
        question.setTag(tag);
        question.setTitle(title);
        question.setDescription(description);
        question.setCreator(user.getId());
        if (id != null && questionService.getQuestionWithId(id) != null) {
            question.setId(id);
            question.setGmtModified(System.currentTimeMillis());
            int update = questionService.updateQuestion(question);
            if (update != 1) {
                throw new CustomizeException(CustomErrorCode.QUESTION_NOT_FOUND);
            }
        }else {
            question.setGmtCreate(System.currentTimeMillis());
            question.setGmtModified(question.getGmtCreate());
            questionService.create(question);
        }
//        request.getSession().setAttribute("success","发布成功");
        return "redirect:/";
    }


    private User getCurUser(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie:cookies) {
            if ("token".equals(cookie.getName())){
                String token = cookie.getValue();
                User user = userService.findByToken(token);
                if (user != null) {
                    return user;
                }
                break;
            }
        }
        return null;
    }

}
