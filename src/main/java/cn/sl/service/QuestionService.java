package cn.sl.service;

import cn.sl.domain.Question;
import cn.sl.domain.User;
import cn.sl.dto.PaginationDto;
import cn.sl.dto.QuestionDto;
import cn.sl.exception.CustomErrorCode;
import cn.sl.exception.CustomizeException;
import cn.sl.mapper.QuestionMapper;
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
    private UserService userService;

    /**
     *  不分页查询所有的集合
     * @return
     */
    public List<QuestionDto> list() {
        List<QuestionDto> questionDtos = new ArrayList<>();
        List<Question> questions = questionMapper.list();
        for (Question q:questions) {
            User user = userService.findById(q.getCreator());
            if (user != null){
                QuestionDto questionDto = new QuestionDto();
                BeanUtils.copyProperties(q, questionDto);
                questionDto.setUser(user);
                questionDtos.add(questionDto);
            }
        }
        return questionDtos;
    }


    public PaginationDto list(String search,int page, int size) {
        search = search.replace(" ","|")
                .replace(",","|")
                .replace("，","|");
        int totalPage = getTotalPage(questionMapper.countSearchAll(search),size);
        if (totalPage<=0) totalPage=1;
        if(page < 1){
            page = 1;
        }else if (page > totalPage){
            page = totalPage;
        }
        int offset = size * (page - 1);
        List<Question> questions = questionMapper.paginationSearchList(search,offset, size);
        return getPaginationDto(questions,page,size,null,search);
    }

    public PaginationDto list(int page, int size) {
        int totalPage = getTotalPage(questionMapper.countAll(),size);
        if (totalPage<=0) totalPage=1;
        if(page < 1){
            page = 1;
        }else if (page > totalPage){
            page = totalPage;
        }
        int offset = size * (page - 1);


        List<Question> questions = questionMapper.paginationList(offset, size);
        return getPaginationDto(questions,page,size,null,null);
    }

    public PaginationDto list(int userId,int page,int size) {
        int totalPage = getTotalPage(questionMapper.count(userId),size);
        if (totalPage <= 0) totalPage=1;
        if(page < 1){
            page = 1;
        }else if (page > totalPage){
            page = totalPage;
        }
        int offset = size * (page - 1);
        List<Question> questions = questionMapper.paginationWithIdList(userId,offset, size);
        return getPaginationDto(questions,page,size,userId,null);
    }

    private int getTotalPage(int count, int size) {
        return count%size==0?count/size:count/size+1;
    }

    private PaginationDto getPaginationDto(List<Question> questions,int page,int size,
                                           Integer userId,String search) {
        PaginationDto<QuestionDto> paginationDto = new PaginationDto<>();
        List<QuestionDto> questionDtos = new ArrayList<>();
        for (Question question:questions) {
            User user = userService.findById(question.getCreator());
            QuestionDto questionDto = new QuestionDto();
            if (user == null) {
                questionDto.setUser(new User());
            } else {
                questionDto.setUser(user);
            }
            BeanUtils.copyProperties(question,questionDto);
            questionDtos.add(questionDto);
        }
        paginationDto.setDataList(questionDtos);
        Integer totalCount = null;
        if (userId == null && search == null || "".equals(search)) {
            totalCount = questionMapper.countAll();
        }else if (userId != null){
            totalCount = questionMapper.count(userId);
        }else if (search!= null && !"".equals(search) && userId == null) {
            totalCount = questionMapper.countSearchAll(search);
        }
        paginationDto.setPagination(totalCount,page,size);
        return paginationDto;
    }



    public QuestionDto getById(Long id) {
        Question question = questionMapper.getById(id);
        if (question == null) {
            throw new CustomizeException(CustomErrorCode.QUESTION_NOT_FOUND);
        }
        QuestionDto questionDto = new QuestionDto();
        BeanUtils.copyProperties(question, questionDto);
        User user = userService.findById(question.getCreator());
        questionDto.setUser(user);
        return questionDto;
    }

    public Question getQuestionWithId(Long id) {
        return questionMapper.getById(id);
    }

    public void create(Question question) {
        questionMapper.create(question);
    }

    public Question getQuestionWithCreator(int id) {
        return questionMapper.getQuestionWithCreator(id);
    }

    public int updateQuestion(Question question) {
        return questionMapper.updateQuestion(question);
    }

    public void addViewCount(Long id) {
        questionMapper.addViewCount(id);
    }

    public Question selectByPrimaryKey(Long parentId) {
        return questionMapper.selectByPrimaryKey(parentId);
    }

    public void updateCommentCount(Long id) {
        questionMapper.updateCommentCount(id);
    }


    public List<Question> selectRelated(QuestionDto questionDto) {
        String tags = questionDto.getTag().replace(',','|').replace('，','|');
        if ("".equals(tags) || tags == null) return new ArrayList<>();
        List<Question> questions = questionMapper.selectRelated(questionDto.getId(),tags);
        return questions;
    }

    private List<QuestionDto> getQuestionDto(List<Question> questions) {
        List<QuestionDto> questionDtos = new ArrayList<>();
        for (Question question:questions) {
            QuestionDto questionDto = new QuestionDto();
            User user = userService.findById(question.getCreator());
            questionDto.setUser(user);
            BeanUtils.copyProperties(question,questionDto);
            questionDtos.add(questionDto);
        }
        return questionDtos;
    }

}
