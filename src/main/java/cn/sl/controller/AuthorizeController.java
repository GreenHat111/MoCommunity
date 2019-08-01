package cn.sl.controller;

import cn.sl.domain.User;
import cn.sl.dto.AccessTokenDto;
import cn.sl.dto.GithubUser;
import cn.sl.provider.GithubProvider;
import cn.sl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.UUID;

@Controller
public class AuthorizeController {

    @Autowired
    private GithubProvider githubProvider;
    @Autowired
    private UserService userService;

    @Value("${github.client_id}")
    private String client_id;
    @Value("${github.client_secret}")
    private String client_secret;
    @Value("${github.redirect_uri}")
    private String redirect_uri;

    @GetMapping("/callback")
    public String callback(@RequestParam(name = "code") String code,
                           @RequestParam(name = "state") String state,
                           HttpServletRequest request,
                           HttpServletResponse response ) {
        if (code == null || "".equals(code) || "".equals(state) || state==null) {
            return "redirect:/";
        }
        AccessTokenDto accessTokenDto = new AccessTokenDto();
        accessTokenDto.setCode(code);
        accessTokenDto.setClient_id(client_id);
        accessTokenDto.setClient_secret(client_secret);
        accessTokenDto.setRedirect_uri(redirect_uri);
        accessTokenDto.setState(state);
        String token = githubProvider.getAccessToken(accessTokenDto);
        GithubUser githubUser = githubProvider.getUser(token);
        if (githubUser != null) {
            // 首先判断此用户是否已经存在数据库当
            String loginToken = UUID.randomUUID().toString();
            User checkUser = userService.findByAccountId(String.valueOf(githubUser.getId()));
            if(checkUser != null) {
                // 说明token已经失效重新生成token
                userService.updateToken(checkUser.getId(),loginToken,System.currentTimeMillis());
            }else{
                // 否则重新创建一个用户
                User user = new User();
                user.setName(githubUser.getName());
                if (githubUser.getName() == null || "".equals(githubUser.getName())) {
                    return "redirect:/";
                }
                user.setAccountId(String.valueOf(githubUser.getId()));
                user.setToken(loginToken);
                user.setHeadImg(githubUser.getAvatar_url());
                user.setGmtCreate(System.currentTimeMillis());
                user.setGmtModified(user.getGmtCreate());
                userService.insertUser(user);
            }
            // 登录成功 写cookie和session
            request.getSession().setAttribute("user", githubUser);
            response.addCookie(new Cookie("token", loginToken));
            return "redirect:/";
        }else{
            // 登录失败
            return "redirect:/";
        }
    }
    @GetMapping("/logout")
    public String logout(HttpServletRequest request,
                         HttpServletResponse response) {
        request.getSession().removeAttribute("user");
        Cookie cookie = new Cookie("token", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return "redirect:/";
    }
}
