package cn.sl.dto;

import java.util.ArrayList;
import java.util.List;

/**
 *  分页封装
 */

public class PaginationDto {

    private List<QuestionDto> questionDtos;
    private boolean showPrevious;
    private boolean showFirstPage;
    private boolean showNext;
    private boolean showEndPage;
    private int page;
    private int totalPage;
    private List<Integer> pages = new ArrayList<>();


    public List<QuestionDto> getQuestionDtos() {
        return questionDtos;
    }

    public void setQuestionDtos(List<QuestionDto> questionDtos) {
        this.questionDtos = questionDtos;
    }

    public boolean isShowPrevious() {
        return showPrevious;
    }

    public void setShowPrevious(boolean showPrevious) {
        this.showPrevious = showPrevious;
    }

    public boolean isShowFirstPage() {
        return showFirstPage;
    }

    public void setShowFirstPage(boolean showFirstPage) {
        this.showFirstPage = showFirstPage;
    }

    public boolean isShowNext() {
        return showNext;
    }

    public void setShowNext(boolean showNext) {
        this.showNext = showNext;
    }

    public boolean isShowEndPage() {
        return showEndPage;
    }

    public void setShowEndPage(boolean showEndPage) {
        this.showEndPage = showEndPage;
    }

    public int getPage() {
        return page;
    }

    public void setPage(int page) {
        this.page = page;
    }

    public List<Integer> getPages() {
        return pages;
    }

    public void setPages(List<Integer> pages) {
        this.pages = pages;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public void setPagination(Integer totalCount, int page, int size) {
        this.page = page;

        if (totalCount % size == 0) {
            totalPage = totalCount / size;
        }else{
            totalPage = totalCount / size + 1;
        }
        pages.add(page);
        for (int i=1;i<=3;i++) {
            if (page-i > 0) {
                pages.add(0,page - i);
            }
            if (page + i <= totalPage){
                pages.add(page+i);
            }
        }

        showPrevious = page != 1;
        showNext = page != totalPage;

        // 是否展示第一页
        showFirstPage = !pages.contains(1);
        // 是否展示最后一页
        showEndPage = !pages.contains(totalPage);


    }
}
