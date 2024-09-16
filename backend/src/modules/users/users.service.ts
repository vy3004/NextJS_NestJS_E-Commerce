import aqp from 'api-query-params';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { hashPassword } from '@/utils/helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async isEmailExists(email: string) {
    const user = await this.userModel.exists({ email });
    return user !== null;
  }

  async create(createUserDto: CreateUserDto) {
    const { name, email, phone, password, address, image } = createUserDto;

    // check if email exists
    const isEmailExists = await this.isEmailExists(email);
    if (isEmailExists) {
      throw new BadRequestException(`Email ${email} already exists`);
    }

    // hash password
    const hashedPassword = await hashPassword(password);
    const user = await this.userModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
      image,
    });

    return {
      _id: user._id,
    };
  }

  async findAll(query: any) {
    const { page, pageSize, ...apiQueryParams } = query;

    const { filter, sort } = aqp(apiQueryParams);

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPage = Math.ceil(totalItems / pageSize);

    const result = await this.userModel
      .find(filter)
      .sort(sort as any)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .select('-password');

    return { result, totalPage };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
