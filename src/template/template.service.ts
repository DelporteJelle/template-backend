import { Injectable, NotFoundException } from '@nestjs/common';
import { Template } from './entities/template.entity';
//Generate service with the command: nest g s {name}
@Injectable()
export class TemplateService {
  private templates: Template[] = [
    {
      id: 1,
      name: 'Template 1',
      type: 'Type 1',
    },
  ];

  findAll() {
    return this.templates;
  }

  findOne(id: string) {
    const template = this.templates.find((item) => item.id === +id);
    if (!template) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return template;
  }

  create(createTemplateDto: any) {
    this.templates.push(createTemplateDto);
  }

  update(id: string, updateTemplateDto: any) {
    const existingTemplate = this.findOne(id);
    if (existingTemplate) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const templateIndex = this.templates.findIndex((item) => item.id === +id);
    if (templateIndex >= 0) {
      this.templates.splice(templateIndex, 1);
    }
  }
}
