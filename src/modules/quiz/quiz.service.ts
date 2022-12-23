import { Body, Get, Injectable, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService {
    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository){}

    @Get('/')
    getAllQuiz() {
        return [1,2,3,4,5,6,7,8,9]
    }

    async createNewQuiz(quiz: CreateQuizDto){
        return await this.quizRepository.save(quiz)
    }
}