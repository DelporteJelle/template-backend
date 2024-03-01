import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemplateController } from './template/template.controller';
import { TemplateService } from './template/template.service';

@Module({
  imports: [],
  controllers: [AppController, TemplateController],
  providers: [AppService, TemplateService],
})
export class AppModule {}
