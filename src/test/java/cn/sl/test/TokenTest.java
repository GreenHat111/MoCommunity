package cn.sl.test;

import org.apache.commons.codec.digest.DigestUtils;
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
    @Test
    public void test2() {
        String tag = "first,time,second,time，fuck";
        String tags = tag.replace(',','|').replace('，','|');
        System.out.println(tags);
        System.out.println();
    }

    public static String md5(String text, String key) throws Exception {
        //加密后的字符串
        String encodeStr= DigestUtils.md5Hex(text + key);
        System.out.println("MD5加密后的字符串为:encodeStr="+encodeStr);
        return encodeStr;
    }
    public static boolean verify(String text, String key, String md5) throws Exception {
        //根据传入的密钥进行验证
        String md5Text = md5(text, key);
        if(md5Text.equalsIgnoreCase(md5))
        {
            System.out.println("MD5验证通过");
            return true;
        }

        return false;
    }
    @Test
    public void md() {
        try {
            System.out.println(md5("LUOSEN1214","mo"));
            if (verify("LUOSEN121","mo","720cc6edc05d96028c40e1dce9dba81f")) {
                System.out.println("正确的");
            }else {
                System.out.println("错误的");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
