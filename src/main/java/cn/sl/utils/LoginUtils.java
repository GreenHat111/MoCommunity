package cn.sl.utils;

import cn.sl.domain.User;
import cn.sl.service.UserService;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

public class LoginUtils {
    public static User checkLogin(HttpServletRequest request, UserService userService) {
        Cookie[] cookies = request.getCookies();
        if (cookies == null) return null;
        for (Cookie cookie:cookies) {
            if ("token".equals(cookie.getName())){
                String token = cookie.getValue();
                User user = userService.findByToken(token);
                if (user != null) {
                    request.getSession().setAttribute("user",user);
                    return user;
                }
                break;
            }
        }
        return null;
    }
}
