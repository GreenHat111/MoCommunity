package cn.sl.controller;

import cn.sl.domain.User;
import cn.sl.dto.NotificationDto;
import cn.sl.enums.NotificationTypeEnum;
import cn.sl.service.NotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/notification")
public class NotificationController {

    @Autowired
    private NotificationService notificationService;
    @GetMapping("/{id}")
    public String notification(HttpServletRequest request,
                               @PathVariable("id") Long id) {
        User user = (User) request.getSession().getAttribute("user");
        if (user == null) {
            return "redirect:/";
        }
        NotificationDto notificationDto = notificationService.read(id,user);
        if (NotificationTypeEnum.REPLY_COMMENT.getType() == notificationDto.getType()
        || NotificationTypeEnum.REPLY_QUESTION.getType() == notificationDto.getType()) {
            // 将此通知的状态变为已读
            notificationService.setRead(id);
            return "redirect:/question/"+notificationDto.getOuterId();
        }
        return "redirect:/";
    }
}
