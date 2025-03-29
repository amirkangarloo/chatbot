import { SetMetadata } from "@nestjs/common";
import { jwtConstants } from "src/constant";

export const Public = () => SetMetadata(jwtConstants.IS_PUBLIC_KEY, true);