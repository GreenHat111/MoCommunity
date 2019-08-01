package cn.sl.controller;

import cn.sl.domain.Notification;
import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.PaginationDto;
import cn.sl.mapper.UserMapper;
import cn.sl.service.NotificationService;
import cn.sl.service.QuestionService;
import cn.sl.service.UserService;
import cn.sl.utils.LoginUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.util.List;

@RequestMapping("/profile")
@Controller
public class ProfileController {

    @Autowired
    private UserService userService;
    @Autowired
    private QuestionService questionService;
    @Autowired
    private NotificationService notificationService;
    @GetMapping("/{action}")
    public String profile(@PathVariable(name = "action") String action,
                          @RequestParam(name = "page", defaultValue = "1") int page,
                          @RequestParam(name = "size", defaultValue = "5") int size,
                          Model model,
                          HttpServletRequest request) {
        User user = LoginUtils.checkLogin(request, userService);
        if (user == null) {
            return "redirect:/";
        }
        Integer unReadCount = notificationService.unreadCount(user.getId());
        model.addAttribute("unreadCount", unReadCount);
        if ("questions".equals(action)){
            PaginationDto paginationDto = questionService.list(user.getId(),page,size);
            model.addAttribute("pagination", paginationDto);
            model.addAttribute("section","questions");
            model.addAttribute("sectionName","我的提问");
        }else if ("replies".equals(action)) {
            PaginationDto paginationDto = notificationService.list(user.getId(),page,size);
            model.addAttribute("pagination", paginationDto);
            model.addAttribute("section","replies");
            model.addAttribute("sectionName","最新回复");
        }
        return "profile";
    }


}
