package cn.sl.controller;

import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.mapper.QuestionMapper;
import cn.sl.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

/**
 *  发布
 */

@Controller
public class PublishController {

    @Autowired
    private QuestionMapper questionMapper;
    @Autowired
    private UserMapper userMapper;

    @GetMapping("/publish")
    public String publish(HttpServletRequest request) {
        User user = getCurUser(request);
        if (user != null) {
            request.getSession().setAttribute("user", user);
            return "publish";
        }else{
            return "index";
        }
    }

    @PostMapping("/publish")
    public String doPublish(@RequestParam("title") String title,
                            @RequestParam("description") String description,
                            @RequestParam("tag") String tag,
                            HttpServletRequest request){

        if ("".equals(title) || "".equals(description) || "".equals(tag)) return "publish";
        User user = getCurUser(request);
        if (user == null) return "index";
        Question question = new Question();
        question.setTag(tag);
        question.setTitle(title);
        question.setDescription(description);
        question.setCreator(user.getId());
        question.setGmtCreate(System.currentTimeMillis());
        question.setGmtModified(question.getGmtCreate());
        questionMapper.create(question);
//        request.getSession().setAttribute("success","发布成功");
        return "redirect:/";
    }


    private User getCurUser(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();
        for (Cookie cookie:cookies) {
            if ("token".equals(cookie.getName())){
                String token = cookie.getValue();
                User user = userMapper.findByToken(token);
                if (user != null) {
                    return user;
                }
                break;
            }
        }
        return null;
    }

}
