package cn.sl.service;

import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.PaginationDto;
import cn.sl.dto.QuestionDto;
import cn.sl.mapper.QuestionMapper;
import cn.sl.mapper.UserMapper;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionMapper questionMapper;
    @Autowired
    private UserMapper userMapper;

    public List<QuestionDto> list() {
        List<QuestionDto> questionDtos = new ArrayList<>();
        List<Question> questions = questionMapper.list();
        for (Question q:questions) {
            User user = userMapper.findById(q.getCreator());
            if (user != null){
                QuestionDto questionDto = new QuestionDto();
                BeanUtils.copyProperties(q, questionDto);
                questionDto.setUser(user);
                questionDtos.add(questionDto);
            }
        }
        return questionDtos;
    }

    public PaginationDto list(int page, int size) {
        int totalPage = getTotalPage(questionMapper.count(),size);
        if(page < 1){
            page = 1;
        }else if (page > totalPage){
            page = totalPage;
        }
        int offset = size * (page - 1);
        List<Question> questions = questionMapper.paginationList(offset, size);
        return getPaginationDto(questions,page,size);
    }

    public PaginationDto list(int id,int page,int size) {
        int totalPage = getTotalPage(questionMapper.count(),size);
        if(page < 1){
            page = 1;
        }else if (page > totalPage){
            page = totalPage;
        }
        int offset = size * (page - 1);
        List<Question> questions = questionMapper.paginationWithIdList(id,offset, size);
        return getPaginationDto(questions,page,size);
    }

    private int getTotalPage(int count, int size) {
        return count%size==0?count/size:count/size+1;
    }

    private PaginationDto getPaginationDto(List<Question> questions,int page,int size) {
        PaginationDto paginationDto = new PaginationDto();
        List<QuestionDto> questionDtos = new ArrayList<>();
        for (Question question:questions) {
            User user = userMapper.findById(question.getCreator());
            QuestionDto questionDto = new QuestionDto();
            questionDto.setUser(user);
            BeanUtils.copyProperties(question,questionDto);
            questionDtos.add(questionDto);
        }
        paginationDto.setQuestionDtos(questionDtos);
        Integer totalCount = questionMapper.count();
        paginationDto.setPagination(totalCount,page,size);
        return paginationDto;
    }

}
