import { Module } from '@nestjs/common';
import { TemplateController } from './template.controller';
import { TemplateService } from './template.service';
//Generate module with the command: nest g module {name}

@Module({
  imports: [],
  exports: [],
  controllers: [TemplateController],
  providers: [TemplateService],
})
export class TemplateModule {}
