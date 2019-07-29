package cn.sl.controller;

import cn.sl.domain.Comment;
import cn.sl.domain.User;
import cn.sl.dto.CommentDto;
import cn.sl.dto.ResultDto;
import cn.sl.exception.CustomErrorCode;
import cn.sl.mapper.CommentMapper;
import cn.sl.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.xml.transform.Result;
import java.util.HashMap;
import java.util.Map;

@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;


    @ResponseBody
    @PostMapping("/comment")
    public Object post(@RequestBody CommentDto commentDto,
                       HttpServletRequest request) {
        User user = (User) request.getSession().getAttribute("user");
        if (user == null) {
            return ResultDto.errorOf(CustomErrorCode.NO_LOGIN);
        }
        System.out.println(user.toString());
        Comment comment = new Comment();
        comment.setParentId(commentDto.getParentId());
        comment.setType(commentDto.getType());
        comment.setComment(commentDto.getComment());
        comment.setGmtCreate(System.currentTimeMillis());
        comment.setGmtModified(comment.getGmtCreate());
        comment.setCommentUser(user.getId());
        System.out.println(comment.toString());
        commentService.create(comment);
        return ResultDto.okOf();
    }
}
