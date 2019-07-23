package cn.sl.provider;

import cn.sl.dto.AccessTokenDto;
import cn.sl.dto.GithubUser;
import com.alibaba.fastjson.JSON;
import okhttp3.*;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class GithubProvider {

    private static final MediaType mediaType = MediaType.get("application/json; charset=utf-8");

    public String getAccessToken(AccessTokenDto accessTokenDto) {

        OkHttpClient client = new OkHttpClient();

        RequestBody body = RequestBody.create(mediaType, JSON.toJSONString(accessTokenDto));
        Request request = new Request.Builder()
                .url("https://github.com/login/oauth/access_token")
                .post(body)
                .build();
        try (Response response = client.newCall(request).execute()) {
            String s = response.body().string();
            String[] spilt = s.split("&");
            //            String scope = spilt[1].split("=").length >=2 ? spilt[1].split("=")[1]:"";
//            String token_type = spilt[2].split("=").length >=2 ? spilt[2].split("=")[1]:"";
            return spilt[0].split("=").length >=2 ? spilt[0].split("=")[1]:"";
        } catch (IOException e) {
            e.printStackTrace();
        }

        return null;
    }

    public GithubUser getUser(String accessToken) {
        OkHttpClient client = new OkHttpClient();
        Request request = new Request.Builder()
                .url("https://api.github.com/user?access_token="+accessToken)
                .build();
        try {
            Response response = client.newCall(request).execute();
            String string = response.body().string();
            return JSON.parseObject(string,GithubUser.class);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
