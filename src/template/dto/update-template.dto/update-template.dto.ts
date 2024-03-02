import { PartialType } from '@nestjs/mapped-types';
import { CreateTemplateDto } from '../create-template.dto/create-template.dto';

//Inherits from the CreateTemplateDto and uses the PartialType to make all the properties optional.
export class UpdateTemplateDto extends PartialType(CreateTemplateDto) {}
