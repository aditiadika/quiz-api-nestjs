import { Get, Injectable } from "@nestjs/common";

@Injectable()
export class QuizService {
    @Get('/')
    getAllQuiz() {
        return [1,2,3,4,5,6,7,8,9]
    }
}