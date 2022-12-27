import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { QuestionSevice } from './question.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({
    controllers: [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    providers: [QuizService, QuestionSevice],
})
export class QuizModule {}
