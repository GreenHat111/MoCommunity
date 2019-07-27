package cn.sl.interceptor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
//@EnableWebMvc
public class WebConfig implements WebMvcConfigurer {

    @Autowired
    private SessionInterceptor sessionInterceptor;
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(sessionInterceptor).addPathPatterns("/**")
//                .addPathPatterns("/callback/**")
//                .addPathPatterns("/profile/**")
//                .addPathPatterns("/publish")
                .excludePathPatterns("/css/**","/js/**","/fonts/**","/img/**")
                .excludePathPatterns("/question/**")
                .excludePathPatterns("./");
    }
}
