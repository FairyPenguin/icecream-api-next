import { IsNotEmpty } from 'class-validator';

export class CreateFlavorDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  origin: string;
}
