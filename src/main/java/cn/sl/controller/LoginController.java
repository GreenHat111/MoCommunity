package cn.sl.controller;

import cn.sl.domain.User;
import cn.sl.dto.UserDto;
import cn.sl.service.UserService;
import cn.sl.utils.MD5Utils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Controller
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestParam(name = "email") String email,
                        @RequestParam(name = "password") String password,
                        HttpServletRequest request,
                        HttpServletResponse response) {
        User user = userService.checkUser(email,MD5Utils.md5(password));
        if (user == null) {
            return "login/login";
        }
        String token = UUID.randomUUID().toString();
        userService.updateToken(user.getId(),token,System.currentTimeMillis());
        request.getSession().setAttribute("user",user);
        response.addCookie(new Cookie("token", token));
        return "redirect:/";
    }


    @PostMapping("/signup")
    public Object signup(@RequestBody UserDto userDto) {
        if (!isEmail(userDto.getMail())){
            return "login/regist";
        }
        User checkUser = userService.findByMail(userDto.getMail());
        if (checkUser != null) {
            return "login/regist";
        }
        User user = new User();
        String token = UUID.randomUUID().toString();
        user.setGmtModified(System.currentTimeMillis());
        user.setGmtModified(user.getGmtCreate());
        user.setToken(token);
        user.setName(userDto.getName());
        user.setMail(userDto.getMail());
        user.setPasswordMd5(MD5Utils.md5(userDto.getPassword()));
        System.out.println(user.toString());
        userService.insertUser(user);
        return "login/login";
    }


    private boolean isEmail(String string) {
        if (string == null)
            return false;
        String regEx1 = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
        Pattern p;
        Matcher m;
        p = Pattern.compile(regEx1);
        m = p.matcher(string);
        if (m.matches())
            return true;
        else
            return false;
    }

}
