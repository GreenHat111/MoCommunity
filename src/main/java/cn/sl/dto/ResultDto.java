package cn.sl.dto;

import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;

public class ResultDto {
    private Integer code;
    private String message;
    public static ResultDto errorOf(Integer code,String msg) {
        ResultDto resultDto = new ResultDto();
        resultDto.setCode(code);
        resultDto.setMessage(msg);
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
}
