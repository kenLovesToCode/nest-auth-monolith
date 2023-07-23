import { Injectable } from '@nestjs/common';
import { UpdateAuthInput } from './dto/update-auth.input';
import { SignUpInput } from './dto/input/sign-up.input';

@Injectable()
export class AuthService {
  create(signUpInput: SignUpInput) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
