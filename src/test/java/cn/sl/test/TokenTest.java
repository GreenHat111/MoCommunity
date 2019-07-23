package cn.sl.test;

import org.junit.Test;

public class TokenTest {

    @Test
    public void test() {
        String s = "access_token=dee676aefecc52b2c5fb0960d23dfd422b77ab73&scope=&token_type=bearer";
        String[] spilt = s.split("&");

        String access_token = spilt[0].split("=").length >=2 ? spilt[0].split("=")[1]:"";
        String scope = spilt[1].split("=").length >=2 ? spilt[1].split("=")[1]:"";
        String token_type = spilt[2].split("=").length >=2 ? spilt[2].split("=")[1]:"";
        System.out.println(access_token);
        System.out.println(scope);
        System.out.println(token_type);
    }
}
