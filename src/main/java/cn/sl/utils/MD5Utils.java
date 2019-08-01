package cn.sl.utils;

import org.apache.commons.codec.digest.DigestUtils;
import org.junit.Test;

public class MD5Utils {

    private static String key="mo_sl";
    public static String md5(String pw){
        //加密后的字符串
        String encodeStr= DigestUtils.md5Hex(pw + key);
        return encodeStr;
    }
    public static boolean verify(String pw,  String md5) {
        //根据传入的密钥进行验证
        String md5Text = (String) md5(pw);
        if(md5Text.equalsIgnoreCase(md5)) {
            return true;
        }
        return false;
    }

//    @Test
//    public void md() {
//        try {
//            System.out.println(md5("LUOSEN1214"));
//            if (verify("LUOSEN1214",  "0e544f00e4763bbad61b1a4d5d1f6114")) {
//                System.out.println("正确的");
//            } else {
//                System.out.println("错误的");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
}
