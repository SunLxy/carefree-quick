import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { Answers } from '../entity/Answers';
import { FindOptionsWhere } from 'typeorm';

export class AnswersController {
  private answerRepository = AppDataSource.getRepository(Answers);
  /**分页查询*/
  async list(request: Request, response: Response) {
    const { page = 1, pageSize = 20, questionId } = request.body;
    const skip = (page - 1) * pageSize;
    try {
      let where: FindOptionsWhere<Answers> = {};
      if (questionId) {
        where = { questionId };
      }
      const [value, total] = await this.answerRepository.findAndCount({
        where,
        skip: skip,
        take: pageSize,
      });
      response.status(200).json({
        data: {
          rows: value,
          total,
        },
        code: 1,
        message: '查询成功',
      });
    } catch (err) {
      response.status(400).json({
        code: -2,
        message: err,
      });
    }
  }
  /**查询单个详情*/
  async info(request: Request<Answers>, response: Response) {
    try {
      const { id } = request.body;
      const question = await this.answerRepository.findOne({
        where: { id },
      });
      let jsonData = {};
      if (!question) {
        jsonData = {
          data: undefined,
          code: -1,
          message: '未查询到数据',
        };
      } else {
        jsonData = {
          data: question,
          code: 1,
          message: '查询成功',
        };
      }
      response.status(200).json(jsonData);
    } catch (err) {
      response.status(400).json({
        code: -2,
        message: err,
      });
    }
  }
  /**创建*/
  async create(request: Request, response: Response) {
    const { content, questionId } = request.body;
    try {
      const question = Object.assign(new Answers(), {
        questionId,
        content,
      });
      const result = await this.answerRepository.save(question);
      let jsonData = {};
      if (result) {
        jsonData = {
          data: result,
          code: 1,
          message: '创建成功',
        };
      } else {
        jsonData = {
          data: undefined,
          code: -1,
          message: '创建失败',
        };
      }
      response.status(200).json(jsonData);
    } catch (err) {
      response.status(400).json({
        code: -2,
        message: err,
      });
    }
  }
  /**删除*/
  async delete(request: Request, response: Response) {
    const id = request.body.id;
    const answerToRemove = await this.answerRepository.findOneBy({ id });
    let jsonData = {};

    if (!answerToRemove) {
      jsonData = {
        data: undefined,
        code: -1,
        message: '未找到需删除数据',
      };
    } else {
      const result = await this.answerRepository.remove(answerToRemove);
      jsonData = {
        data: result,
        code: 1,
        message: '删除成功',
      };
    }
    response.status(200).json(jsonData);
  }
}
