package cn.sl.controller;

import cn.sl.dto.FileDto;
import com.qcloud.cos.COSClient;
import com.qcloud.cos.ClientConfig;
import com.qcloud.cos.auth.BasicCOSCredentials;
import com.qcloud.cos.auth.COSCredentials;
import com.qcloud.cos.exception.CosClientException;
import com.qcloud.cos.exception.CosServiceException;
import com.qcloud.cos.model.*;
import com.qcloud.cos.region.Region;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.Date;
import java.util.UUID;

@Controller
@RequestMapping("/file")
public class FileController {

    @Value("${tenxun.secret_id}")
    private String secretId;
    @Value("${tenxun.secret_key}")
    private String secretKey;
    @Value("${tenxun.bucket}")
    private String bucket;

    private static final String yuMing = "https://lg-562dwqcq-1257071571.cos.ap-shanghai.myqcloud.com/";
    @RequestMapping("/upload")
    @ResponseBody
    public FileDto upload(HttpServletRequest request) {
        MultipartHttpServletRequest multipartHttpServletRequest = (MultipartHttpServletRequest) request;
        MultipartFile file = multipartHttpServletRequest.getFile("editormd-image-file");
        if (file.isEmpty()) {
            return new FileDto(0,"文件为空",null);
        }
        COSCredentials cosCredentials = new BasicCOSCredentials(secretId,secretKey);
        Region region = new Region("ap-shanghai");
        ClientConfig clientConfig = new ClientConfig(region);
        COSClient cosClient = new COSClient(cosCredentials,clientConfig);
        try {
            String key = UUID.randomUUID().toString();
            ObjectMetadata objectMetadata = new ObjectMetadata();
            objectMetadata.setContentType(file.getContentType());
            PutObjectRequest putObjectRequest = new PutObjectRequest(bucket, key,  file.getInputStream(),objectMetadata);
            putObjectRequest.setStorageClass(StorageClass.Standard_IA);
            PutObjectResult putObjectResult = cosClient.putObject(putObjectRequest);
            Date expiration = new Date(new Date().getTime() + 5 * 60 * 10000);
            cosClient.generatePresignedUrl(bucket,key,expiration);
//            String etag = putObjectResult.getETag();
            return new FileDto(1,"成功",yuMing + key);
        }catch (CosServiceException e) {
            e.printStackTrace();
        } catch (CosClientException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            cosClient.shutdown();
        }
        return new FileDto(0,"上传失败",null);
    }
}

