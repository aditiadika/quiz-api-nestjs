import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuestionDto } from "./dto/CreateQuestion.dto";
import { Question } from "./question.entity";
import { QuestionSevice } from "./question.service";

@Controller('question')
export class QuestionController {
    constructor(private questionService: QuestionSevice){}

    @Post()
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() questionDTO: CreateQuestionDto): Promise<Question> {
        return await this.questionService.CreateQuestion(questionDTO);
    }
}