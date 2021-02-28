import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { AppError } from '../errors/AppError';

class AnswerController {
    async execute(request: Request, response: Response) {
        const { value } =  request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveysUsers = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if (!surveysUsers) {
            throw new AppError("Survey User does not exists!");
        }

        if (surveysUsers.value !== null) {
            throw new AppError("Survey already carried out");
        }

        surveysUsers.value = Number(value);

        await surveysUsersRepository.save(surveysUsers);

        return response.json(surveysUsers);
    }
}

export { AnswerController };
