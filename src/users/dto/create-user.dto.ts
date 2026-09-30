import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    required: true,
    example: 'usuario@gmail.com',
  })
  email: string;

  @ApiProperty({
    required: false,
    example: 'Juan Perez',
  })
  name?: string;

  @ApiProperty({
    required: true,
    example: '123456',
  })
  password: string;

  @ApiProperty({
    required: false,
    example: '88887777',
  })
  telephone?: string;

  @ApiProperty({
    required: true,
    example: 1,
    description: 'ID del tenant al que pertenece el usuario',
  })
  tenantId: number;
}