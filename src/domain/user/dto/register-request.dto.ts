import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class RegisterRequestDto {
    @ApiProperty({
        name: "username",
        description: "unique username",
        example: "john_doe",
        type: String
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        name: "password",
        description: "password",
        example: "1234",
        type: String
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}