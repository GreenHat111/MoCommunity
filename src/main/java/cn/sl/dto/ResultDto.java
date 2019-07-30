package cn.sl.dto;

import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import java.util.List;

public class ResultDto<T> {
    private Integer code;
    private String message;
    private T data;
    public static ResultDto errorOf(Integer code,String msg) {
        ResultDto resultDto = new ResultDto();
        resultDto.setCode(code);
        resultDto.setMessage(msg);
        return resultDto;
    }
    public static <T> ResultDto okOf(T data) {
        ResultDto resultDto = new ResultDto();
        resultDto.setCode(200);
        resultDto.setData(data);
        resultDto.setMessage("请求成功");
        return resultDto;
    }

    public static ResultDto okOf() {
        ResultDto resultDto = new ResultDto();
        resultDto.setCode(200);
        resultDto.setMessage("请求成功");
        return resultDto;
    }

    public static ResultDto errorOf(CustomErrorCode customErrorCode) {
        return errorOf(customErrorCode.getCode(),customErrorCode.getMessage());
    }
    public static ResultDto errorOf(CustomizeException e) {
        return errorOf(e.getCode(),e.getMessage());
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }
}
