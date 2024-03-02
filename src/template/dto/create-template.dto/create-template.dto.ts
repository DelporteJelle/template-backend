//Create a DTOP using the command: nest g class template/dto/create-template.dto --no-spec

import { IsString } from 'class-validator';

export class CreateTemplateDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly type: string;

  @IsString({ each: true })
  readonly list: string[];
}
