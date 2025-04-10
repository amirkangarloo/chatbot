import { IntersectionType } from "@nestjs/swagger";
import { RegisterRequestDto } from "src/domain/user/dto/register-request.dto";

export class LoginRequestDto extends IntersectionType(RegisterRequestDto) { }