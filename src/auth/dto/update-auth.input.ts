import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { SignUpInput } from './input/sign-up.input';

@InputType()
export class UpdateAuthInput extends PartialType(SignUpInput) {
  @Field(() => Int)
  id: number;
}
