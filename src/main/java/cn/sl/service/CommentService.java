package cn.sl.service;

import cn.sl.domain.Comment;
import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.CommentDto;
import cn.sl.enums.CommentTypeEnum;
import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import cn.sl.mapper.CommentMapper;
import cn.sl.mapper.UserMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentMapper commentMapper;

    @Autowired
    private QuestionService questionService;
    @Autowired
    private UserMapper userMapper;

    // 添加事务
    @Transactional
    public void create(Comment comment) {
        if (comment.getParentId() == null || comment.getParentId() == 0) {
            throw new CustomizeException(CustomErrorCode.TARGET_PARAM_NOT_FOUND);
        }
        if (comment.getType() == null || !CommentTypeEnum.isExist(comment.getType())) {
            throw new CustomizeException(CustomErrorCode.TYPE_PARAM_WRONG);
        }
        if (comment.getType() == CommentTypeEnum.COMMENT.getType()) {
            // 回复评论
            Comment dbComment = commentMapper.selectByPrimaryKey(comment.getParentId());
            if (dbComment == null) {
                throw new CustomizeException(CustomErrorCode.COMMENT_BOT_FOUND);
            }else {
                commentMapper.create(comment);
            }
        }else {
            // 回复问题
            Question question = questionService.selectByPrimaryKey(comment.getParentId());
            if (question == null) {
                throw new CustomizeException(CustomErrorCode.QUESTION_NOT_FOUND);
            }
            commentMapper.create(comment);
            // 增加一条评论数
            questionService.updateCommentCount(question.getId());
        }
    }

    public List<CommentDto> listByQuestionId(Integer id,Integer type) {
        List<Comment> comments = commentMapper.selectByQuestionId(id,type);

        return getCommentDtos(comments);
    }

    public List<CommentDto> listByTargetId(Integer id,Integer type) {
        List<Comment> comments = commentMapper.selectByQuestionId(id,type);

        return getCommentDtos(comments);
    }

    private List<CommentDto> getCommentDtos(List<Comment> comments) {
        List<CommentDto> commentDtos = new ArrayList<>();
        for (Comment comment:comments) {
            CommentDto commentDto = new CommentDto();
            User user = userMapper.findById(comment.getCommentUser());
            commentDto.setComment(comment);
            commentDto.setUser(user);
            commentDtos.add(commentDto);
        }
        return commentDtos;
    }
}
