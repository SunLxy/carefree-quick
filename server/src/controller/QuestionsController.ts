import { AppDataSource } from '../data-source';
import { Request, Response } from 'express';
import { Questions } from '../entity/Questions';
import { FindOptionsWhere } from 'typeorm';

export class QuestionsController {
  private questionRepository = AppDataSource.getRepository(Questions);
  /**分页查询*/
  async list(request: Request, response: Response) {
    const { page = 1, pageSize = 20, type } = request.body;
    const skip = (page - 1) * pageSize;
    try {
      let where: FindOptionsWhere<Questions> = {};
      if (type) {
        where = { type };
      }
      const [value, total] = await this.questionRepository.findAndCount({
        where,
        skip: skip,
        take: pageSize,
      });
      const jsonData = {
        data: {
          rows: value,
          total,
        },
        code: 1,
        message: '查询成功',
      };
      response.status(200).json(jsonData);
    } catch (err) {
      response.status(400).json({
        code: -2,
        message: err,
      });
    }
  }
  /**查询单个详情*/
  async info(request: Request<Questions>, response: Response) {
    try {
      const { id } = request.body;
      const question = await this.questionRepository.findOne({
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
    const { title, type, content } = request.body;
    try {
      const question = Object.assign(new Questions(), {
        title,
        type,
        content,
      });
      const result = await this.questionRepository.save(question);
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
      console.log(err.message);
      response.status(400).json({
        code: -2,
        message: err,
      });
    }
  }
  /**删除*/
  async delete(request: Request, response: Response) {
    const id = request.body.id;
    const questionToRemove = await this.questionRepository.findOneBy({ id });
    let jsonData = {};

    if (!questionToRemove) {
      jsonData = {
        data: undefined,
        code: -1,
        message: '未找到需删除数据',
      };
    } else {
      const result = await this.questionRepository.remove(questionToRemove);
      jsonData = {
        data: result,
        code: 1,
        message: '删除成功',
      };
    }
    response.status(200).json(jsonData);
  }
}
