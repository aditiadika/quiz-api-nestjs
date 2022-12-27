import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuestionDto } from "./dto/CreateQuestion.dto";
import { Question } from "./question.entity";
import { QuestionRepository } from "./question.repository";

@Injectable()
export class QuestionSevice {
    constructor(@InjectRepository(Question) private questionRepository: QuestionRepository){}

    async CreateQuestion(question: CreateQuestionDto): Promise<Question>{
        return await this.questionRepository.save(question)
    }
}