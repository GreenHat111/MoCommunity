package cn.sl.interceptor;

import cn.sl.domain.User;
import cn.sl.mapper.UserMapper;
import cn.sl.service.NotificationService;
import cn.sl.service.UserService;
import cn.sl.utils.LoginUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.List;

@Service
public class SessionInterceptor implements HandlerInterceptor {

    @Autowired
    private UserService userService;
    @Autowired
    private NotificationService notificationService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        User user = LoginUtils.checkLogin(request, userService);
        Integer notifyCount = 0;
        if (user!=null){
            notifyCount = notificationService.unreadCount(user.getId());
        }
        request.getSession().setAttribute("notifyCount",notifyCount);
//        response.addCookie(new Cookie("token","bb5d577e-5f2f-4b4c-9dba-7b48a1b56484"));
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }

}
